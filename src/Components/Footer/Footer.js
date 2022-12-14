import React from 'react'
import "./Footer.css"
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footerdown'>
      <div className='foter-cont'>
        <div className='footer-data'>
          <h4>Website made by Abhinav Balkrishna Chavare</h4>
          <h3>Let's do Inversion's {"<^>"} </h3>
        </div>
        <hr />
        <div className='fot-data-con'>
          <h4>connect me via:</h4>
          <div>
            <a href='https://www.instagram.com/abhi_9chavare/' target="_blank" rel='error'>
              <FaInstagram className='iconsz' /></a>
            <a href='https://www.facebook.com/abhinav.chavare.7/' target="_blank" rel='error'>
              <BsFacebook className='iconsz' /></a>
            <a href='https://www.linkedin.com/in/abhinav-chavare-3a8110112/' target="_blank"
             rel='error'>
              <AiFillLinkedin className='iconsz' /></a>
          </div>
          <h5 href='https://www.linkedin.com/in/abhinav-chavare-3a8110112/' target="_blank"
          >Phone: +91-9921899345</h5>

        </div>
      </div>
    </div>
  )
}

export default Footer
