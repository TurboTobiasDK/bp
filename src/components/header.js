import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import phone from "../images/SVG/phone.svg"
import "../components/css/header.css"

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
        <div id="logo">
          <Link to="/" aria-label="BoligPartner logo">
            <Img fixed={data.file.childImageSharp.fixed} />
          </Link>
        </div>

        <label htmlFor="drop" className="toggle">
          Menu
        </label>
        <input type="checkbox" id="drop" />
        <ul className="menu">
          <li>
            <Link to="/">Forside</Link>
          </li>
          <li>
            <label htmlFor="drop-1" className="toggle">
              Ydelser +
            </label>
            <a href="#0">Ydelser</a>
            <input type="checkbox" id="drop-1" />
            <ul className="dropdown-list">
              <li>
                <Link to="/ydelser/koeberpakke/">Køberpakke</Link>
              </li>
              <li>
                <Link to="/ydelser/koeber-gennemgang/">Køber - Gennemgang</Link>
              </li>
              <li>
                <Link to="/ydelser/berigtigelse-af-bolighandel/">
                  Berigtigelse af bolighandel
                </Link>
              </li>
              <li>
                <Link to="/ydelser/tinglysning-af-skoede/">
                  Tinglysning af skøde
                </Link>
              </li>
              <li>
                <Link to="/ydelser/skilsmisseskoede/">Skilsmisseskøde</Link>
              </li>
              <li>
                <Link to="/ydelser/skifteretsattest/">Skifteretsattest</Link>
              </li>
              <li>
                <Link to="/ydelser/auktionsskoede/">Auktionsskøde</Link>
              </li>
              <li>
                <Link to="/ydelser/selvsalg/">Selvsalg</Link>
              </li>
              <li>
                <Link to="/ydelser/andet/">Andet</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/bloggen/">Artikler/Blog</Link>
          </li>
          <li>
            <Link to="/om-boligpartner/">Om BoligPartner</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
          <li>
            <a href="tel:70605038" className="cta">
              <img
                src={phone}
                alt="phone icon"
                style={{ width: 16, height: 16 }}
                className="icon"
              />{" "}
              70 60 50 38
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
