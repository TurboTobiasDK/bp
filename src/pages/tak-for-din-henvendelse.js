import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/css/blog.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import parse from "html-react-parser"
import { Helmet } from "react-helmet"

const LandingPage = props => {
  const { wpgraphql } = props.data

  useEffect(() => {
    typeof window !== "undefined" && window.gtag('event', 'conversion', { 'send_to': 'AW-664120405/VNxECKqV3sUBENXY1rwC' })
  }, [])

  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <SEO
        title={wpgraphql.pages.edges[0].node.seo.title}
        description={wpgraphql.pages.edges[0].node.seo.metaDesc}
      />
      <section className="hero">
        <Img
          fadeIn={false}
          loading="eager"
          fluid={
            wpgraphql.pages.edges[0].node.landingACFgraphql.hero.heroImage
              .imageFile.childImageSharp.fluid
          }
          id="hero__image"
          style={{
            position: "initial",
          }}
        />
        <div className="hero__text">
          <h1>
            {
              wpgraphql.pages.edges[0].node.landingACFgraphql.hero
                .heroOverskrift
            }
          </h1>
          <h2>
            {
              wpgraphql.pages.edges[0].node.landingACFgraphql.hero
                .heroSubheading
            }
          </h2>
        </div>
      </section>
      <section className="politik">
        <div className="container">
          {parse(`${wpgraphql.pages.edges[0].node.landingACFgraphql.maintext}`)}
        </div>
      </section>
    </Layout >
  )
}

export default LandingPage

export const query = graphql`
  query {
    wpgraphql {
      pages(where: { id: 1039 }) {
        edges {
          node {
            seo {
              metaDesc
              title
            }
            landingACFgraphql {
              maintext
              hero {
                heroOverskrift
                heroSubheading
                heroImage {
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(maxWidth: 1640, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
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
