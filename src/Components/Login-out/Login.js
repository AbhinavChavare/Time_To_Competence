import React, { useState } from 'react'
import "./Login-out.css"
import { ToastContainer, toast, Flip} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

const Login = () => {
    const [emailText,setEmailText]=useState({
        emailValue:"",
        passwordvalue:""
    })

//  const [record,setRecord]=useState([])

const getdata=(ent)=>{
    let name=ent.target.name
    let value=ent.target.value
    console.log( name ,value)
setEmailText({...emailText,[name]:value})

}
const tokenemail=emailText.emailValue
const tokenpass=emailText.passwordvalue
const navigate=useNavigate()
const localData= JSON.parse(localStorage.getItem("Token"))

const storeRecord=(e)=>{
e.preventDefault();
localStorage.setItem("Token",JSON.stringify({email:"abc@gmail" ,pass:"aabc123"}))

 setEmailText({emailValue:"",passwordvalue:""})

 if(localData.email=== tokenemail && localData.pass===tokenpass){
  tostlogin();
  setTimeout(()=>{
    navigate("/")
  },3000)
}
else{
  tostlogout();
}
}


const tostlogin=()=>{
    toast.success(`login Successfully with Email:${emailText.emailValue}`, {
        position: "top-center",
        theme: "dark",
        transition:Flip,
        className:"toast-message ",
        });
}
const tostlogout=()=>{
    toast.success(`Login failed Please check email or password`, {
        position: "top-center",
        theme: "dark",
        transition:Flip,
        className:"toast-message ",
        });
}

  return (
    <div className='log-cont' >
      <form onSubmit={(e)=>storeRecord(e)} >
        <input type="email" name='emailValue' required onChange={(ent)=>getdata(ent)} value={emailText.emailValue}
        autoFocus autoComplete='off'
         placeholder="Enteryour email"></input>
        <input type="password" name='passwordvalue' autoComplete='off' value={emailText.passwordvalue}
        onChange={getdata} placeholder="Enter your email"></input>
        <button type="submit" className="btn-glob">Login</button>
      </form>
      <ToastContainer />
    </div>
  )

}

export default Login
