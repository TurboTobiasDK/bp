import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TemplatePage = (props) => {
    const { wpgraphql } = props.data
    console.log(props.data)

    return (
        <Layout>
            <SEO title="Page two" />
            <BackgroundImage
                className="masthead"
                fadeIn
                fluid={wpgraphql.pages.edges[0].node.undersideACFgraphql.hero.heroImage.imageFile.childImageSharp.fluid}
            >
                <div className="black-overlay">
                    <div className="contentbox">
                        <h1>Hej</h1>
                        <h2>Hej</h2>
                        <span>Hej</span>
                    </div>
                </div>
            </BackgroundImage>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export default TemplatePage

export const query = graphql`
  query {
    wpgraphql {
      pages(where: {id: 91}) {
        edges {
          node {
            undersideACFgraphql {
              mainText
              overskriftIkonMidt
              overskriftIkonHojre
              overskriftIkonVenstre
              ikonMidt {
                sourceUrl
              }
              ikonHojre {
                sourceUrl
              }
              iconVenstre {
                sourceUrl
              }
              trustpilotSektionOverskrift
              trustpilotIkon {
                sourceUrl
                imageFile {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              testimonial1 {
                testimonial1Navn
                testimonial1Overskrift
                testimonial1Review
              }
              testimonial2 {
                testimonial2Navn
                testimonial2Overskrift
                testimonial2Review
              }
              testimonial3 {
                testimonial3Navn
                testimonial3Overskrift
                testimonial3Review
              }
              pristabel1
              pristabel2
              pristabel3
              pristabel4
              trustpilotBundBillede {
                sourceUrl
                imageFile {
                  childImageSharp {
                    fixed(width: 189) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
                  }
                }
              }
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
                heroBullets
              }
            }
          }
        }
      }
    }
  }
`;
