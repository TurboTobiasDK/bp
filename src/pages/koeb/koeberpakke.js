import React, { useState } from "react"
import Layout from "../../components/landing/js/layout"
import SEO from "../../components/seo"
import { graphql, Link } from "gatsby"
import parse from "html-react-parser"
import Img from "gatsby-image"
import "../../components/landing/css/landing.css"
import { useNavigate } from "@reach/router"
import { Helmet } from "react-helmet"

import handshake from "../../images/SVG/handshake.svg"
import order from "../../images/SVG/order.svg"
import denmark from "../../images/SVG/denmark.svg"
import user from "../../images/SVG/user.svg"

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
      <section className="landing-hero-section">
        <div className="container">
          <div className="landing-hero-grid">
            <div className="landing-hero-text">
              <h1>Få tryg bolighandel til garanteret lav pris</h1>
              <h2>Pris kr. 5.995,- inkl. moms</h2>
              <p>
                Vi ved, at et køb af en bolig er en stor beslutning, og at det
                helt naturligt giver mange spørgsmål til processen.
                <br />
                <br />
                <h3>Book uforpligtende rådgivningsmøde med køberrådgiver</h3>
                Book gratis telefon rådgivningsmøde med en af vores erfarne
                rådgivere ved at indtaste dit telefonnummer herunder. Det er
                selvfølgelig helt uforpligtende. Det koster kun din tid at blive
                klogere på tryg bolighandel. <br />
                <br />
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="landing-hero-form"
                  data-netlify-honeypot="bot-field"
                  onSubmit={onSubmitHandler}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <button type="submit" style={{ float: "right" }}>
                    Book uforpligtende møde
                  </button>
                  <div
                    className="landing-form-phone"
                    style={{ overflow: "hidden" }}
                  >
                    <input
                      type="phone"
                      name="phone"
                      placeholder="Dit tlf. nr."
                      value={phone}
                      onChange={e => setPhone(e.currentTarget.value)}
                      style={{ width: "100%" }}
                    />
                  </div>
                </form>
              </p>
            </div>
            <div className="landing-hero-billede">
              <span>
                <Img
                  fluid={
                    wpgraphql.landings.edges[0].node.landingACFgraphql.hero
                      .heroImage.imageFile.childImageSharp.fluid
                  }
                  fadeIn={false}
                  loading="eager"
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-icons-section">
        <div className="container">
          <h2 className="landing-icons-heading">
            Vores kunders foretrukne valg
          </h2>
          <p className="landing-icons-subhead">
            Din rådgiver sikrer, at du ved, præcis hvad du skriver under på. Du
            undgår ubehagelige overraskelser som fx uenighed om indflytningsdag
            eller fejl ved boligen, som du ikke kendte til. Det sikrer dig en
            tryg bolighandel - uden søvnløse nætter og kedelige opringninger fra
            banken.
          </p>

          <div className="landing-three-grid">
            <div className="landing-item">
              <img
                src={order}
                className="landing-grid-icon"
                alt="pakke ikon"
                style={{
                  width: "42px",
                  height: "42px",
                  position: "absolute",
                  top: "40px",
                  right: "40px",
                }}
              />
              <p className="landing-icon-text">Ingen handel - Intet salær</p>
              <p className="small-txt">
                Hvis handlen ikke gennemføres, er rådgivningen gratis
              </p>
            </div>
            <div className="landing-item">
              <img
                src={denmark}
                className="landing-grid-icon"
                alt="denmark icon"
                style={{
                  width: "42px",
                  height: "42px",
                  position: "absolute",
                  top: "40px",
                  right: "40px",
                }}
              />
              <p className="landing-icon-text">Landsdækkende service</p>
              <p className="small-txt">
                Uanset hvor i landet du ønsker at købe, yder vi rådgivning
              </p>
            </div>
            <div className="landing-item">
              <img
                src={handshake}
                className="landing-grid-icon"
                alt="handshake icon"
                style={{
                  width: "42px",
                  height: "42px",
                  position: "absolute",
                  top: "40px",
                  right: "40px",
                }}
              />
              <p className="landing-icon-text">En tryg bolighandel</p>
              <p className="small-txt">
                Du får en personlig boligrådgiver, som er med dig fra start til
                slut
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-features-section">
        <div className="container">
          <div className="landing-features-box">
            <h2>Sådan er processen</h2>
            <ol>
              <li class="landing-process-one">Udfyld kontaktformular</li>
              <li class="landing-process-two">
                Bliv ringet op af en af vores erfarne køberrådgivere
              </li>
              <li class="landing-process-three">
                Sammen gennemgår vi dit behov og først når vi er enige, sender
                vi dig en ordrebekræftelse.
              </li>
              <li class="landing-process-four">
                Du får tilknyttet personlig køberrådgiver som kender din sag og
                er med fra start til slut.
              </li>
              <li class="landing-process-five">
                BoligPartner står for det juridiske – så kan du og din familie
                trygt flytte ind i jeres nye bolig.
              </li>
            </ol>
            <div className="landing-features-checklist">
              <h2>BoligPartner sørger for </h2>
              <p className="landing-features-checkmark">
                <span style={{ color: "#319e60", paddingRight: "5px" }}>✓</span>
                Vi gennemgår købsaftalen og alle handlens dokumenter
              </p>
              <p className="landing-features-checkmark">
                <span style={{ color: "#319e60", paddingRight: "5px" }}>✓</span>
                Vi fremsender rådgivningsskrivelse, om de særlige forhold ved
                handlen, du skal være opmærksom på
              </p>
              <p className="landing-features-checkmark">
                <span style={{ color: "#319e60", paddingRight: "5px" }}>✓</span>
                Vi udarbejder godkendelsesskrivelse, med eventuelle forbehold
                for handlen
              </p>
              <p className="landing-features-checkmark">
                <span style={{ color: "#319e60", paddingRight: "5px" }}>✓</span>
                Vi sørger for korrespondancen med handlens parter om godkendelse
                af handlen
              </p>
              <p className="landing-features-checkmark">
                <span style={{ color: "#319e60", paddingRight: "5px" }}>✓</span>
                Vi godkender handlen i sin helhed
              </p>
              <p className="landing-features-checkmark">
                <span style={{ color: "#319e60", paddingRight: "5px" }}>✓</span>
                Vi sørger for udarbejdelse eller kontrol af skøde
              </p>
              <p className="landing-features-checkmark">
                <span style={{ color: "#319e60", paddingRight: "5px" }}>✓</span>
                Vi sørger for udarbejdelse eller kontrol af refusionsopgørelse
              </p>
              <p className="landing-features-checkmark">
                <span style={{ color: "#319e60", paddingRight: "5px" }}>✓</span>
                Vi sikre handlens afslutning i sin helhed
              </p>
            </div>
            <h2>Skal vi hjælpe dig med en tryg bolighandel?</h2>
            <p>
              Book gratis telefon rådgivningsmøde hos os ved at udfylde
              formularen herunder eller ring tlf.{" "}
              <a href="tel:70605038">70 60 50 38</a>. Det er selvfølgelig helt
              uforpligtende. Det koster kun din tid at blive klogere på tryg
              bolighandel.
            </p>
          </div>
        </div>
      </section>

      <section className="landing-ring-op">
        <div className="container">
          <div className="landing-ring-op-grid">
            <div className="kontakt-ring-op">
              <h2>Få uforpligtende rådgivning om hvilke muligheder du har.</h2>
              <p>Bliv ringet op af en jurist med speciale i boligkøb.</p>
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
                  <button type="submit">Bliv ringet op</button>
                </p>
              </form>
            </div>
            <div className="testimonial-ring-op">
              <span className="grid-img-container">
                <Img
                  fluid={
                    wpgraphql.landings.edges[0].node.landingACFgraphql
                      .trustpilotLandingpage.ikonBillede.imageFile
                      .childImageSharp.fluid
                  }
                />
              </span>
              <h2>Stor tryghed ved køb</h2>
              <p>
                Jeg har som førstegangskøber følt mig særdeles tryg igennem hele
                processen vedr. Mit køb. Rådgiver har sørget for at vejlede mig
                undervejs og stillet sig til rådighed for alle spørgsmål. Jeg
                vil give mine bedste anbefalinger!
              </p>
              <p className="trustpilot-navn">Jannie Christensen</p>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-team">
        <div className="container">
          <div className="advisor-grid">
            <div className="advisor-text">
              <h2>Køberrådgivning med fokus på personlig rådgivning</h2>
              <p>
                Vi ved, at et køb af en bolig er en stor beslutning, og at det
                helt naturligt giver mange spørgsmål til processen.
                <br />
                <br />
                Hos BoligPartner får du tilknyttet en personlig boligrådgiver
                som kender din sag. Din rådgiver har svarene og sørger samtidig
                for alt det formelle, så du i stedet kan glæde dig til at starte
                et nyt kapitel i din nye bolig. <br />
                <br />
                Det sikrer en tryg og nem proces, hvor du altid kan få svar på
                dine spørgsmål om juraen. Det er din garanti for, at dine
                køberrettigheder respekteres, og alt foregår efter loven. Lad os
                stå for papirarbejdet – så kan du og din familie glæde jer til
                at flytte ind i den nye bolig.
              </p>
            </div>
            <div className="advisor-billeder">
              <span>
                <Img
                  fluid={
                    wpgraphql.landings.edges[0].node.landingACFgraphql
                      .gridAdvisorImg.img1.imageFile.childImageSharp.fluid
                  }
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-testimonial">
        <div className="container">
          <h2 className="landing-testimonial-heading">
            Det siger vores kunder
          </h2>
          <p className="landing-testimonial-subhead">
            Det er vigtigt for os, at vi yder personlig og nærværende
            rådgivning, som er tilpasset vores kunders behov. Læs her, hvad
            vores kunder siger.
          </p>

          <div className="landing-testimonial-box">
            <div className="landing-testimonial-review-box">
              <img
                src={user}
                className="landing-grid-icon"
                alt="user ikon"
                style={{
                  width: "42px",
                  height: "42px",
                  position: "absolute",
                  top: "40px",
                  right: "40px",
                }}
              />
              <p className="landing-testimonial-head">
                Har kun godt at sige omkring dem
              </p>
              <span className="trustpilot-testimonial-img-container">
                <Img
                  fluid={
                    wpgraphql.landings.edges[0].node.landingACFgraphql
                      .trustpilotLandingpage.ikonBillede.imageFile
                      .childImageSharp.fluid
                  }
                />
              </span>
              <p className="landing-testimonial-review-txt">
                "Har kun godt at sige omkring dem. Hurtig respons på min
                henvendelse. Seriøse og brugbare svar retur. Seriøs vejledning
                og særdeles konkurrence dygtige priser. Sender dem mine bedste
                anbefalinger!"
                <p className="testimonial-reviewer-name">Claus Ramussen</p>
              </p>
            </div>
            <div className="landing-testimonial-review-box">
              <img
                src={user}
                className="landing-grid-icon"
                alt="user ikon"
                style={{
                  width: "42px",
                  height: "42px",
                  position: "absolute",
                  top: "40px",
                  right: "40px",
                }}
              />
              <p className="landing-testimonial-head">
                Har kun godt at sige omkring dem
              </p>
              <span className="trustpilot-testimonial-img-container">
                <Img
                  fluid={
                    wpgraphql.landings.edges[0].node.landingACFgraphql
                      .trustpilotLandingpage.ikonBillede.imageFile
                      .childImageSharp.fluid
                  }
                />
              </span>
              <p className="landing-testimonial-review-txt">
                "Har kun godt at sige omkring dem. Hurtig respons på min
                henvendelse. Seriøse og brugbare svar retur. Seriøs vejledning
                og særdeles konkurrence dygtige priser. Sender dem mine bedste
                anbefalinger!"
                <p className="testimonial-reviewer-name">Claus Ramussen</p>
              </p>
            </div>
            <div className="landing-testimonial-review-box">
              <img
                src={user}
                className="landing-grid-icon"
                alt="user ikon"
                style={{
                  width: "42px",
                  height: "42px",
                  position: "absolute",
                  top: "40px",
                  right: "40px",
                }}
              />
              <p className="landing-testimonial-head">
                Har kun godt at sige omkring dem
              </p>
              <span className="trustpilot-testimonial-img-container">
                <Img
                  fluid={
                    wpgraphql.landings.edges[0].node.landingACFgraphql
                      .trustpilotLandingpage.ikonBillede.imageFile
                      .childImageSharp.fluid
                  }
                />
              </span>
              <p className="landing-testimonial-review-txt">
                "Har kun godt at sige omkring dem. Hurtig respons på min
                henvendelse. Seriøse og brugbare svar retur. Seriøs vejledning
                og særdeles konkurrence dygtige priser. Sender dem mine bedste
                anbefalinger!"
                <p className="testimonial-reviewer-name">Claus Ramussen</p>
              </p>
            </div>
            <div className="landing-testimonial-review-box">
              <img
                src={user}
                className="landing-grid-icon"
                alt="user ikon"
                style={{
                  width: "42px",
                  height: "42px",
                  position: "absolute",
                  top: "40px",
                  right: "40px",
                }}
              />
              <p className="landing-testimonial-head">
                Har kun godt at sige omkring dem
              </p>
              <span className="trustpilot-testimonial-img-container">
                <Img
                  fluid={
                    wpgraphql.landings.edges[0].node.landingACFgraphql
                      .trustpilotLandingpage.ikonBillede.imageFile
                      .childImageSharp.fluid
                  }
                />
              </span>
              <p className="landing-testimonial-review-txt">
                "Har kun godt at sige omkring dem. Hurtig respons på min
                henvendelse. Seriøse og brugbare svar retur. Seriøs vejledning
                og særdeles konkurrence dygtige priser. Sender dem mine bedste
                anbefalinger!"
                <p className="testimonial-reviewer-name">Claus Ramussen</p>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-faq-section">
        <div className="container">
          <h2 className="landing-faq-heading">Oftest stillende spørgsmål</h2>
          <p className="landing-faq-subhead">
            Din rådgiver sikrer, at du ved, præcis hvad du skriver under på. Du
            undgår ubehagelige overraskelser som fx uenighed om indflytningsdag
            eller fejl ved boligen, som du ikke kendte til. Det sikrer dig en
            tryg bolighandel - uden søvnløse nætter og kedelige opringninger fra
            banken.
          </p>
          <div className="row">
            <div className="col">
              <div className="tabs">
                <div className="tab">
                  <input type="checkbox" id="chck1" className="faq-input" />
                  <label className="tab-label" htmlFor="chck1">
                    Skal jeg som boligkøber betale mere end BoligPartners
                    honorar på 5995 kr?
                  </label>
                  <div className="tab-content">
                    <p>
                      Du skal kun betale 5995 kr. til BoligPartner. Du skal
                      desuden betale en tinglysningsafgift til staten.
                      Tinglysningsafgiften ligger på 1660 kr. i fast afgift plus
                      0,6 % af købesummen – eller af den seneste offentlige
                      ejendomsvurdering, såfremt denne er højere end købesummen.
                    </p>
                    <p>
                      Bemærk dog, at Køberpakken er beregnet til dig, der køber
                      en almindelig bolig.
                    </p>
                    <p>
                      Vi vil også meget gerne hjælpe dig med projektkøb, køb af
                      landbrug, grundkøb eller køb af ideel anpart. Men du skal
                      dog regne med at betale et tillæg, fordi sagsbehandlingen
                      er mere omfattende ved disse boligformer.
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck2" className="faq-input" />
                  <label className="tab-label" htmlFor="chck2">
                    Skal jeg betale BoligPartner, hvis handlen ikke bliver til
                    noget?
                  </label>
                  <div className="tab-content">
                    <p>
                      Nej. Hos BoligPartner arbejder vi med garantien: ”Ingen
                      handel, intet salær”. Hvis handlen ikke gennemføres, er
                      rådgivningen gratis. Det gælder, uanset hvor meget tid vi
                      har brugt på jeres sag.
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
                    <p className="landing-features-checkmark">
                      <span style={{ color: "#319e60", paddingRight: "5px" }}>
                        ✓
                      </span>
                      Vi gennemgår købsaftalen og alle handlens dokumenter
                    </p>
                    <p className="landing-features-checkmark">
                      <span style={{ color: "#319e60", paddingRight: "5px" }}>
                        ✓
                      </span>
                      Vi fremsender rådgivningsskrivelse, om de særlige forhold
                      ved handlen, du skal være opmærksom på
                    </p>
                    <p className="landing-features-checkmark">
                      <span style={{ color: "#319e60", paddingRight: "5px" }}>
                        ✓
                      </span>
                      Vi udarbejder godkendelsesskrivelse, med eventuelle
                      forbehold for handlen
                    </p>
                    <p className="landing-features-checkmark">
                      <span style={{ color: "#319e60", paddingRight: "5px" }}>
                        ✓
                      </span>
                      Vi sørger for korrespondancen med handlens parter om
                      godkendelse af handlen
                    </p>
                    <p className="landing-features-checkmark">
                      <span style={{ color: "#319e60", paddingRight: "5px" }}>
                        ✓
                      </span>
                      Vi godkender handlen i sin helhed
                    </p>
                    <p className="landing-features-checkmark">
                      <span style={{ color: "#319e60", paddingRight: "5px" }}>
                        ✓
                      </span>
                      Vi sørger for udarbejdelse eller kontrol af skøde
                    </p>
                    <p className="landing-features-checkmark">
                      <span style={{ color: "#319e60", paddingRight: "5px" }}>
                        ✓
                      </span>
                      Vi sørger for udarbejdelse eller kontrol af
                      refusionsopgørelse
                    </p>
                    <p className="landing-features-checkmark">
                      <span style={{ color: "#319e60", paddingRight: "5px" }}>
                        ✓
                      </span>
                      Vi sikre handlens afslutning i sin helhed
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck4" className="faq-input" />
                  <label className="tab-label" htmlFor="chck4">
                    Har jeg samme retssikkerhed hos BoligPartner som hos en
                    lokal advokat?
                  </label>
                  <div className="tab-content">
                    <p>
                      Ja. BoligPartner er underlagt de samme regler som enhver
                      anden advokat. Det vil sige, at vi har tavshedspligt og at
                      vi har en ansvarsforsikring der dækker vores
                      advokatrådgivning.
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck5" className="faq-input" />
                  <label className="tab-label" htmlFor="chck5">
                    HER MANGLER JEG ET SPØRGSMÅL
                  </label>
                  <div className="tab-content">
                    <p>lorem ipsum og en masse andet vrøvl</p>
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck6" className="faq-input" />
                  <label className="tab-label" htmlFor="chck6">
                    Hvordan ved jeg, om Køberpakken egner sig til mig?
                  </label>
                  <div className="tab-content">
                    <p>
                      Book gratis telefon rådgivningsmøde hos os! Det er
                      selvfølgelig helt uforpligtende. Det koster kun din tid at
                      blive klogere på tryg bolighandel.
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
                trustpilotImage {
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
                      fluid(maxHeight: 598, quality: 100) {
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
                      fluid(maxHeight: 598, quality: 100) {
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
