import React from "react"
import GatsbyImage from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const FluidImage = ({ image, withFallback = false, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      fallbackImage: file(relativePath: { eq: "fallback.svg" }) {
        publicURL
      }
    }
  `)

  /**
   * Return fallback Image, if no Image is given.
   */
  if (!image) {
    return withFallback ? (
      <img src={data.fallBackImage.publicURL} alt={"Fallback"} {...props} />
    ) : null
  }

  if (image && image.node.imageFile) {
    return (
      <GatsbyImage
        fluid={image.node.imageFile.childImageSharp.fluid}
        alt={image.node.altText}
        {...props}
      />
    )
  }

  return <img src={image.node.sourceUrl} alt={image.altText} {...props} />
}

export default FluidImage
