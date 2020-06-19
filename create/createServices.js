const { resolve } = require(`path`)
const chunk = require(`lodash/chunk`)

module.exports = async ({ actions, graphql }, options) => {
  const { perPage } = options

  const { data } = await graphql(/* GraphQL */ `
    {
      wpgraphql {
        services {
          edges {
            node {
              uri
              id
            }
          }
        }
      }
    }
  `)

  const chunkedContentNodes = chunk(
    data.wpgraphql.services.edges.nodes,
    perPage
  )
  if (
    !data.wpgraphql.services.edges.node ||
    data.wpgraphql.services.edges.node.length === 0
  )
    return

  await Promise.all(
    data.wpgraphql.services.edges.map(async (services, index) => {
      const { data } = await graphql(/* GraphQL */ `
        {
          wpgraphql {
            services {
              edges {
                node {
                  uri
                  slug
                  databaseId
                }
              }
            }
          }
        }
      `)

      const servicesPath = services.uri

      await Promise.all(
        chunkedContentNodes.map(async (nodesChunk, index) => {
          const firstNode = nodesChunk[0]

          await actions.createPage({
            component: resolve(`./src/templates/services.js`),
            path:
              index === 0 ? servicesPath : `${servicesPath}page/${index + 1}/`,
            context: {
              firstId: firstNode.id,
              archiveType: "services",
              archivePath: servicesPath,
              userDatabaseId: services.databaseId,
              offset: perPage * index,
              pageNumber: index + 1,
              totalPages: chunkedContentNodes.length,
              perPage,
            },
          })
        })
      )
    })
  )
}
