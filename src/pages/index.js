import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Img from "gatsby-image"
import "../components/css/forside.css"

import handshake from "../images/SVG/handshake.svg"
import order from "../images/SVG/order.svg"
import destination from "../images/SVG/destination.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
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
              wpgraphql.pages.edges[0].node.undersideACFgraphql.hero.heroImage
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
              wpgraphql.pages.edges[0].node.undersideACFgraphql.hero
                .heroOverskrift
            }
          </h1>
          <h2>
            {
              wpgraphql.pages.edges[0].node.undersideACFgraphql.hero
                .heroSubheading
            }
          </h2>
          <span>
            {parse(
              `${wpgraphql.pages.edges[0].node.undersideACFgraphql.hero.heroBullets}`
            )}
          </span>
        </div>
      </section>
      <div className="container">
        <div className="wrapper">
          <div className="boxa">
            {parse(
              `${wpgraphql.pages.edges[0].node.undersideACFgraphql.mainText}`
            )}
          </div>
          <div className="boxb">
            <h2>Kontakt os her!</h2>
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
          </div>
        </div>
      </div>
      <section className="icon-grid-section">
        <div className="container three-grid">
          <div className="item">
            <img src={order} className="grid-icon" alt="" />
            <p className="icon-text">
              {
                wpgraphql.pages.edges[0].node.undersideACFgraphql
                  .overskriftIkonVenstre
              }
            </p>
          </div>
          <div className="item">
            <img src={destination} className="grid-icon" alt="" />
            <p className="icon-text">
              {
                wpgraphql.pages.edges[0].node.undersideACFgraphql
                  .overskriftIkonMidt
              }
            </p>
          </div>
          <div className="item">
            <img src={handshake} className="grid-icon" alt="" />
            <p className="icon-text">
              {
                wpgraphql.pages.edges[0].node.undersideACFgraphql
                  .overskriftIkonHojre
              }
            </p>
          </div>
        </div>
      </section>
      <section className="trustpilot-section">
        <div className="container">
          <h2 className="fremragende">
            {
              wpgraphql.pages.edges[0].node.undersideACFgraphql
                .trustpilotSektionOverskrift
            }
          </h2>
          <div className="img-container">
            <Img
              fluid={
                wpgraphql.pages.edges[0].node.undersideACFgraphql.trustpilotIkon
                  .imageFile.childImageSharp.fluid
              }
            />
          </div>
          <div className="trustpilot-grid">
            <a
              href="https://dk.trustpilot.com/review/bolig-partner.dk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="item">
                <p className="trustpilot-header">
                  {
                    wpgraphql.pages.edges[0].node.undersideACFgraphql
                      .testimonial1.testimonial1Overskrift
                  }
                </p>
                <span className="grid-img-container">
                  <Img
                    fluid={
                      wpgraphql.pages.edges[0].node.undersideACFgraphql
                        .trustpilotIkon.imageFile.childImageSharp.fluid
                    }
                  />
                </span>
                <p className="trustpilot-review">
                  {
                    wpgraphql.pages.edges[0].node.undersideACFgraphql
                      .testimonial1.testimonial1Review
                  }
                </p>
                <p className="trustpilot-name">
                  {
                    wpgraphql.pages.edges[0].node.undersideACFgraphql
                      .testimonial1.testimonial1Navn
                  }
                </p>
              </div>
            </a>
            <a
              href="https://dk.trustpilot.com/review/bolig-partner.dk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="item">
                <p className="trustpilot-header">
                  {
                    wpgraphql.pages.edges[0].node.undersideACFgraphql
                      .testimonial2.testimonial2Overskrift
                  }
                </p>
                <span className="grid-img-container">
                  <Img
                    fluid={
                      wpgraphql.pages.edges[0].node.undersideACFgraphql
                        .trustpilotIkon.imageFile.childImageSharp.fluid
                    }
                  />
                </span>
                <p className="trustpilot-review">
                  {
                    wpgraphql.pages.edges[0].node.undersideACFgraphql
                      .testimonial2.testimonial2Review
                  }
                </p>
                <p className="trustpilot-name">
                  {
                    wpgraphql.pages.edges[0].node.undersideACFgraphql
                      .testimonial2.testimonial2Navn
                  }
                </p>
              </div>
            </a>
            <a
              href="https://dk.trustpilot.com/review/bolig-partner.dk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="item">
                <p className="trustpilot-header">
                  {
                    wpgraphql.pages.edges[0].node.undersideACFgraphql
                      .testimonial3.testimonial3Overskrift
                  }
                </p>
                <span className="grid-img-container">
                  <Img
                    fluid={
                      wpgraphql.pages.edges[0].node.undersideACFgraphql
                        .trustpilotIkon.imageFile.childImageSharp.fluid
                    }
                  />
                </span>
                <p className="trustpilot-review">
                  {
                    wpgraphql.pages.edges[0].node.undersideACFgraphql
                      .testimonial3.testimonial3Review
                  }
                </p>
                <p className="trustpilot-name">
                  {
                    wpgraphql.pages.edges[0].node.undersideACFgraphql
                      .testimonial3.testimonial3Navn
                  }
                </p>
              </div>
            </a>
          </div>
          <a
            href="https://dk.trustpilot.com/review/bolig-partner.dk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="trustpilot-img-container">
              <Img
                fixed={
                  wpgraphql.pages.edges[0].node.undersideACFgraphql
                    .trustpilotBundBillede.imageFile.childImageSharp.fixed
                }
              />
            </span>
          </a>
        </div>
      </section>
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            <div className="col">
              {parse(
                `${wpgraphql.pages.edges[0].node.undersideACFgraphql.pristabel1}`
              )}
              <div className="bestil">
                <p className="disclaimer">
                  * Tinglysningsafgift til staten tillægges
                </p>
                <p className="emph">
                  <Link to="/ydelser/koeberpakke/" className="button">
                    Bestil her
                  </Link>
                </p>
              </div>
            </div>
            <div className="col">
              {parse(
                `${wpgraphql.pages.edges[0].node.undersideACFgraphql.pristabel2}`
              )}
              <div className="bestil">
                <p className="emph">
                  <Link to="/ydelser/koeber-gennemgang/" className="button">
                    Bestil her
                  </Link>
                </p>
              </div>
            </div>
            <div className="col">
              {parse(
                `${wpgraphql.pages.edges[0].node.undersideACFgraphql.pristabel3}`
              )}
              <div className="bestil">
                <p className="disclaimer">
                  * Tinglysningsafgift til staten tillægges
                </p>
                <p className="emph">
                  <Link
                    to="/ydelser/berigtigelse-af-bolighandel/"
                    className="button"
                  >
                    Bestil her
                  </Link>
                </p>
              </div>
            </div>
            <div className="col">
              {parse(
                `${wpgraphql.pages.edges[0].node.undersideACFgraphql.pristabel4}`
              )}
              <div className="bestil">
                <p className="disclaimer">
                  * Tinglysningsafgift på til staten tillægges
                </p>
                <p className="emph">
                  <Link to="/ydelser/skilsmisseskoede/" className="button">
                    Bestil her
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    wpgraphql {
      pages(where: { id: 91 }) {
        edges {
          node {
            seo {
              metaDesc
              title
            }
            undersideACFgraphql {
              mainText
              overskriftIkonMidt
              overskriftIkonHojre
              overskriftIkonVenstre
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
                      fluid(maxWidth: 1920, quality: 100) {
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
`
