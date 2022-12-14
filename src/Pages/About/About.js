import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='cont-center'>
      <div className='cont-margin'>
        <div className='Ab-data-flex-wrap'>
          <div className='abbox-img1'> <img src='../images/about1.webp'></img></div>
          <div className='about-text'>
            <h3>About us</h3>
            <p className='text-just'>
              Established in 1960, We provide our customers with the solutions they need to enhance productivity and achieve their manufacturing goals. At Atlas Copco India, we deliver value and innovate with the future in mind. Our passionate people, expertise and service bring sustainable value to industries everywhere. We are a part of the Atlas Copco Group, with extensive local presence, and our innovative compressors, vacuum solutions, generators, pumps, power tools and assembly systems help our customers achieve maximum efficiency and produstivity. Our nationwide service personnel are always close at hand to provide repairs, service and spare parts locally. With state-of-the-art manufacturing facilities today at Pune and Chakan, the company has a global engineering competency centers for compressors at Pune.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
