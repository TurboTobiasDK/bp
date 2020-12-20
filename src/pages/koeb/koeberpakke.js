import React, { useState } from "react"
import Layout from "../../components/landing/js/layout"
import SEO from "../../components/seo"
import { graphql, Link } from "gatsby"
import parse from "html-react-parser"
import Img from "gatsby-image"
// import "../../components/landing/css/landing.css"
import { useNavigate } from "@reach/router"
import { Helmet } from "react-helmet"

import handshake from "../../images/SVG/handshake.svg"
import order from "../../images/SVG/order.svg"
import denmark from "../../images/SVG/denmark.svg"

const ServicesPage = props => {
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
      <SEO
        title={wpgraphql.landings.edges[0].node.seo.title}
        description={wpgraphql.landings.edges[0].node.seo.metaDesc}
      />
      <section className="hero">
        <Img
          fluid={
            wpgraphql.landings.edges[0].node.landingACFgraphql.hero.heroImage
              .imageFile.childImageSharp.fluid
          }
          fadeIn={false}
          loading="eager"
          id="hero__image"
          style={{
            position: "initial",
          }}
        />
        <div className="hero__text">
          <h1>
            Følg dig tryg igennem hele din handel.
            <br />
            Din boligrådgiver klarer alt det praktiske.
          </h1>
          <h2>Køberpakke kr. 5.995,- inkl. moms</h2>
          <Link to="/ydelser/berigtigelse-af-bolighandel/" className="button">
            Få køberrådgivning
          </Link>
        </div>
      </section>
      <section className="icon-grid-section">
        <div className="container three-grid">
          <div className="item">
            <img
              src={order}
              className="grid-icon"
              alt="pakke ikon"
              style={{ width: 88, height: 90 }}
            />
            <p className="icon-text">En lille tekst</p>
          </div>
          <div className="item">
            <img
              src={denmark}
              className="grid-icon"
              alt="denmark icon"
              style={{ width: 88, height: 90 }}
            />
            <p className="icon-text">En lille tekst</p>
          </div>
          <div className="item">
            <img
              src={handshake}
              className="grid-icon"
              alt="handshake icon"
              style={{ width: 88, height: 90 }}
            />
            <p className="icon-text">En lille tekst</p>
          </div>
        </div>
      </section>
      <section className="landing-features-section">
        <div className="container">
          <h2 className="features-heading">Buyer Package Include</h2>
          <p className="subhead">
            The buyer package is the full solution, where we participate from A
            - Z and our customers' preferred choices
          </p>
          <div className="features-list">
            <div className="list-one">
              <p class="bp-checkmark">
                Vi gennemgår købsaftalen og alle handlens dokumenter
              </p>
              <p class="bp-checkmark">
                Vi fremsender rådgivningsskrivelse til køber, om de særlige
                forhold ved handlen, man skal være opmærksom på
              </p>
              <p class="bp-checkmark">
                Vi udarbejder godkendelsesskrivelse, med eventuelle forbehold
                for handlen
              </p>
              <p class="bp-checkmark">
                Vi sørger for korrespondancen med handlens parter om godkendelse
                af handlen
              </p>
            </div>
            <div className="list-two">
              <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
            <div className="list-three">
              {" "}
              <p class="bp-checkmark">
                Vi gennemgår købsaftalen og alle handlens dokumenter
              </p>
              <p class="bp-checkmark">
                Vi fremsender rådgivningsskrivelse til køber, om de særlige
                forhold ved handlen, man skal være opmærksom på
              </p>
              <p class="bp-checkmark">
                Vi udarbejder godkendelsesskrivelse, med eventuelle forbehold
                for handlen
              </p>
              <p class="bp-checkmark">
                Vi sørger for korrespondancen med handlens parter om godkendelse
                af handlen
              </p>
            </div>
          </div>
          <div class="btn-wrapper">
            <Link to="/ydelser/berigtigelse-af-bolighandel/" className="button">
              Få køberrådgivning
            </Link>
          </div>
        </div>
      </section>
      <section className="landing-ring-op">
        <div className="container">
          <div className="kontakt-ring-op">
            <h2>Request a Call Back to Start the Process</h2>
            <p>
              Together we review your needs and only when we agree, we will send
              you an order confirmation
            </p>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="hero-form"
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
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
          <div className="testimonial-ring-op">
            <span className="grid-img-container">
              <Img
                fluid={
                  wpgraphql.landings.edges[0].node.landingACFgraphql
                    .trustpilotLandingpage.ikonBillede.imageFile.childImageSharp
                    .fluid
                }
              />
            </span>
            <h2>Stor tryghed ved køb</h2>
            <p>
              Jeg har som førstegangskøber følt mig særdeles tryg igennem hele
              processen vedr. Mit køb. Rådgiver har sørget for at vejlede mig
              undervejs og stillet sig til rådighed for alle spørgsmål. Jeg vil
              give mine bedste anbefalinger!
            </p>
            <p className="trustpilot-navn">Jannie Christensen</p>
          </div>
        </div>
      </section>
      <section className="landing-team">
        <div className="container">
          <h2 className="team-heading">Our Own Personal Advisor</h2>
          <p className="team-subhead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna{" "}
          </p>
          <div className="advisor-grid">
            <div className="advisor-billeder">
              <span>
                <Img
                  fluid={
                    wpgraphql.landings.edges[0].node.landingACFgraphql
                      .gridAdvisorImg.img1.imageFile.childImageSharp.fluid
                  }
                />
              </span>
              <span>
                <Img
                  fluid={
                    wpgraphql.landings.edges[0].node.landingACFgraphql
                      .gridAdvisorImg.img2.imageFile.childImageSharp.fluid
                  }
                />
              </span>
              <span>
                <Img
                  fluid={
                    wpgraphql.landings.edges[0].node.landingACFgraphql
                      .gridAdvisorImg.img3.imageFile.childImageSharp.fluid
                  }
                />
              </span>
              <span>
                <Img
                  fluid={
                    wpgraphql.landings.edges[0].node.landingACFgraphql
                      .gridAdvisorImg.img4.imageFile.childImageSharp.fluid
                  }
                />
              </span>
            </div>
            <div className="advisor-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-testimonial">
        <div className="container">
          <div className="testimonial-box">
            <div className="text-section">
              <span className="grid-img-container">
                <Img
                  fluid={
                    wpgraphql.landings.edges[0].node.landingACFgraphql
                      .trustpilotLandingpage.ikonBillede.imageFile
                      .childImageSharp.fluid
                  }
                />
              </span>
              <h2>Hurtig og effektiv sagsbehandling.</h2>
              <p>
                Louise har været klar i mælet, når der har været spørgsmål og
                har responderet prompte. Kan kun anbefale Louise Birkedal og
                Bolig-Partner i Slagelse.
              </p>
              <p className="navn">Bjaldby, Copenhagen</p>
            </div>
            <div className="img-section">
              <Img
                fluid={
                  wpgraphql.landings.edges[0].node.landingACFgraphql
                    .trustpilotLandingpage.imgTwoColumn.imageFile
                    .childImageSharp.fluid
                }
              />
            </div>
          </div>
        </div>
      </section>
      <section className="landing-faq-section">
        <div className="container">
          <h2 className="faq-heading">Oftest stillede spørgsmål</h2>
          <p className="subhead">
            The buyer package is the full solution, where we participate from A
            - Z and our customers' preferred choices
          </p>
          <div className="row">
            <div className="col">
              <div className="tabs">
                <div className="tab">
                  <input type="checkbox" id="chck1" className="faq-input" />
                  <label className="tab-label" htmlFor="chck1">
                    Skal der tillægges andre omkostninger til Jeres honorar ved
                    boligkøb?
                  </label>
                  <div className="tab-content">
                    Udover vort honorar ved berigtigelsen af et boligkøb skal
                    der tillægges Statens tinglysningsafgift for skødet, som
                    udgør kr. 1.660 i fast afgift plus 0,6 % af købesummen
                    (eller af den seneste offentlige ejendomsvurdering, såfremt
                    denne er højere end købesummen). Ved visse handler Vest for
                    Storebælt skal sælger betale halvdelen af denne afgift.
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck2" className="faq-input" />
                  <label className="tab-label" htmlFor="chck2">
                    Hvad betyder berigtigelse af bolighandel?
                  </label>
                  <div className="tab-content">
                    <p>
                      En berigtigelse dækker over at gennemføre en handel i
                      overensstemmelse med de vilkår, parterne har skrevet under
                      på i købsaftalen.
                    </p>
                    <p>
                      I forbindelse med indgåelse af en købsaftale, vil det
                      typisk blive aftalt, at køber deponerer en udbetaling til
                      sælgers pengeinstitut eller ejendomsmægleren. Udbetalingen
                      udgør som oftest 5 % af købesummen. Samtidig vil købers
                      pengeinstitut stille en bankgaranti for den resterende del
                      af købesummen. Bankgarantien erstattes af en kontant
                      deponering på overtagelsesdagen. På denne måde kan sælger
                      sikre sig at modtage den aftalte betaling. Ved tinglysning
                      af skødet overgår den fulde ejendomsret over ejendommen
                      til køber.
                    </p>
                    <p>
                      Der er frist for udarbejdelse af refusionsopgørelse senest
                      30 dage efter overtagelsesdagen (se under
                      refusionsopgørelse).
                    </p>
                    <p>
                      Købesummen vil blive frigivet fra sælgers bank til sælger,
                      når skødet er tinglyst uden anmærkninger (sælgers gamle
                      lån). Parternes pengeinstitutter er som oftest en lille
                      måneds tid om at koordinere aflysningen/tinglysningen af
                      lån.
                    </p>
                    <p>
                      Når disse trin er udført, er handlen berigtiget, og
                      handlen er således gennemført.
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck3" className="faq-input" />
                  <label className="tab-label" htmlFor="chck3">
                    Hvad koster det, hvis jeg vælger at bruge jeres rådgivning?
                  </label>
                  <div className="tab-content">
                    <p>
                      Til forskel fra traditionelle advokatkontorer, hvor du
                      betaler pr. timebasis, får du hos BoligPartner i stedet en
                      fast, lav pris på den ønskede hjælp. Dette giver dig
                      overblik og tryghed i dit valg.
                    </p>
                    <p>
                      BoligPartners køberpakke koster <b>5.995,- inkl. moms</b>,
                      hvor du får tryghed igennem hele processen. Vi overtager
                      ansvaret, bevarer overblikket og sikre jeres interesser i
                      hele forløbet. Køberpakken indeholder:
                    </p>
                    <p class="bp-checkmark">
                      Vi gennemgår købsaftalen og alle handlens dokumenter
                    </p>
                    <p class="bp-checkmark">
                      Vi fremsender rådgivningsskrivelse til køber, om de
                      særlige forhold ved handlen, man skal være opmærksom på
                    </p>
                    <p class="bp-checkmark">
                      Vi udarbejder godkendelsesskrivelse, med eventuelle
                      forbehold for handlen
                    </p>
                    <p class="bp-checkmark">
                      Vi sørger for korrespondancen med handlens parter om
                      godkendelse af handlen
                    </p>
                    <p class="bp-checkmark">
                      Vi gennemgår købsaftalen og alle handlens dokumenter
                    </p>
                    <p class="bp-checkmark">
                      Vi fremsender rådgivningsskrivelse til køber, om de
                      særlige forhold ved handlen, man skal være opmærksom på
                    </p>
                    <p class="bp-checkmark">
                      Vi udarbejder godkendelsesskrivelse, med eventuelle
                      forbehold for handlen
                    </p>
                    <p class="bp-checkmark">
                      Vi sørger for korrespondancen med handlens parter om
                      godkendelse af handlen
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck4" className="faq-input" />
                  <label className="tab-label" htmlFor="chck4">
                    Skal der tillægges andre omkostninger til jeres honorar ved
                    boligkøb?
                  </label>
                  <div className="tab-content">
                    <p>
                      Udover BoligPartners honorar ved berigtigelsen af et
                      boligkøb skal der tillægges Statens tinglysningsafgift for
                      skødet, som udgør kr. 1.660 i fast afgift plus 0,6 % af
                      købesummen (eller af den seneste offentlige
                      ejendomsvurdering, såfremt denne er højere end
                      købesummen).
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck5" className="faq-input" />
                  <label className="tab-label" htmlFor="chck5">
                    Hvad hvis handlen ikke bliver til noget, skal jeg så stadig
                    betale jeres honorar?
                  </label>
                  <div className="tab-content">
                    <p>
                      Hos BoligPartner arbejder vi med ”Ingen handel, intet
                      salær” som en slags ”forsikringsservice” for jer som
                      købere. "Ingen handel, intet salær" betyder, at i ikke får
                      udgifter til os såfremt jeres igangsatte boligkøb ikke
                      bliver realiseret.
                    </p>
                    <p>
                      Garantien gælder for alle rådgivningsmoduler og honorarer.
                      ”Ingen handel, intet salær” er dermed jeres garanti som
                      købere og gælder uanset hvor meget tid vi har brugt på
                      jeres sag.
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck6" className="faq-input" />
                  <label className="tab-label" htmlFor="chck6">
                    Hvad betyder berigtigelse af bolighandel?
                  </label>
                  <div className="tab-content">
                    <p>
                      En berigtigelse dækker over at gennemføre en handel i
                      overensstemmelse med de vilkår, parterne har skrevet under
                      på i købsaftalen.
                    </p>
                    <p>
                      I forbindelse med indgåelse af en købsaftale, vil det
                      typisk blive aftalt, at køber deponerer en udbetaling til
                      sælgers pengeinstitut eller ejendomsmægleren. Udbetalingen
                      udgør som oftest 5 % af købesummen. Samtidig vil købers
                      pengeinstitut stille en bankgaranti for den resterende del
                      af købesummen. Bankgarantien erstattes af en kontant
                      deponering på overtagelsesdagen. På denne måde kan sælger
                      sikre sig at modtage den aftalte betaling. Ved tinglysning
                      af skødet overgår den fulde ejendomsret over ejendommen
                      til køber.
                    </p>
                    <p>
                      Der er frist for udarbejdelse af refusionsopgørelse senest
                      30 dage efter overtagelsesdagen (se under
                      refusionsopgørelse).
                    </p>
                    <p>
                      Købesummen vil blive frigivet fra sælgers bank til sælger,
                      når skødet er tinglyst uden anmærkninger (sælgers gamle
                      lån). Parternes pengeinstitutter er som oftest en lille
                      måneds tid om at koordinere aflysningen/tinglysningen af
                      lån.
                    </p>
                    <p>
                      Når disse trin er udført, er handlen berigtiget, og
                      handlen er således gennemført.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ServicesPage

export const query = graphql`
  query {
    wpgraphql {
      landings(where: { id: 1137 }) {
        edges {
          node {
            seo {
              metaDesc
              title
            }
            landingACFgraphql {
              hero {
                heroBullets
                heroOverskrift
                heroSubheading
                heroImage {
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(maxHeight: 520, quality: 100) {
                        aspectRatio
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
              }
              trustpilotLandingpage {
                ikonBillede {
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(maxWidth: 500, quality: 100) {
                        aspectRatio
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
                imgTwoColumn {
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(maxHeight: 520, quality: 100) {
                        aspectRatio
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
              }
              gridAdvisorImg {
                img1 {
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(maxHeight: 520, quality: 100) {
                        aspectRatio
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
                img2 {
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(maxHeight: 520, quality: 100) {
                        aspectRatio
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
                img3 {
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(maxHeight: 520, quality: 100) {
                        aspectRatio
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
                img4 {
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(maxHeight: 520, quality: 100) {
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
