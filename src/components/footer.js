import { Link } from "gatsby"
import React from "react"

import "../components/css/footer.css"

const Footer = () => (
    <footer className="section-footer">
        <div className="container">
            <div>
                <h2>Kontakt</h2>
                <p>BoligPartner<br />
                    Sdr. Stationsvej 26, 2<br />
                    4200 Slagelse<br /><br />
                    CVR. nr. 31 38 92 59<br /><br />
                    <a href="tel:70605038">T: 70 60 50 38</a><br />
                    <a href="mailto:info@bolig-partner.dk">M: info@bolig-partner.dk</a></p>
            </div>
            <div>
                <h2>Telefontider</h2>
                <p>Mandag - Fredag: 09:00-17:00</p>
            </div>
            <div>
                <h2>Nyttige links</h2>
                <Link to="/forretningsbetingelser/">Forretningsbetingelser</Link><br />
                <Link to="/cookiepolitik/">Cookiepolitik</Link><br />
                <Link to="/datapolitik/">Datapolitik</Link>
            </div>
            <div>
                <h2>Mærkninger</h2>
                <p>Alle kontaktoplysninger</p>
                <p>Alle kontaktoplysninger</p>
                <p>Alle kontaktoplysninger</p>
                <p>Alle kontaktoplysninger</p>
            </div>
        </div>

    </footer >
)

export default Footer