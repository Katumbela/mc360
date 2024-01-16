import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";
import Slide from "react-reveal/Slide";

const Footer = () => {
  return (
    <>
      <div className="sponso py-5">
        <section className="sponsor container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="text-white">Jornada membro anjo</h2>

              <p className="fw-light text-white">
                Se torne um membro e ajude um jovem a ter acesso a um programa
                educacional de qualidade. Além disso, tenha acesso aos nossos
                benefícios exclusivos, como a Academia de Idiomas, a Escola de
                Comunicação, eventos presenciais e muito mais.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 col-sm-12 my-2">
                  <input
                    type="text"
                    placeholder="Nome completo"
                    className="form-control"
                  />
                </div>
                <div className="col-12 col-sm-6 my-2">
                  <input
                    type="text"
                    placeholder="Telefone"
                    className="form-control"
                  />
                </div>
                <div className="col-12 col-sm-6 my-2">
                  <input
                    type="text"
                    placeholder="Area de educação"
                    className="form-control"
                  />
                </div>
                <div className="col-12 col-sm-6 my-2">
                  <input
                    type="text"
                    placeholder="Estado"
                    className="form-control"
                  />
                </div>
                <div className="col-12 col-sm-6 my-2">
                  <input
                    type="text"
                    placeholder="Cidade"
                    className="form-control"
                  />
                </div>
                <div className="col-12 col-sm-12 my-2">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="col-12 col-sm-12 my-2">
                  <button className="btn primary-btn w-100 rounded-pill">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="newletter">
        <div className="container row">
          <div className="col-12 col-md-6 my-2">
            
          <Slide left cascade>
            <div className="left row">
              <h1>
                Newsletter - Fique ligado e obtenha as últimas atualizações
              </h1>
              <span>Bem, bem longe, atrás das montanhas das palavras</span>
            </div>
          </Slide>
          </div>
          <div className="col-12 col-md-6 my-auto">
            
          <Slide right cascade>
            <div className="right d-flex gap-2 my-auto">
              <input type="text" placeholder="Insira seu email" />
              <i className="fa fa-paper-plane"></i>
            </div>
          </Slide>
          </div>

        </div>
      </section>
      <footer className="container-fluit">
        <div className="container-fluid">
          <div className=" row mx-auto w-100 m padding">
            <div className="box col-12 col-md-3 logo">
              <h1>MC360</h1>
              <span>Plataforma de Intercâmbio Africano </span>
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
