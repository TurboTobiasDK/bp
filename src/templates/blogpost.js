import React from 'react'
import Layout from '../components/Layout'
import '../templates/singleblog.scss'

export default ({ pageContext }) => (
    <Layout>
        <div id="main">
            <div className="container">
                <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
                <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
            </div>
        </div>
    </Layout>
);
