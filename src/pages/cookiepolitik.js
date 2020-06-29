import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import "../components/css/blog.css"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import parse from "html-react-parser"

const cookiePage = props => {
  const { wpgraphql } = props.data

  return (
    <Layout>
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

export default cookiePage

export const query = graphql`
  query {
    wpgraphql {
      pages(where: { id: 738 }) {
        edges {
          node {
            politikACFgraphql {
              maintext
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
