/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from "../components/footer"
import Header from "./header"
import Bottomnav from "./bottomnav"

import "./layout.css"
import "../components/css/background-image.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <main>
        <div id="wrapper">{children}</div>
      </main>
      <Footer />
      <Bottomnav />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
