import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";
import Slide from "react-reveal/Slide";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <Slide left cascade>
            <div className="left row">
              <h1>
                Newsletter - Fique ligado e obtenha as últimas atualizações
              </h1>
              <span>Bem, bem longe, atrás das montanhas das palavras</span>
            </div>
          </Slide>

          <Slide right cascade>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
          </Slide>
        </div>
      </section>
      <footer className="container-fluit">
        <div className="container-fluid">
          <div className=" row mx-auto w-100 m padding">
            <div className="box col-12 col-md-3 logo">
              <h1>MC360</h1>
              <span>Plataforma de Educação Online e Aprendizado</span>
              <p>
                Um pequeno rio chamado Duden flui por esse lugar e o abastece
                com a regelialia necessária.
              </p>

              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
            </div>
            <div className="box col-12 col-md-3 link">
              <h3>Explore</h3>
              <ul>
                <li>Sobre Nós</li>
                <li>Serviços</li>
                <li>Cursos</li>
                <li>Blog</li>
                <li>Entre em Contato</li>
              </ul>
            </div>
            <div className="box col-12 col-md-3 link">
              <h3>Links Rápidos</h3>
              <ul>
                <li>Entre em Contato</li>
                <li>Preços</li>
                <li>Termos e Condições</li>
                <li>Privacidade</li>
                <li>Feedbacks</li>
              </ul>
            </div>

            <div className="box col-12 col-md-3 last">
              <h3>Dúvidas?</h3>
              <ul>
                <li>
                  <i className="fa fa-map"></i>
                  Talatona, Luanda - Angola
                </li>
                <li>
                  <i className="fa fa-phone-alt"></i>
                  +244 912 392 3929{" "}
                </li>
                <li>
                  <i className="fa fa-paper-plane"></i>
                  info@arotec.ao
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>MC360 Copyright ©2022 All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
