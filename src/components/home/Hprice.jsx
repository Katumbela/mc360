import React from "react";
import Heading from "../common/heading/Heading";
import PriceCard from "../pricing/PriceCard";

const Hprice = () => {
  return (
    <>
      <section className="hprice padding">
        <Heading subtitle="NOSSOS PREÇOS" title="Preços & Pacotes" />
        <div className="container">
          <div className="price d-flex flex-wrap gap-4 ">
            <PriceCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hprice;
