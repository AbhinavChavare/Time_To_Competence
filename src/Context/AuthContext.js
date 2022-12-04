import { createContext, useContext, useEffect, useReducer } from "react"

import reducer from "../Components/Reducer/AuthReducer"
import { ToastContainer, toast, Flip} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  const AuthContext=createContext()
const initialState={
    username:"",
    email:"",
    password:"",
    cfmpassword:"",
    tokenvaild:"",
}

const AuthContextProvider=( {children})=>{
   
// const data="abhinav"
    const [state,dispatch]=useReducer(reducer,initialState)

    const lsToken=JSON.parse(localStorage.getItem("Token"))

   const InvalidEmPass=()=>{
        toast.warn(`Invalid mail or password,please Register`, {
                position: "top-center",
                theme: "dark",
                transition:Flip,
                className:"toast-message ",
                });
    }    
   const alertConfirmPassword=()=>{
        toast.warn(`Please check the Password`, {
                position: "top-center",
                theme: "dark",
                transition:Flip,
                className:"toast-message ",
                });
    }    
    const loginsuccess=()=>{
        toast.success(`Thanks for login`, {
                position: "top-center",
                theme: "dark",
                transition:Flip,
                className:"toast-message ",
                });
    }    

  const getdata=(e)=>{
    // alert("hi register")
const name=e.target.name;
const value=e.target.value;
 dispatch({type:"SET_INPUT",payload:{name,value}})
//  console.log(name,value)
}  
const storeRecord=(e)=>{
    e.preventDefault()
    if( !((lsToken.email===state.email) && (lsToken.password===state.password))){
        InvalidEmPass();
      }else{
state.tokenvaild="Loginvalid"
loginsuccess()
      }
    
dispatch({type: "RESET_VALUES"})
}  

const Registerdata=(e)=>{
    e.preventDefault()
    let    email=state.email
   let password=state.password    
   let username=state.username    
   let cfmpassword=state.cfmpassword    

   if(password===cfmpassword){
       localStorage.setItem("Token",JSON.stringify({email,password,username,cfmpassword}))
       dispatch({type: "RESET_VALUES"})
   }
   else{
    alertConfirmPassword();
    // dispatch({type: "RESET_VALUES"})
   }
}

useEffect(()=>{
dispatch({type:"SET_DATA"})
},[])

    return(
        <>
        <AuthContext.Provider value={{...state,getdata,storeRecord,lsToken,Registerdata}}>
    {children}
</AuthContext.Provider>
    <ToastContainer />
</>
)
}

const useAuthContext=()=>{
  return useContext(AuthContext)
}

export {AuthContext,AuthContextProvider, useAuthContext}