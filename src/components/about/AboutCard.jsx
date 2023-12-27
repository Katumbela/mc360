import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import Slide from 'react-reveal/Slide'

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='APRENDA QUALQUER COISA' title='Benefícios Da Experiência Em Aprendizagem Online' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
              <Slide right>
                    <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
              </Slide>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Awrapper />
    </>
  )
}

export default AboutCard
