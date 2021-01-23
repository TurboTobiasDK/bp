import React, { useState } from "react"
import Layout from "../../components/landing/js/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../../components/landing/css/landing.css"
import { useNavigate } from "@reach/router"
import { Helmet } from "react-helmet"

import handshake from "../../images/SVG/handshake.svg"
import mailphone from "../../images/SVG/mailphone.svg"
import denmark from "../../images/SVG/denmark.svg"
import price from "../../images/SVG/price-list.svg"
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
              <h1>Få en tryg og overskuelig bolighandel</h1>
              <h2>Pris kr. 5.995,- inkl. moms</h2>
              <p>
                Opnå de bedste købsvilkår i din bolighandel. Vores
                køberrådgivere sidder til at tage en{" "}
                <span style={{ fontWeight: 700 }}>uforpligtende snak</span> om
                dine muligheder.
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
                    Ring mig op
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
              <span className="hero-img-container">
                <a
                  href="https://dk.trustpilot.com/review/bolig-partner.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img
                    fluid={
                      wpgraphql.landings.edges[0].node.landingACFgraphql.hero
                        .trustpilotImage.imageFile.childImageSharp.fluid
                    }
                  />
                </a>
              </span>
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
          <h2 className="landing-icons-heading">Dine fordele</h2>
          <p className="landing-icons-subhead">
            Hos BoligPartner, får du mere end bare køberrådgivning. Hos
            BoligParter får du faglig ekspertise, hvor én af vores fornemmeste
            opgaver er at skabe tryghed i processen, bevare overblikket og
            formidle de juridiske forhold ved din ejendomshandel på en let og
            forståelig måde.
          </p>

          <div className="landing-three-grid">
            <div className="landing-item">
              <img
                src={handshake}
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
                Hvis handlen ikke gennemføres, skal du heller ikke betale
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
                Uanset hvor i landet du ønsker at købe bolig, yder vi rådgivning
              </p>
            </div>
            <div className="landing-item">
              <img
                src={mailphone}
                className="landing-grid-icon"
                alt="mail & phone icon"
                style={{
                  width: "35px",
                  height: "35px",
                  position: "absolute",
                  top: "40px",
                  right: "40px",
                }}
              />
              <p className="landing-icon-text">Personlig rådgivning</p>
              <p className="small-txt">
                Du får en personlig boligrådgiver, som er med dig fra start til
                slut
              </p>
            </div>
            <div className="landing-item">
              <img
                src={price}
                className="landing-grid-icon"
                alt="pricelist icon"
                style={{
                  width: "35px",
                  height: "35px",
                  position: "absolute",
                  top: "40px",
                  right: "40px",
                }}
              />
              <p className="landing-icon-text">Rådgivning til fast pris</p>
              <p className="small-txt">
                Fast pris på boligrådgivning, fremfor uklare timepriser.
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
                Sammen gennemgår vi dit behov og videreforløb.
              </li>
              <li class="landing-process-four">
                Du får tilknyttet personlig køberrådgiver som er med fra start
                til slut.
              </li>
              <li class="landing-process-five">
                BoligPartner overtager ansvaret, så kan du og din familie trygt
                flytte.
              </li>
            </ol>
            <div className="landing-features-checklist">
              <h2>BoligPartner sørger for </h2>
              <ol>
                <li className="landing-features-checkmark">
                  Vi gennemgår købsaftalen og alle handlens dokumenter
                </li>
                <li className="landing-features-checkmark">
                  Vi fremsender rådgivningsskrivelse, om forhold du skal være
                  opmærksom på
                </li>
                <li className="landing-features-checkmark">
                  Vi udarbejder godkendelsesskrivelse, med eventuelle forbehold
                  for handlen
                </li>
                <li className="landing-features-checkmark">
                  Vi sørger for korrespondancen med handlens parter om handlen
                </li>
                <li className="landing-features-checkmark">
                  Vi godkender handlen i sin helhed
                </li>
                <li className="landing-features-checkmark">
                  Vi sørger for udarbejdelse eller kontrol af skøde
                </li>
                <li className="landing-features-checkmark">
                  Vi sørger for udarbejdelse eller kontrol af refusionsopgørelse
                </li>
                <li className="landing-features-checkmark">
                  Vi sikre handlens afslutning i sin helhed
                </li>
              </ol>
            </div>
            <h2>Skal vi hjælpe dig med din bolighandel?</h2>
            <p class="landing-features-cta">
              Ring tlf. <a href="tel:70605038">70 60 50 38</a> eller udfyld
              formularen herunder for en uforpligtende snak om dine muligheder.
            </p>
          </div>
        </div>
      </section>

      <section className="landing-ring-op">
        <div className="container">
          <div className="landing-ring-op-grid">
            <div className="kontakt-ring-op">
              <h2>Har du spørgsmål til din bolighandel?</h2>
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
            <div className="testimonial-ring-op">
              <a
                href="https://dk.trustpilot.com/review/bolig-partner.dk"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                  Jeg har som førstegangskøber følt mig særdeles tryg igennem
                  hele processen vedr. Mit køb. Rådgiver har sørget for at
                  vejlede mig undervejs og stillet sig til rådighed for alle
                  spørgsmål. Jeg vil give mine bedste anbefalinger!
                </p>
                <p className="trustpilot-navn">Jannie Christensen</p>
              </a>
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
                Hos BoligPartner får du tilknyttet en personlig boligrådgiver
                som kender din sag. Din boligrådgiver sikrer dine rettigheder og
                sørger for de bedste vilkår for dig som køber, så du og din
                familie i stedet kan glæde jer til at flytte ind i jeres nye
                bolig.
                <br />
                <br />
                Vi tror på, at den direkte kontakt med egen boligrådgiver gennem
                hele processen er nøglen til tryghed og derved starten på den
                gode bolighandel.
                <br />
                <br />
                <button>Mød din køberrådgiver</button>
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
            Når vi skriver personlig rådgivning, så er det fordi vi mener det!
            Derfor er vi ekstra glade for, at det også er det som vores købere
            oplever.
          </p>

          <div className="landing-testimonial-box">
            <a
              href="https://dk.trustpilot.com/review/bolig-partner.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="tp-link-testimonial-box"
            >
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
                  Super rådgivning og ekspedition
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
                  "BoligPartner har været en stor hjælp i forbindelse med mit
                  første boligkøb. Rådgiver Sanne Herstal har ydet en fantastisk
                  service og en detaljeret gennemgang af alle dokumenter. Der
                  svares altid hurtigt på mail eller telefon, og hele sagen blev
                  ekspederet super hurtigt."
                  <p className="testimonial-reviewer-name">
                    Lars Larsen, Roskilde
                  </p>
                </p>
              </div>
            </a>
            <a
              href="https://dk.trustpilot.com/review/bolig-partner.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="tp-link-testimonial-box"
            >
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
                  God og tryg støtte gennem huskøb
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
                  "Louise tog os i hånden og guidede os igennem vores første køb
                  af ejendom (ejerlejlighed) - altid til rådighed og sikrede sig
                  at vi var trygge gennem hele processen!"
                  <p className="testimonial-reviewer-name">
                    Marc Nilsson, København N
                  </p>
                </p>
              </div>
            </a>
            <a
              href="https://dk.trustpilot.com/review/bolig-partner.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="tp-link-testimonial-box"
            >
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
                  Det har været en rigtig positiv proces
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
                  "Det har været en rigtig positiv proces, hvor BoligPartner har
                  stået til rådighed hele tiden over mail og telefon med svar på
                  alle vores spørgmsål og hjulpet os som førstegangskøbere
                  rigtig godt igennem med alt. Vi har følt os godt dækket ind og
                  trygge hele vejen igennem."
                  <p className="testimonial-reviewer-name">Anna S., Århus</p>
                </p>
              </div>
            </a>
            <a
              href="https://dk.trustpilot.com/review/bolig-partner.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="tp-link-testimonial-box"
            >
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
                  Vi er første gangs købere
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
                  "Vi er første gangs købere, og har derfor haft det svært med
                  alle de nye ting vi skulle finde ud af. Men med det bedste
                  hjælp fik vi løst det hurtigt og smertefrit af Louise, fra
                  bolig partner! Rigtig god service! Vi vil helt sikkert bruge
                  jer igen!"
                  <p className="testimonial-reviewer-name">Sanne, Slagelse</p>
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="landing-faq-section">
        <div className="container">
          <h2 className="landing-faq-heading">Oftest stillede spørgsmål</h2>
          <p className="landing-faq-subhead">
            Vi ved, at et køb af en bolig er en stor beslutning, og at det helt
            naturligt giver mange spørgsmål til processen.
          </p>
          <div className="row">
            <div className="col">
              <div className="tabs">
                <div className="tab">
                  <input type="checkbox" id="chck1" className="faq-input" />
                  <label className="tab-label" htmlFor="chck1">
                    Er prisen på kr 5.995 fast, eller skal jeg betale andre
                    udgifter udover?
                  </label>
                  <div className="tab-content">
                    <p>
                      Du skal kun betale kr. 5.995 i honorar til BoligPartner,
                      uanset hvor lang tid vi bruger på din sag. Det er din
                      garanti for en fast og fair pris. Du skal som køber
                      desuden betale tinglysningsafgift til staten.
                      Tinglysningsafgiften er delt i to og opgøres som en fast
                      afgift på kr. 1.750 og en variabel afgift på 0,6 % af
                      købesummen.
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
                      handel - Intet salær”. Hvis handlen ikke gennemføres, skal
                      du ikke betale. Det gælder, uanset hvor meget tid vi har
                      brugt på jeres sag.
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck3" className="faq-input" />
                  <label className="tab-label" htmlFor="chck3">
                    Hvad er forskellen på BoligPartner og en traditionel
                    advokat?
                  </label>
                  <div className="tab-content">
                    <p>
                      Ligesom en traditionel advokat er BoligPartner
                      rådgiveransvarsforsikret. BoligPartners rådgivning og
                      sagsbehandling er fuldt ansvarsforsikret via HDI Gerling.
                      Kvalitetsmæssigt er der ingen forskel på den juridisk
                      rådgivning fra BoligPartner og rådgivning fra advokat i
                      jeres købsproces.
                    </p>
                    <p>
                      Både BoligPartner og en traditionel advokat kan yde
                      køberrådgivning om boligkøb og hjælpe dig med at
                      gennemskue indhold og betydning af dokumenter.
                      BoligPartner vil ofte yde dig en mere helhedsorienteret
                      køberrådgivning og hjælpe dig trygt gennem købsprocessen
                      fra start til slut, eftersom det er det eneste vi laver.
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck4" className="faq-input" />
                  <label className="tab-label" htmlFor="chck4">
                    Kan ejendomsmægleren ikke bare rådgive mig?
                  </label>
                  <div className="tab-content">
                    <p>
                      Nej, ejendomsmægleren må kun rådgive og vejlede fra én
                      side af bordet. Det blev i 2015 vedtaget ved lov (loven om
                      fast ejendom), at ejendomsmæglere fremadrettet kun må
                      varetage sælgers interesser. Derfor er det blevet endnu
                      mere vigtigt, at du som køber har egen rådgiver med i
                      handlen fra start til slut.
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck5" className="faq-input" />
                  <label className="tab-label" htmlFor="chck5">
                    Hvilke typer af ejendomme arbejder I med?
                  </label>
                  <div className="tab-content">
                    <p>
                      BoligPartner arbejder hovedsageligt med almindelige huse,
                      ejerlejligheder og sommerhuse.
                    </p>
                    <p>
                      Vi vil også meget gerne hjælpe dig med projektkøb, nedlagt
                      landbrug, grundkøb eller køb af ideel anpart. I disse
                      sager vil der være et tillæg på kr. 1.500, fordi
                      sagsbehandlingen er mere omfattende ved disse boligformer.
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck6" className="faq-input" />
                  <label className="tab-label" htmlFor="chck6">
                    Yder i rådgivning i mit lokalområde?
                  </label>
                  <div className="tab-content">
                    <p>
                      Ja. Det har ingen betydning om du handler i øst eller
                      vest. Juraen er den samme, og vi har erfaring med
                      bolighandler i hele landet. BoligPartners rådgivning er
                      landsdækkende og foregår hovedsageligt online, hvor du
                      altid kan komme i kontakt med din køberrådgiver på enten
                      mail eller telefon på tidspunkter som passer dig bedst.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-team">
        <div className="container">
          <div className="advisor-grid">
            <div className="advisor-text">
              <h2>Har du stadig spørgsmål omkring køberrådgivning?</h2>
              <p>
                Ønsker du at møde din kommende køberrådgiver eller vil du bare
                gerne vide lidt mere om vores ydelser, sidder vores erfarne
                køberrådgivere klar til at svare på dine spørgsmål.
                <br />
                <br />
                Vi tror på, at den direkte kontakt med egen køberrådgiver gennem
                hele processen er nøglen til tryghed og derved starten på den
                gode bolighandel.
                <br />
                <br />
                <button>Jeg vil gerne vide mere</button>
              </p>
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
