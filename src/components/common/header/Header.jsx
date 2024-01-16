import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB my-auto"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Academia de idiomas </Link>
            </li>

            <li>
              <Link to="#">Programa de intercâmbio</Link>
            </li>

            <li>
              <Link to="/#">Eventos presenciais e online</Link>
            </li>

            <li>
              <Link to="/pricing">Comunidade Mc360</Link>
            </li>

            <li>
              <Link to="/journal">Podcast exclusivo</Link>
            </li>

          </ul>
          {/* <div className="start">
              <span className="text-uppercase">Minha Area</span>
          
          </div> */}
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
