/* --------- Programatically Create Blog posts --------- */

const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== BLOG POSTS ====
    graphql(`
      {
        wpgraphql {
          posts {
            edges {
              node {
                excerpt
                postId
                date
                title
                content
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      const posts = result.wpgraphql.posts.edges
      const postsPerPage = 3
      const numberOfPages = Math.ceil(posts.length / postsPerPage)
      const blogPostListTemplate = path.resolve(
        "./src/templates/blogPostList.js"
      )

      Array.from({ length: numberOfPages }).forEach((page, index) => {
        createPage({
          component: slash(blogPostListTemplate),
          path: index === 0 ? "/blog" : `/blog/${index + 1}`,
          context: {
            posts: posts.slice(
              index * postsPerPage,
              index * postsPerPage + postsPerPage
            ),
            numberOfPages,
            currentPage: index + 1,
          },
        })
      })

      const pageTemplate = path.resolve("./src/templates/blogpost.js")
      _.each(posts, post => {
        createPage({
          path: `${post.node.slug}`,
          component: slash(pageTemplate),
          context: post.node,
        })
      })

      resolve()
    })
  })
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
