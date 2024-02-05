import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import { Slide } from "react-reveal"

import s2 from "../../images/imgh2.png";

const About = () => {
  return (
    <>
      <Back title='Sobre Nós' />
      <AboutCard />

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

    </>
  )
}

export default About
