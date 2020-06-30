import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import { Link, graphql } from "gatsby"
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
      <BackgroundImage
        className="masthead"
        fadeIn
        fluid={
          wpgraphql.pages.edges[0].node.subpageACFgraphql.hero.heroImage
            .imageFile.childImageSharp.fluid
        }
      >
        <div className="black-overlay">
          <div className="contentbox">
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
        </div>
      </BackgroundImage>
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
                      fluid {
                        ...GatsbyImageSharpFluid_withWebp
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
