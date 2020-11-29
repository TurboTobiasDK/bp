import React, { useState } from "react"
import Layout from "../../components/landing/js/layout"
import SEO from "../../components/seo"
import { graphql, Link } from "gatsby"
import parse from "html-react-parser"
import Img from "gatsby-image"
import "../../components/landing/css/landing.css"
import { useNavigate } from "@reach/router"
import { Helmet } from "react-helmet"

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
          <div className="bp-fordele">
            <p className="bp-checkmark">Få hjælp til de vigtige papirer.</p>
            <p className="bp-checkmark">Få rådgivningsskrivelse omkring juridiske forhold.</p>
            <p className="bp-checkmark">Få helt styr på boligkøbet – vi gennemgår købsaftale og dokumenter.</p>
          </div>
          <Link
            to="/ydelser/berigtigelse-af-bolighandel/"
            className="button"
          >
            Få køberrådgivning
                  </Link>
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
