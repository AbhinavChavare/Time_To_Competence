import React from 'react'
import "./About/About.css"
const Home = () => {
  return (
    <div className='cont-center'>
      <div className='cont-margin'>
        <div className='Ab-data-flex-wrap'>
          <div className='about-img1'> <img src='../images/home1.webp'></img></div>
          <div className='about-text'>
            <h3>Your Home for Total Compressed Air & Gas Solutions</h3>
            <p className='text-just'>Great ideas drive development. We create lasting results in a way that is economically, environmentally and socially responsible. Our innovative products and solutions enable everything from food production to space travel, improving the everyday life of people everywhere.
              <p className='text-just'>Atlas Copco provides best-in-class energy-efficient air compressors, screw blowers, gas generators, air dryers, filters, piping, energy audits and more paired with a nationwide service network.</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
