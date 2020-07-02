import React from "react"
import parse from "html-react-parser"
import Layout from "../../components/layout"
import SEO from "../../components/SEO"
import FluidImage from "../../components/FluidImage"
import { graphql } from "gatsby"

const Post = ({ pageContext }) => {
  const {
    post: { title, content, featuredImage },
  } = pageContext
  console.log(pageContext)
  return (
    <Layout>
      <SEO title={parse(`${title}`)} />
      <div className="container">
        <FluidImage image={featuredImage} style={{ marginBottom: "15px" }} />
        <h1> {parse(`${title}`)} </h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  )
}

export default Post