import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/css/blog.css"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import parse from "html-react-parser"
import { Helmet } from "react-helmet"

const landingPage = props => {
    const { wpgraphql } = props.data

    return (
        <Layout>
            <Helmet>
                <meta name="robots" content="noindex" />
                <script type="application/ld+json">{`
      gtag('event', 'conversion', {'send_to': 'AW-664120405/VNxECKqV3sUBENXY1rwC'});
    `}</script>
            </Helmet>
            <SEO
                title={wpgraphql.pages.edges[0].node.seo.title}
                description={wpgraphql.pages.edges[0].node.seo.metaDesc}
            />
            <BackgroundImage
                className="masthead"
                fadeIn
                fluid={
                    wpgraphql.pages.edges[0].node.landingACFgraphql.hero.heroImage
                        .imageFile.childImageSharp.fluid
                }
            >
                <div className="black-overlay">
                    <div className="contentbox">
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
                </div>
            </BackgroundImage>
            <section className="politik">
                <div className="container">
                    {parse(`${wpgraphql.pages.edges[0].node.landingACFgraphql.maintext}`)}
                </div>
            </section>
        </Layout>
    )
}

export default landingPage

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
