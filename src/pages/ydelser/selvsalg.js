import React, { useState } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Img from "gatsby-image"
import "../../components/css/ydelser.css"
import { useNavigate } from "@reach/router"

const ServicesPage = props => {
  const { wpgraphql } = props.data

  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const encode = data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&")
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: encode({
        name,
        email,
        phone,
        message,
        "form-name": "contact",
      }),
    })

    navigate("/tak-for-din-henvendelse")
  }

  return (
    <Layout>
      <SEO
        title={wpgraphql.ydelser.edges[0].node.seo.title}
        description={wpgraphql.ydelser.edges[0].node.seo.metaDesc}
      />
      <section className="hero">
        <Img
          fadeIn={false}
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
            <p className="ydelser-price-main">
              {
                wpgraphql.ydelser.edges[0].node.ydelserACFgraphql.hero
                  .heroSubheading
              }
            </p>
            {parse(
              `${wpgraphql.ydelser.edges[0].node.ydelserACFgraphql.mainText}`
            )}
          </div>
          <div className="ydelser-boxb">
            <h2>Bestil selvsalg</h2>
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
              onSubmit={onSubmitHandler}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <p>
                <input
                  type="text"
                  name="name"
                  placeholder="Dit navn"
                  value={name}
                  onChange={e => setName(e.currentTarget.value)}
                />
              </p>
              <p>
                <input
                  type="email"
                  name="email"
                  placeholder="Din email"
                  value={email}
                  onChange={e => setEmail(e.currentTarget.value)}
                />
              </p>
              <p>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Dit tlf. nr."
                  value={phone}
                  onChange={e => setPhone(e.currentTarget.value)}
                />
              </p>
              <p>
                <textarea
                  name="message"
                  placeholder="Skriv evt. hvad det handler om"
                  value={message}
                  onChange={e => setMessage(e.currentTarget.value)}
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

export default ServicesPage

export const query = graphql`
  query {
    wpgraphql {
      ydelser(where: { id: 499 }) {
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
                      fluid(maxHeight: 520, quality: 100) {
                        aspectRatio
                        ...GatsbyImageSharpFluid_withWebp_noBase64
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
