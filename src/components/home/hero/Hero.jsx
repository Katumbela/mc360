import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="roww">
            <div className="my- col-md-12 col-lg-10">
            <Heading
              className=""
              subtitle="BEM-VINDO À MC360"
              title="A Melhor Plataforma de Educação Online"
            />
            <p className="p-sm">
              Comece, mude ou avance em sua carreira com mais de 3000 cursos,
              certificados profissionais e diplomas de universidades e empresas
              de classe mundial
            </p>
            <div className=" btnss d-flex gap-4">
              <button className="primary-btn d-flex gap-2">
                COMEÇAR AGORA<i className="fa fa-long-arrow-alt-right"></i>
              </button>
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
