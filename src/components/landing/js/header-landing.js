import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import phone from "../../../images/SVG/phone.svg"
import "../css/header-landing.css"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "boligpartner-logo.jpg" }) {
        childImageSharp {
          fixed(width: 255, height: 60) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <nav>
      <div className="container">
        <div id="landing-logo">
          <Img fixed={data.file.childImageSharp.fixed} />
        </div>
        <ul className="landing-menu">
          <li className="landing-get-call"><Link to="/bliv-ringet-op/">Bliv ringet op</Link></li>
          <li>
            <a href="tel:70605038" className="landing-cta">
              <img
                src={phone}
                alt="phone icon"
                style={{ width: 16, height: 16 }}
                className="landing-icon"
              />70 60 50 38
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
