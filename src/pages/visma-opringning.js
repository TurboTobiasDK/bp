import React, { useState } from "react"
import Layout from "../components/landing/js/layout"
import { useNavigate } from "@reach/router"
import "../components/landing/css/getcall.css"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

const GetCall = props => {

    const { wpgraphql } = props.data

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const encode = data => {
        return Object.keys(data)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join("&")
    }

    const onSubmitHandler = e => {
        e.preventDefault()
        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: encode({
                name,
                email,
                phone,
                message,
                "form-name": "contact",
            }),
        })

        navigate("/tak-for-din-henvendelse")
    }

    return (
        <Layout>
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
            <section className="getCall-landing">
                <div className="container">
                    <div className="landing-ring-op-grid">
                        <div className="getcall-ring-op">
                            <h2>Bliv ringet op af køberrådgiver</h2>
                            <p>
                                Bliv ringet op af køberrådgiver og få en{" "}
                                <span style={{ fontWeight: 700 }}>uforpligtende snak</span> om
                dine muligheder.
              </p>
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                className="landing-request-call-form"
                                data-netlify-honeypot="bot-field"
                                onSubmit={onSubmitHandler}
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <input type="hidden" name="bot-field" />
                                <p>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Dit navn"
                                        value={name}
                                        onChange={e => setName(e.currentTarget.value)}
                                    />
                                </p>
                                <p>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Din email"
                                        value={email}
                                        onChange={e => setEmail(e.currentTarget.value)}
                                    />
                                </p>
                                <p>
                                    <input
                                        type="phone"
                                        name="phone"
                                        placeholder="Dit tlf. nr."
                                        value={phone}
                                        onChange={e => setPhone(e.currentTarget.value)}
                                    />
                                </p>
                                <p>
                                    <textarea
                                        name="message"
                                        placeholder="Skriv evt. hvad det handler om"
                                        value={message}
                                        onChange={e => setMessage(e.currentTarget.value)}
                                        rows="5"
                                    ></textarea>
                                </p>
                                <p>
                                    <button type="submit">Ring mig op</button>
                                </p>
                            </form>
                        </div>
                        <div className="advisor-billeder">
                            <span>
                                <Img
                                    fluid={
                                        wpgraphql.landings.edges[0].node.landingACFgraphql
                                            .gridAdvisorImg.img2.imageFile.childImageSharp.fluid
                                    }
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    )
}

export default GetCall

export const query = graphql`
query {
    wpgraphql {
      landings {
        edges {
          node {
            landingACFgraphql {
              gridAdvisorImg {
                img2 {
                  sourceUrl
                  imageFile {
                    childImageSharp {
                        fluid(maxHeight: 598, quality: 100) {
                            aspectRatio
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
`