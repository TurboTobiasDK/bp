/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header-landing"
import Footer from "./footer-landing"

// import "./landing-layout.css"
// import "../css/landing-background-image.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div id="wrapper">{children}</div>
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
