const path = require(`path`)
const glob = require(`glob`)

const createServices = require(`./create/createServices`)

const getTemplates = () => {
  const sitePath = path.resolve(`./`)
  return glob.sync(`./src/templates/**/*.js`, { cwd: sitePath })
}

exports.createPages = async props => {
  const { data: wpSettings } = await props.graphql(/* GraphQL */ `
    {
      wpgraphql {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const perPage = wpSettings.wpgraphql.readingSettings.postsPerPage || 10
  const templates = getTemplates()

  await createServices(props, { perPage })
}

/* create remotefile */
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
