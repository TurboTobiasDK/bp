import { Link } from "gatsby"
import React from "react"
import phone from "../images/SVG/phone.svg"
import home from "../images/SVG/home.svg"
import email from "../images/SVG/email.svg"

import "../components/css/bottomnav.css"

export default () => {

    return (
        <div className="mobile-bottom-nav">
            <div className="mobile-bottom-nav__item">
                <Link to="/" className="mobile-bottom-nav__item-content">
                    <img src={home} className="sticky-footer-icon" alt="house icon" scale={0} />
        Forside
      </Link>
            </div>
            <a href="mailto:info@bolig-partner.dk" className="mobile-bottom-nav__item">
                <div className="mobile-bottom-nav__item-content">
                    <img src={email} className="sticky-footer-icon" alt="email icon" scale={0} />
        Mail
      </div>
            </a>
            <a href="tel:70605038" className="mobile-bottom-nav__item">
                <div className="mobile-bottom-nav__item-content">
                    <img src={phone} className="sticky-footer-icon" alt="phone icon" scale={0} />
        Ring
      </div>
            </a>
        </div>
    )
}