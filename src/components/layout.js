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
import { Helmet } from "react-helmet"

import "./layout.css"
import "../components/css/background-image.css"

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-664120405" />
        <script type="application/ld+json">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'AW-664120405');
    `}</script>
      </Helmet>
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
