import React, { useState } from 'react'
import "./HeaderNavbar.css"
import { FaTimes, FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../Context/AuthContext';

const NavbarLinks = () => {

  const [togbtn, setTogbtn] = useState(false)
  let { lsToken, tokenvalid,logoutcontext } = useAuthContext()
  const logoutData = () => {
    setTogbtn(false)
    localStorage.removeItem("Token")
  logoutcontext()
  }


  return (
    <div className='head-position'>
      <ul className={`toggle-navbarlinks ${togbtn ? null : "act"}`}>

        <NavLink to="/" onClick={(() => setTogbtn(false))} className={`nav-style ${togbtn ? null : "act"}`} > Home</NavLink>
        <NavLink to="/about" onClick={(() => setTogbtn(false))} className={`nav-style ${togbtn ? null : "act"}`}> About</NavLink>
        <NavLink to="/content" onClick={(() => setTogbtn(false))} className={`nav-style ${togbtn ? null : "act"}`}>Content</NavLink>

        <NavLink to="/contact" onClick={(() => setTogbtn(false))} className={`nav-style ${togbtn ? null : "act"}`}>Contact</NavLink>

        <NavLink to="/logout" onClick={(() => logoutData())}
          className={`nav-style ${togbtn ? null : "act"} ${((lsToken === null) && (tokenvalid !== "guestLogin")) ? "action" : null} `}
        >Logout</NavLink>

        <NavLink to="/login" onClick={(() => setTogbtn(false))} className={`nav-style ${togbtn ? null : "act"} ${((lsToken === null) && (tokenvalid !== "guestLogin")) ? null : "action"}`}>Login</NavLink>

      </ul>

      <li onClick={(() => setTogbtn(true))} className={`toggle-btn ${togbtn ? "act" : null}`}><FaBars /></li>
      <li onClick={(() => setTogbtn(false))} className={`toggle-btn ${togbtn ? null : "act"}`}><FaTimes /></li>
    </div>
  )
}

export default NavbarLinks
