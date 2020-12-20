const PostTemplateFragment = `
    fragment PostTemplateFragment on WPGraphQL_Post {
        id
        postId
        title
        content
        excerpt
        link
        featuredImage {
            node {
            sourceUrl
            altText
            imageFile {
                childImageSharp {
                    fluid(maxHeight: 400, maxWidth: 800, quality: 90, cropFocus: CENTER) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
                }
            }
        }
        categories {
            nodes {
                name
                slug
                id
            }
        }
        tags {
            nodes {
                slug
                name
                id
            }
        }
    }
`

const BlogPreviewFragment = `
    fragment BlogPreviewFragment on WPGraphQL_Post {
        id
        postId
        title
        uri
        date
        slug
        excerpt
        content
        featuredImage {
            node {
            sourceUrl
            altText
            imageFile {
                childImageSharp {
                    fluid(maxHeight: 400, maxWidth: 800, quality: 90, cropFocus: CENTER) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            }
        }
    }
`

module.exports.PostTemplateFragment = PostTemplateFragment
module.exports.BlogPreviewFragment = BlogPreviewFragment
