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
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/courses">Cursos</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/pricing">Preços</Link>
            </li>
            <li>
              <Link to="/journal">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contactar</Link>
            </li>
          </ul>
          <div className="start">
              <span className="text-uppercase">Minha Area</span>
          
          </div>
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
