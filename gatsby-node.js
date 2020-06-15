const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = async (
    {
        actions,
        cache,
        createNodeId,
        createResolvers,
        store,
        reporter,
    },
) => {
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

/* create pages */
const createPages = require("./src/create/createPage")

exports.createPagesStatefully = async ({ graphql, actions, reporter }, options) => {
    await createPages({ actions, graphql, reporter }, options)
}