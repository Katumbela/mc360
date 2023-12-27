/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import "./courses.css"
import "bootstrap"

import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='CURSOS' title='Navegue Por Nossos Cursos On-Linees' />
          <div className='content justify-content-center d-flex gap-4 flex-wrap'>
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
        </div>
        <br />
        <br />
        <br />
        <br />
        
      </section>
    </>
  )
}

export default OnlineCourses
