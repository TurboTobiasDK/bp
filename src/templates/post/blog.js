import React from "react"
import Layout from "../../components/Layout"
import PostEntry from "../../components/PostEntry"
import Pagination from "../../components/Pagination"
import SEO from "../../components/SEO"

const Blog = ({ pageContext }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext

  return (
    <Layout>
      <SEO title="Blog" description="Blog posts" keywords={[`blog`]} />
      <div className="container">
        <h1>Dette er en blog :D</h1>

        {nodes && nodes.map(post => <PostEntry key={post.postId} post={post} />)}

        <Pagination
          pageNumber={pageNumber}
          hasNextPage={hasNextPage}
          allPosts={allPosts}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </Layout>
  )
}

export default Blog
