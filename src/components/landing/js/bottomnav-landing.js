import React from "react"
import phone from "../../../images/SVG/phone.svg"

import "../css/bottomnav-landing.css"

export default () => {
  return (
    <div className="mobile-bottom-nav-landing">
      <a href="tel:70605038" className="mobile-bottom-nav__link-landing">
        <img
          src={phone}
          className="sticky-footer-icon-landing"
          alt="phone icon"
          scale={0}
          style={{ width: 15, height: 15 }}
        />
        <p>Ring tlf. 70 60 50 38</p>
      </a>
    </div>
  )
}
