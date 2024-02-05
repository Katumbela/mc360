import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Head from "./Head";
import "./header.css";
import logo from "../../../images/logo4.png";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      {/* <Head /> */}
      <header>
        <nav className="flexSB headder">
          <NavLink to={'/'} className="logo">
            <img src={logo} alt="" />
          </NavLink>
          <ul
            className={click ? "mobile-nav" : "flexSB my-auto"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Academia de idiomas </Link>
            </li>

            <li>
              <Link to="/intercambio">Programa de intercâmbio</Link>
            </li>

            <li>
              <Link to="/#">Eventos presenciais e online</Link>
            </li>

            <li>
              <a href="/#comunidade">Comunidade Mc360</a>
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
