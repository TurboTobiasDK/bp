import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import '../templates/blogstyles.scss'

export default ({ pageContext }) => (
    <Layout>
        <div id="main">
            <div className="container">
                <h1>Blog</h1>
                {pageContext.posts.map(post => (
                    <div key={post.node.wordpress_id} className="blogsection">
                        <article >
                            <Link to={`${post.node.slug}`}>
                                <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                                <small>
                                    {post.node.date}
                                </small>
                                <div className="blogexcerpt" dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                            </Link>
                        </article>
                    </div>
                ))}
                <div className="Pagination">
                    {Array.from({ length: pageContext.numberOfPages }).map((page, index) => (
                        <div className="PageNumberWrapper" key={index}>
                            <Link className="PageNumber" to={index === 0 ? '/blog' : `/blog/${index + 1}`}>
                                {index + 1}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Layout >
)