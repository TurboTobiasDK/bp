import React, { useState } from "react"
import Layout from "../../components/landing/js/layout"
import SEO from "../../components/seo"
import { graphql, Link } from "gatsby"
import parse from "html-react-parser"
import Img from "gatsby-image"
// import "../../components/landing/css/landing.css"
import { useNavigate } from "@reach/router"
import { Helmet } from "react-helmet"

import handshake from "../../images/SVG/handshake.svg"
import order from "../../images/SVG/order.svg"
import denmark from "../../images/SVG/denmark.svg"

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
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <SEO
        title={wpgraphql.landings.edges[0].node.seo.title}
        description={wpgraphql.landings.edges[0].node.seo.metaDesc}
      />
      <section className="hero">
        <Img
          fluid={
            wpgraphql.landings.edges[0].node.landingACFgraphql.hero.heroImage
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
            Følg dig tryg igennem hele din handel.<br />
            Din boligrådgiver klarer alt det praktiske.
          </h1>
          <h2>
            Køberpakke kr. 5.995,- inkl. moms
          </h2>
          <Link
            to="/ydelser/berigtigelse-af-bolighandel/"
            className="button"
          >
            Få køberrådgivning
                  </Link>
        </div>
      </section>
      <section className="icon-grid-section">
        <div className="container three-grid">
          <div className="item">
            <img src={order} className="grid-icon" alt="pakke ikon" style={{ width: 88, height: 90 }} />
            <p className="icon-text">
            En lille tekst
            </p>
          </div>
          <div className="item">
            <img src={denmark} className="grid-icon" alt="denmark icon" style={{ width: 88, height: 90 }} />
            <p className="icon-text">
            En lille tekst
            </p>
          </div>
          <div className="item">
            <img src={handshake} className="grid-icon" alt="handshake icon" style={{ width: 88, height: 90 }} />
            <p className="icon-text">
En lille tekst
            </p>
          </div>
        </div>
      </section>
      <section className="landing-features-section">
        <div className="container">
          <h2 className="features-heading">
          Buyer Package Include
          </h2>
         <p>The buyer package is the full solution, where we participate
from A - Z and our customers' preferred choices</p>
        </div>
      </section>
    </Layout>
  )
}

export default ServicesPage

export const query = graphql`
  query {
    wpgraphql {
      landings(where: { id: 1137 }) {
        edges {
          node {
            seo {
              metaDesc
              title
            }
            landingACFgraphql {
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
