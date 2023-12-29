/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import "./courses.css"

import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"
import Zoom from 'react-reveal/Zoom'

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='CURSOS DE INTERCÂMBIO' title='Faça intercâmbio na África do Sul' />
            <Zoom bottom cascade>
             <div className=' justify-content-center d-flex gap-4 flex-wrap'>
            {online.map((val) => (
               <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
              </Zoom>
        </div>
        <br />
        
      </section>
    </>
  )
}

export default OnlineCourses
