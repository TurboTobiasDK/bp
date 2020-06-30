import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BackgroundImage from "gatsby-background-image"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Img from "gatsby-image"
import "../../components/css/ydelser.css"

const servicesPage = props => {
  const { wpgraphql } = props.data
  console.log(props.data)

  return (
    <Layout>
      <SEO
        title={wpgraphql.ydelser.edges[0].node.seo.title}
        description={wpgraphql.ydelser.edges[0].node.seo.metaDesc}
      />
      <BackgroundImage
        className="masthead"
        fadeIn
        fluid={
          wpgraphql.ydelser.edges[0].node.ydelserACFgraphql.hero.heroImage
            .imageFile.childImageSharp.fluid
        }
      >
        <div className="black-overlay">
          <div className="contentbox">
            <h1>
              {
                wpgraphql.ydelser.edges[0].node.ydelserACFgraphql.hero
                  .heroOverskrift
              }
            </h1>
            <h2>
              {
                wpgraphql.ydelser.edges[0].node.ydelserACFgraphql.hero
                  .heroSubheading
              }
            </h2>
            <span>
              {parse(
                `${wpgraphql.ydelser.edges[0].node.ydelserACFgraphql.hero.heroBullets}`
              )}
            </span>
          </div>
        </div>
      </BackgroundImage>
      <div className="container">
        <div className="wrapper">
          <div className="ydelser-boxa">
            <h2>
              {
                wpgraphql.ydelser.edges[0].node.ydelserACFgraphql.hero
                  .heroOverskrift
              }
            </h2>
            <div className="ydelser-maintext-price">
              <p className="ydelser-price-maintext">
                {
                  wpgraphql.ydelser.edges[0].node.ydelserACFgraphql.hero
                    .heroSubheading
                }
              </p>
              <p className="tillaegges">
                {wpgraphql.ydelser.edges[0].node.ydelserACFgraphql.tillaegges}
              </p>
            </div>
            {parse(
              `${wpgraphql.ydelser.edges[0].node.ydelserACFgraphql.mainText}`
            )}
          </div>
          <div className="ydelser-boxb">
            <h2>Kontakt mig her!</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="hero-form"
            >
              <p>
                <input type="text" name="name" placeholder="Dit navn" />
              </p>
              <p>
                <input type="email" name="email" placeholder="Din email" />
              </p>
              <p>
                <input type="phone" name="phone" placeholder="Dit tlf. nr." />
              </p>
              <p>
                <textarea
                  name="message"
                  placeholder="Skriv evt. hvad det handler om"
                  rows="5"
                ></textarea>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
            <a
              href="https://dk.trustpilot.com/review/bolig-partner.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="trustpilot-sidebar"
            >
              <div className="item">
                <p className="trustpilot-ydelser-header">
                  {
                    wpgraphql.ydelser.edges[0].node.ydelserACFgraphql
                      .trustpilotYdelser.header
                  }
                </p>
                <span className="grid-img-container">
                  <Img
                    fluid={
                      wpgraphql.ydelser.edges[0].node.ydelserACFgraphql
                        .trustpilotYdelser.ikonBillede.imageFile.childImageSharp
                        .fluid
                    }
                  />
                </span>
                <p className="trustpilot-review">
                  {
                    wpgraphql.ydelser.edges[0].node.ydelserACFgraphql
                      .trustpilotYdelser.review
                  }
                </p>
                <p className="trustpilot-name">
                  {
                    wpgraphql.ydelser.edges[0].node.ydelserACFgraphql
                      .trustpilotYdelser.person
                  }
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default servicesPage

export const query = graphql`
  query {
    wpgraphql {
      ydelser(where: { id: 477 }) {
        edges {
          node {
            seo {
              metaDesc
              title
            }
            ydelserACFgraphql {
              hero {
                heroBullets
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
              mainText
              tillaegges
              trustpilotYdelser {
                header
                review
                person
                ikonBillede {
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(maxWidth: 500, quality: 100) {
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
