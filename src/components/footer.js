import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import HDI from "../images/HDI - Gerling forsikring-03.svg"
import Img from "gatsby-image"

import "../components/css/footer.css"

export default () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "Trustpilot ratings 4star-RGB.png" }) {
      childImageSharp {
        fixed(height: 194) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)

  return (
    <footer className="section-footer">
      <div className="container">
        <div>
          <h2>Kontakt</h2>
          <p>
            BoligPartner
          <br />
          Sdr. Stationsvej 26, 2<br />
          4200 Slagelse
          <br />
            <br />
          CVR. nr. 31 38 92 59
          <br />
          </p>
        </div>
        <div>
          <h2>Telefontider</h2>
          <p>Mandag - Fredag: 09:00-17:00</p>
          <br />
          <a href="tel:70605038">T: 70 60 50 38</a>
          <br />
          <a href="mailto:info@bolig-partner.dk">M: info@bolig-partner.dk</a>
        </div>
        <div>
          <h2>Nyttige links</h2>
          <Link to="/forretningsbetingelser/">Forretningsbetingelser</Link>
          <br />
          <Link to="/cookiepolitik/">Cookiepolitik</Link>
          <br />
          <Link to="/datapolitik/">Datapolitik</Link>
        </div>
        <div>
          <h2>Mærkninger</h2>
          <img src={HDI} alt="HDI Gerling professionelt ansvarsforsikret" style={{width: 287, height: 98}} />
        </div>
      </div>
      <a
        href="https://dk.trustpilot.com/review/bolig-partner.dk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="floating-trustpilot"><Img fixed={data.file.childImageSharp.fixed} /></span></a>
    </footer>
  )
}