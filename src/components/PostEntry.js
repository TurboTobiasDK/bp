import React from "react"
import { Link } from "gatsby"
import { blogURI } from "../../globals"
import FluidImage from "./FluidImage"
import "../components/css/postentry.css"

const PostEntry = ({ post }) => {
  const { uri, title, featuredImage, excerpt } = post

  return (
    <div className="container">
      <header>
        <Link to={`/${uri}/`}>
          <h2 style={{ marginBottom: "5px" }}>{title}</h2>
          <FluidImage image={featuredImage} style={{ margin: 0 }} />
        </Link>
      </header>

      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  )
}

export default PostEntry
