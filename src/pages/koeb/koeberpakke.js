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
         <p className="subhead">The buyer package is the full solution, where we participate
from A - Z and our customers' preferred choices</p>
<div className="features-list">
  <div className="list-one">
  <p class="bp-checkmark">Vi gennemgår købsaftalen og alle handlens dokumenter</p>
<p class="bp-checkmark">Vi fremsender rådgivningsskrivelse til køber, om de særlige forhold ved handlen, man skal være opmærksom på</p>
<p class="bp-checkmark">Vi udarbejder godkendelsesskrivelse, med eventuelle forbehold for handlen</p>
<p class="bp-checkmark">Vi sørger for korrespondancen med handlens parter om godkendelse af handlen</p>
</div>
  <div className="list-two"><img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /></div>
  <div className="list-three"> <p class="bp-checkmark">Vi gennemgår købsaftalen og alle handlens dokumenter</p>
<p class="bp-checkmark">Vi fremsender rådgivningsskrivelse til køber, om de særlige forhold ved handlen, man skal være opmærksom på</p>
<p class="bp-checkmark">Vi udarbejder godkendelsesskrivelse, med eventuelle forbehold for handlen</p>
<p class="bp-checkmark">Vi sørger for korrespondancen med handlens parter om godkendelse af handlen</p></div>
</div>
<div class="btn-wrapper">
<Link
            to="/ydelser/berigtigelse-af-bolighandel/"
            className="button"
          >
            Få køberrådgivning
                  </Link>
                  </div>
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
