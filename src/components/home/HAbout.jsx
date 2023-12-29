import React from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { coursesCard } from "../../dummydata";
import Slide from "react-reveal/Slide";
import bann3 from "../../images/bann3.png";

const HAbout = () => {
  return (
    <>
      <section className="homeAbout">
        <div className="bg-white">
          <Heading subtitle="COMUNIDADE MC360" title=" " />

          <div className="coursesCard container bg-white">
            {/* copy code form  coursesCard */}
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="my-auto">
                  <h2>Confie Na MC360</h2>
                  <Slide bottom>
                    <p>
                      Criamos um ambiente digital vibrante para que os membros
                      da comunidade possam trocar experiências, tirar dúvidas e
                      promover a colaboração.
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
