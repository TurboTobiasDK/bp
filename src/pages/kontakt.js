import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import "../components/css/kontakt.css"

const kontaktPage = props => {
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
            wpgraphql.pages.edges[0].node.subpageACFgraphql.hero.heroImage
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
              wpgraphql.pages.edges[0].node.subpageACFgraphql.hero
                .heroOverskrift
            }
          </h1>
          <h2>
            {parse(
              `${wpgraphql.pages.edges[0].node.subpageACFgraphql.hero.heroSubheading}`
            )}
          </h2>
        </div>
      </section>
      <div className="container">
        <div className="wrapper">
          <div className="kontakt-boxa">
            <h2>
              {
                wpgraphql.pages.edges[0].node.subpageACFgraphql.hero
                  .heroOverskrift
              }
            </h2>
            <div className="kontakt-maintext-price">
              <span className="ydelser-price-maintext">
                {parse(
                  `${wpgraphql.pages.edges[0].node.subpageACFgraphql.hero.heroSubheading}`
                )}
              </span>
            </div>
            {parse(
              `${wpgraphql.pages.edges[0].node.subpageACFgraphql.mainText}`
            )}
          </div>
          <div className="kontakt-boxb">
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
    </Layout>
  )
}

export default kontaktPage

export const query = graphql`
  query {
    wpgraphql {
      pages(where: { id: 166 }) {
        edges {
          node {
            seo {
              metaDesc
              title
            }
            subpageACFgraphql {
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
              mainText
            }
          }
        }
      }
    }
  }
`
