import React from "react"
import Layout from "../../components/Layout"
import PostEntry from "../../components/PostEntry"
import Pagination from "../../components/Pagination"
import SEO from "../../components/SEO"
import "../../components/css/blog.css"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Blog = ({ pageContext, data }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext

  return (
    <Layout>
      <BackgroundImage
        className="masthead"
        fadeIn
        fluid={
          data.wpgraphql.pages.edges[0].node.bloggenACFgraphql.hero.heroImage
            .imageFile.childImageSharp.fluid
        }
      >
        <div className="black-overlay">
          <div className="contentbox">
            <h1>
              {
                data.wpgraphql.pages.edges[0].node.bloggenACFgraphql.hero
                  .heroOverskrift
              }
            </h1>
            <h2>
              {
                data.wpgraphql.pages.edges[0].node.bloggenACFgraphql.hero
                  .heroSubheading
              }
            </h2>
          </div>
        </div>
      </BackgroundImage>
      <section className="bloggen">
        <SEO title="Blog" description="Blog posts" keywords={[`blog`]} />
        <div className="container">
          {nodes &&
            nodes.map(post => <PostEntry key={post.postId} post={post} />)}

          <Pagination
            pageNumber={pageNumber}
            hasNextPage={hasNextPage}
            allPosts={allPosts}
            itemsPerPage={itemsPerPage}
          />
        </div>
      </section>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    wpgraphql {
      pages(where: { id: 536 }) {
        edges {
          node {
            bloggenACFgraphql {
              hero {
                heroOverskrift
                heroSubheading
                heroImage {
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
