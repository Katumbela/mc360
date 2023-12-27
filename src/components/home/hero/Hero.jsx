import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import Tada from "react-reveal/Tada";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="roww">
            <div className="my- col-md-12 col-lg-10">
              <Flip left cascade>
                <Heading
                  className=""
                  subtitle="BEM-VINDO À MC360"
                  title="A Melhor Plataforma de Educação Online"
                />
              </Flip>
              <Slide left cascade>
                <p className="p-sm">
                  Comece, mude ou avance em sua carreira com mais de 3000
                  cursos, certificados profissionais e diplomas de universidades
                  e empresas de classe mundial
                </p>
              </Slide>
              <div className=" btnss d-flex gap-4">
                <Tada>
                  <button className="primary-btn d-flex gap-2">
                    COMEÇAR AGORA<i className="fa fa-long-arrow-alt-right"></i>
                  </button>
                </Tada>
                <button className=" d-flex gap-2">
                  VER CURSO <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
