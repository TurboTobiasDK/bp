import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/css/blog.css"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import parse from "html-react-parser"

const dataPage = props => {
  const { wpgraphql } = props.data

  return (
    <Layout>
      <SEO
        title={wpgraphql.pages.edges[0].node.seo.title}
        description={wpgraphql.pages.edges[0].node.seo.metaDesc}
      />
      <BackgroundImage
        className="masthead"
        fadeIn
        fluid={
          wpgraphql.pages.edges[0].node.politikACFgraphql.hero.heroImage
            .imageFile.childImageSharp.fluid
        }
      >
        <div className="black-overlay">
          <div className="contentbox">
            <h1>
              {
                wpgraphql.pages.edges[0].node.politikACFgraphql.hero
                  .heroOverskrift
              }
            </h1>
            <h2>
              {
                wpgraphql.pages.edges[0].node.politikACFgraphql.hero
                  .heroSubheading
              }
            </h2>
          </div>
        </div>
      </BackgroundImage>
      <section className="politik">
        <div className="container">
          {parse(`${wpgraphql.pages.edges[0].node.politikACFgraphql.maintext}`)}
        </div>
      </section>
    </Layout>
  )
}

export default dataPage

export const query = graphql`
  query {
    wpgraphql {
      pages(where: { id: 754 }) {
        edges {
          node {
            seo {
              metaDesc
              title
            }
            politikACFgraphql {
              maintext
              hero {
                heroOverskrift
                heroSubheading
                heroImage {
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(maxWidth: 1920, quality: 100) {
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
