import React from "react";
import { awrapper } from "../../dummydata";
import mc from "../../images/mc.png";
import arotec from "../../images/icone.png";
import Bounce from 'react-reveal/Bounce'

const Awrapper = () => {
  return (
    <>
      <section className="awrapper">
        <div className="container grid">
          {awrapper.map((val) => {
            return (
              <div className="box my-auto d-flex flex">
                <div className="img my-auto">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text mt-2 my-auto">
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <br />

      <section className="partner mt-3">
        <Bounce>
          <div className="d-flex justify-content-center gap-3">
            <img src={mc} alt="" className="logo my-auto" />
            <img src={arotec} alt="" className="logo2 my-auto" />
          </div>
        </Bounce>
      </section>
      <br />
      <br />
    </>
  );
};

export default Awrapper;
