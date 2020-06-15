import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const KontaktPage = () => (
    <Layout>
        <SEO title="Page two" />
        <h1>Hi from the kontakt</h1>
        <p>Welcome the kontakt</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default KontaktPage
