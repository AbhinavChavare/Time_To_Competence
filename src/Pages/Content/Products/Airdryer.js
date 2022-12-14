import React from 'react'
import "../Content.css"

const Airdryer = () => {
  return (
    <div className='cont-center'>
      <div className='cont-margin'>
        <div className='data-flex-wrap'>
          <div className='about-img1'> <img src='../images/Airdryer.webp' alt='airdryer'></img></div>
          <div className='about-text'>
            <h3>Air Dryers</h3>
            <p className='text-just'>
              <h4>Protecting your compressed air systems and processes</h4>

              Treated air helps prevent pipework corrosion, product spoilage and premature failure of pneumatic equipment

              <h4>Maintaining the quality of your end product</h4>

              A complete range of products with dew points from +3 to -70 °C to ensure the correct air quality for your application

              <h4>Energy-efficient air dryers</h4>
              All our compressed air dryers are designed to perform in the most energy-efficient and environmentally friendly way, and thus contributing to a reduced carbon footprint
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Airdryer
