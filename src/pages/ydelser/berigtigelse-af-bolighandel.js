import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Img from "gatsby-image"
import "../../components/css/ydelser.css"

const servicesPage = props => {
  const { wpgraphql } = props.data

  return (
    <Layout>
      <SEO
        title={wpgraphql.ydelser.edges[0].node.seo.title}
        description={wpgraphql.ydelser.edges[0].node.seo.metaDesc}
      />
      <section className="hero">
        <div className="hero__image-wrapper">
          <Img
            loading="eager"
            fluid={
              wpgraphql.ydelser.edges[0].node.ydelserACFgraphql.hero.heroImage
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
      </section>
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
            <h2>Bestil berigtigelse af bolighandel</h2>
            <p>
              Udfyld formularen, så ringer vi dig op hurtigst muligt. Sammen
              gennemgår vi dit behov og først når vi er enige, sender vi dig en
              ordrebekræftelse. Indtast din kontaktoplysninger nedenfor:
            </p>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="hero-form"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
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
                      fluid(maxWidth: 1640, quality: 100) {
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
