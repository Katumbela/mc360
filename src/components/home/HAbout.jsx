import React from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { coursesCard } from "../../dummydata";
import Slide from "react-reveal/Slide";
import bann3 from "../../images/bann3.png";
import s1 from "../../images/imgh.png";
import s2 from "../../images/imgh2.png";
import { Fade } from "react-reveal";

const HAbout = () => {
  return (
    <>
      <section className="sobre container">
        <div className="row">
          <div className="col-12 col-md-6 text-center">
           <Slide left>
           <img src={s1} className="" alt="" />
           </Slide>
          </div>

          <div className="col-12 text-start col-md-6 my-auto pt-auto">
            <div className="text-start my-auto ">
            <Slide right>
            <h2 className="text-primary2"> MINHA CARREIRA 360° </h2>
              <p>
                Edtech inovadora, comprometida a inspirar e capacitar a próxima
                geração de líderes por meio de uma comunicação clara e
                assertiva, impulsionando a busca por objetivos pessoais e
                profissionais através dos sonhos.
              </p>
            </Slide>
            </div>
          </div>
        </div>
      </section>
      <section className="sobre pt-4 bg-white">
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-12 col-md-6 text-center">
             <Slide right>
             <img src={s2} className="" alt="" />
             </Slide>
            </div>

            <div className="col-12 text-start col-md-6 my-auto pt-auto">
              <div className="text-start my-auto ">
                <Slide left>
                  <h2 className="text-primary2">
                    {" "}
                    Para quem é a Minha Carreira 360°{" "}
                  </h2>
                  <p>
                    Se está nos anos finais da escola, procurando o primeiro
                    emprego, buscando recolocação ou pensando em mudar de
                    carreira, a Minha Carreira 360° é ideal para você! Estamos
                    prontos para ajudá-lo a atingir seu potencial máximo e
                    inspirar outros ao seu redor.
                  </p>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="homeAbout">

        <div className="bg-white">
      <br />
            <br />
            <br />
          <Heading subtitle="COMUNIDADE MC360" title=" " />

          <center>
           <Fade bottom cascade>
           <p className="w-75 fw-thin fw-light f-reg">
              <b className="text-primary2">"</b> Se você está nos anos finais da
              escola e busca o primeiro emprego, ou se está em busca de
              recolocação no mercado de trabalho, ou ainda, se deseja fazer
              transição de carreira, a "Minha Carreira 360°" é perfeita para
              você! Nós estamos aqui para ajudá-lo a alcançar seu potencial
              máximo e, assim, inspirar outras pessoas ao seu redor.{" "}
              <b className="text-primary2">"</b>
            </p>
           </Fade>
          </center>

          <div className="coursesCard container bg-white">
            {/* copy code form  coursesCard */}
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="my-auto">
                  <h2>Comunidade MC360</h2>
                  <Slide bottom>
                    <p>
                      Não perca mais tempo e venha fazer parte da nossa
                      comunidade! Conte conosco para dar o suporte necessário em
                      sua jornada profissional. Estamos aqui para ajudá-lo a
                      alcançar seus sonhos e objetivos. Juntos, podemos
                      construir um futuro de sucesso
                    </p>
                  </Slide>
                  <Slide bottom cascade>
                    <button className="btn outline-btn w-auto">
                      Conheça os planos
                    </button>
                  </Slide>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="my-auto">
                  <Slide right cascade>
                    <img src={bann3} alt="" className="w-100" />
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  );
};

export default HAbout;
