import React from "react"
import whitelogo from "../../../images/SVG/boligpartner-logo-white.svg"

import "../css/footer-landing.css"

export default () => {
  return (
    <footer className="landing-footer">
      <div className="container">
        <div className="footer-logo-img">
          <img
            src={whitelogo}
            className="bp-white-logo"
            alt="BoligPartner white logo"
            style={{
              width: "250px",
              height: "50px",
            }}
          />
        </div>
        <div className="footer-support-info">
          <p>Tlf. 11 22 33 44 </p>
          <p>E-mail info@bolig-partner.dk</p>
          <p>CVR 31 38 92 59</p>
        </div>
      </div>
    </footer>
  )
}
