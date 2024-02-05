import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"

const Pricing = () => {
  return (
    <>
      <Back title='Escolha o Plano Certo' />
      <section className='price container padding'>
        <div className='flex-wrap gap-4 d-flex justify-content-center '>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing
