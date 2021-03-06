import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/css/blog.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import parse from "html-react-parser"

const dataPage = props => {
  const { wpgraphql } = props.data

  return (
    <Layout>
      <SEO
        title={wpgraphql.pages.edges[0].node.seo.title}
        description={wpgraphql.pages.edges[0].node.seo.metaDesc}
      />
      <section className="hero">
        <Img
          fluid={
            wpgraphql.pages.edges[0].node.politikACFgraphql.hero.heroImage
              .imageFile.childImageSharp.fluid
          }
          fadeIn={false}
          loading="eager"
          id="hero__image"
          style={{
            position: "initial",
          }}
        />
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
                      fluid(maxHeight: 520, quality: 100) {
                        aspectRatio
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
