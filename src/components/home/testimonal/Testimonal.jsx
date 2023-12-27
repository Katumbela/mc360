import React from "react";
import { testimonal } from "../../../dummydata";
import Heading from "../../common/heading/Heading";
import "./style.css";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonal = () => {
  //Owl Carousel Settings

  // const options = {
  //   loop: true,
  //   center: true,
  //   items: 3,
  //   margin: 0,
  //   autoplay: true,
  //   dots: true,
  //   autoplayTimeout: 6500,
  //   smartSpeed: 450,
  //   nav: false,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // };

  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <Heading subtitle="TESTEMUNHAS" title="Nossos estudantes de Sucesso" />

          <div className="content grid2">
           
              {testimonal.map((val) => (
                <div className="items shadow">
                  <div className="box flex">
                    <div className="img">
                      <img src={val.cover} alt="" />
                      <i className="fa fa-quote-left icon"></i>
                    </div>
                    <div className="name">
                      <h2>{val.name}</h2>
                      <span>{val.post}</span>
                    </div>
                  </div>
                  <p>{val.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
