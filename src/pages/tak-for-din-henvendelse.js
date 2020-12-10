import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/css/blog.css"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import parse from "html-react-parser"
import { Helmet } from "react-helmet"

const LandingPage = props => {
  const { wpgraphql } = props.data

  useEffect(() => {
    typeof window !== "undefined" &&
      window.gtag("event", "conversion", {
        send_to: "AW-664120405/VNxECKqV3sUBENXY1rwC",
      })
  }, [])

  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <SEO
        title={wpgraphql.pages.edges[0].node.seo.title}
        description={wpgraphql.pages.edges[0].node.seo.metaDesc}
      />
      <section className="politik" style={{
        paddingTop: "75px",
      }}>
        <div className="container">
          <h1 style={{ color: '#1a315d' }}>Tak for din henvendelse</h1>
          {parse(`${wpgraphql.pages.edges[0].node.landingACFgraphql.maintext}`)}
          <p>Med venlig hilsen,</p>
          <Link to="/">
            <Img fixed={props.data.file.childImageSharp.fixed} />
          </Link>
          <br /><br />
          <p style={{ textDecoration: 'none' }}>
            <a href="https://dk.trustpilot.com/review/bolig-partner.dk" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', textUnderline: 'none' }}><img src="https://emailsignature.trustpilot.com/signature/da-DK/4/5d932eafe4debe0001cd9e8d/text.png" border={0} height={21} style={{ maxHeight: '21px', border: 'none' }} alt="Trustpilot Human score" /></a>
        &nbsp;&nbsp;
        <a href="https://dk.trustpilot.com/review/bolig-partner.dk" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', textUnderline: 'none' }}><img src="https://emailsignature.trustpilot.com/signature/da-DK/4/5d932eafe4debe0001cd9e8d/stars.png" border={0} height={21} style={{ maxHeight: '21px', border: 'none' }} alt="Trustpilot Stars" /></a>
        &nbsp;&nbsp;
        <a href="https://dk.trustpilot.com/review/bolig-partner.dk" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', textUnderline: 'none' }}><img src="https://emailsignature.trustpilot.com/brand/s/4/logo.png" border={0} height={21} style={{ maxHeight: '21px', border: 'none' }} alt="Trustpilot Logo" /></a>
          </p>

        </div>
      </section>
    </Layout >
  )
}

export default LandingPage

export const query = graphql`
  query {
    file(relativePath: { eq: "boligpartner-logo.jpg" }) {
      childImageSharp {
        fixed(width: 332, height: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    wpgraphql {
      pages(where: { id: 1039 }) {
        edges {
          node {
            seo {
              metaDesc
              title
            }
            landingACFgraphql {
              maintext
            }
          }
        }
      }
    }
  }
`
