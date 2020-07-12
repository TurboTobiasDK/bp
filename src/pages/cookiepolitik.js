import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/css/blog.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import parse from "html-react-parser"

const cookiePage = props => {
  const { wpgraphql } = props.data

  return (
    <Layout>
      <SEO
        title={wpgraphql.pages.edges[0].node.seo.title}
        description={wpgraphql.pages.edges[0].node.seo.metaDesc}
      />
      <section className="hero">
        <div className="hero__image-wrapper">
          <Img
            loading="eager"
            fluid={
              wpgraphql.pages.edges[0].node.politikACFgraphql.hero.heroImage
                .imageFile.childImageSharp.fluid
            }
            id="hero__image"
            style={{
              position: "initial",
            }}
          />
        </div>
        <div className="hero__text">
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
      </section>
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
