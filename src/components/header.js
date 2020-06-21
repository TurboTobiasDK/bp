import { Link } from "gatsby"
import React from "react"

import "../components/css/header.css"

const Header = () => (
  <nav>
    <div className="container">
      <div id="logo">BoligPartner</div>

      <label for="drop" className="toggle">
        Menu
      </label>
      <input type="checkbox" id="drop" />
      <ul className="menu">
        <li>
          <Link to="/">Forside</Link>
        </li>
        <li>
          <label for="drop-1" className="toggle">
            WordPress +
          </label>
          <a href="#">Ydelser</a>
          <input type="checkbox" id="drop-1" />
          <ul>
            <li>
              <Link to="/ydelser/koeberpakke/">Køberpakke</Link>
            </li>
            <li>
              <Link to="/ydelser/koeber-gennemgang/">Køber - Gennemgang</Link>
            </li>
            <li>
              <Link to="/ydelser/berigtigelse-af-bolighandel/">
                Berigtigelse af bolighandel
              </Link>
            </li>
            <li>
              <Link to="/ydelser/tinglysning-af-skoede/">
                Tinglysning af skøde
              </Link>
            </li>
            <li>
              <Link to="/ydelser/skilsmisseskoede/">Skilsmisseskøde</Link>
            </li>
            <li>
              <Link to="/ydelser/skifteretsattest/">Skifteretsattest</Link>
            </li>
            <li>
              <Link to="/ydelser/auktionsskoede/">Auktionsskøde</Link>
            </li>
            <li>
              <Link to="/ydelser/selvsalg/">Selvsalg</Link>
            </li>
            <li>
              <Link to="/ydelser/andet/">Andet</Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Artikler/Blog</a>
        </li>
        <li>
          <a href="#">Om BoligPartner</a>
        </li>
        <li>
          <a href="#">Kontakt</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
