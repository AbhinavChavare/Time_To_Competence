import React, { useState } from 'react'
import "./HeaderNavbar.css"
import { FaTimes, FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const NavbarLinks = () => {
  const [togbtn, setTogbtn] = useState(false)

  return (
    <div>

      <ul className={`toggle-navbarlinks ${togbtn ? null : "act"}`}>

        <NavLink to="/" onClick={(() => setTogbtn(false))} className={`nav-style ${togbtn ? null : "act"}`} > Home</NavLink>
        <NavLink to="/about" onClick={(() => setTogbtn(false))} className={`nav-style ${togbtn ? null : "act"}`}> About</NavLink>
        <NavLink to="/content" onClick={(() => setTogbtn(false))} className={`nav-style ${togbtn ? null : "act"}`}>Content</NavLink>
        <NavLink to="/contact" onClick={(() => setTogbtn(false))} className={`nav-style ${togbtn ? null : "act"}`}>Contact</NavLink>
        <NavLink to="/login" onClick={(() => setTogbtn(false))} className={`nav-style ${togbtn ? null : "act"}`}><button className='btn-glob'>Login</button></NavLink>
      </ul>

      <li onClick={(() => setTogbtn(true))} className={`toggle-btn ${togbtn ? "act" : null}`}><FaBars /></li>
      <li onClick={(() => setTogbtn(false))} className={`toggle-btn ${togbtn ? null : "act"}`}><FaTimes /></li>
    </div>
  )
}

export default NavbarLinks
