import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/SEO"
import FluidImage from "../../components/FluidImage"

const Post = ({ pageContext }) => {
  const {
    post: { title, content, featuredImage },
  } = pageContext

  return (
    <Layout>
      <div className="container">
        <SEO title={title} />

        <FluidImage image={featuredImage} style={{ marginBottom: "15px" }} />

        <h1> {title} </h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  )
}

export default Post
