import React, { useState } from 'react'
import "./Login-out.css"
import { ToastContainer } from 'react-toastify';
import { useAuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';


const SecLogin = () => {
  const navigate = useNavigate()
  const { email, password, username, registoken, cfmpassword, getdata, storeRecord, lsToken, tokenvalid, Registerdata, guestlog, } = useAuthContext()

  const [ntlog, setNtlog] = useState(true)

  // toggle login and register page
  const registerPage = () => {
    return setNtlog(!ntlog)
  }

// check user is login or not
  if (lsToken) {
    if ((tokenvalid === lsToken.username)) {
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }
  }
  else {
    if (tokenvalid === "guestLogin") {
      navigate("/")
    }
  }
  // user registered
  if ((registoken === true)) {
    setTimeout(() => {
      navigate("/")
    }, 3000)
  }

  if (ntlog) {
    return (
      <div className='log-cont' >
        <h4>Please logIn to Proceed</h4>
        <form onSubmit={(e) => storeRecord(e)} >
          <input type="email" name='email' required onChange={(e) => getdata(e)} value={email}
            autoFocus autoComplete='off'
            placeholder="Enter your email"></input>
          <input type="password" required name='password' autoComplete='off' value={password}
            onChange={(e) => getdata(e)} placeholder="Enter your Password"></input>
          <button type="submit" className="btn-glob">Login</button>
        </form>
        <h5 className='link-color' onClick={() => guestlog()} >Login as Guest</h5>
        <h5 className='link-color' onClick={() => registerPage()} >Go to Register</h5>
        <ToastContainer />
      </div>
    )
  }
  else {
    return (
      <div className='log-cont' >
        <h4>Please Register to Continue</h4>
        <form onSubmit={(e) => Registerdata(e)} >
          <input type="text" name='username' required
            autoComplete='off' value={username}
            onChange={(e) => getdata(e)} placeholder="Enter your Name"></input>

          <input type="email" name='email'
            required onChange={(e) => getdata(e)} value={email}
            autoFocus autoComplete='off'
            placeholder="Enter your email"></input>

          <input type="password" name='password' required
            autoComplete='off' value={password}
            onChange={(e) => getdata(e)} placeholder="Password"></input>

          <input type="password" name='cfmpassword' required
            autoComplete='off' value={cfmpassword}
            onChange={(e) => getdata(e)} placeholder="Confirm Password"></input>

          <button type="submit" className="btn-glob">Register</button>
        </form>
        <h5 className='link-color' onClick={() => registerPage()} >Go to Login </h5>
        <ToastContainer />
      </div>
    )

  }
}

export default SecLogin
