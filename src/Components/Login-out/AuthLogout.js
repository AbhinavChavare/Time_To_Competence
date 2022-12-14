import React from 'react'
import "./Login-out.css"
import { NavLink } from 'react-router-dom'

const AuthLogout = () => {
  return (
    <div className='page-center'>
      <div className='page-padd'>
        <h3>Logout Sucessfully</h3>
        <p>Thanks for visiting</p>
        <p>For login please click</p>
        <NavLink to="/login" ><button>Go to Login page</button></NavLink>
      </div>
    </div>
  )
}

export default AuthLogout
