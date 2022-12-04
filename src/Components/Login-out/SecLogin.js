import React, { useState } from 'react'
import "./Login-out.css"
// import reducer from "../Components/Reducer/AuthReducer"
import { ToastContainer, toast, Flip} from 'react-toastify';

import { useAuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router';
// import Logout from './Logout';

// import { useNavigate } from 'react-router';
// import Logout from './Logout';

const SecLogin = () => {
    const navigate=useNavigate()
const {email,password,username,cfmpassword,getdata,storeRecord,tokenvaild,Registerdata}=useAuthContext()


// const loginsuccess=()=>{
//     toast.success(`thanks for login`, {
//             position: "top-center",
//             theme: "dark",
//             transition:Flip,
//             className:"toast-message ",
//             });
// }    
  const [ntlog,setNtlog]=useState(true)
   const registerPage=()=>{
    //    alert("sadsdf")
    return  setNtlog(!ntlog)
   }
   if(tokenvaild==="Loginvalid"){
    // loginsuccess()
    setTimeout(()=>{
        
        navigate("/")
    },3000)
   }
 

if(ntlog){
  return (
    <div className='log-cont' >
    <h2>Please logIn to Proceed</h2>
    <form onSubmit={(e)=>storeRecord(e)} >
      <input type="email" name='email' required onChange={(e)=>getdata(e)} value={email}
      autoFocus autoComplete='off'
       placeholder="Enter your email"></input>
      <input type="password" name='password' autoComplete='off' value={password}
      onChange={(e)=>getdata(e)} placeholder="Enter your Password"></input>
      <button type="submit" className="btn-glob">Login</button>
    </form>
      <button type='button' onClick={()=>registerPage()} >Go to Register</button>

      <ToastContainer />
  </div>
  )
}
else{
    return(
    <div className='log-cont' >
    <h2>Please Register to Continue</h2>
   <form onSubmit={(e)=>Registerdata(e)} >
     <input type="text" name='username' 
     autoComplete='off' value={username}
     onChange={(e)=>getdata(e)} placeholder="Enter your Name"></input>

     <input type="email" name='email'
      required onChange={(e)=>getdata(e)} value={email}
     autoFocus autoComplete='off'
      placeholder="Enter your email"></input>

     <input type="password" name='password'
      autoComplete='off' value={password}
     onChange={(e)=>getdata(e)} placeholder="Password"></input>

     <input type="password" name='cfmpassword'
      autoComplete='off' value={cfmpassword}
     onChange={(e)=>getdata(e)} placeholder="Confirm Password"></input>

     <button type="submit" className="btn-glob">Register</button>
   </form>
     <button type='button' onClick={()=>registerPage()} >Go to Login</button>
  
     <ToastContainer />
 </div>
    )

}
}

export default SecLogin
