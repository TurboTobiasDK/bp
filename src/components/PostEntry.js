import React from "react"
import { Link } from "gatsby"
import { blogURI } from "../../globals"
import FluidImage from "./FluidImage"
import parse from "html-react-parser"
import "../components/css/postentry.css"

const PostEntry = ({ post }) => {
  const { uri, title, featuredImage, excerpt } = post

  return (
    <div className="card">
      <Link to={`/${uri}/`}>
        <div class="card-header">
          <FluidImage image={featuredImage} style={{ margin: 0 }} />
        </div>
        <div class="card-body">
          <h2 style={{ marginBottom: "5px" }}>{parse(`${title}`)}</h2>
          {parse(`${excerpt}`)}
        </div>
        <p className="read-more">LÆS ARTIKEL</p>
      </Link>
    </div>
  )
}

export default PostEntry
