import { createContext, useContext, useEffect, useReducer} from "react"
import {
    SET_INPUT,RESET_VALUES,RESET_VALUES_REGIS,SET_GUEST_LOGIN,SET_DATA
} from "../Constants/Constants"

import reducer from "../Reducer/AuthReducer"
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext()
const initialState = {
    username: "",
    email: "",
    password: "",
    cfmpassword: "",
    tokenvalid:"log",
    registoken:false
}

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
 
    const lsToken = JSON.parse(localStorage.getItem("Token"))

    const InvalidEmPass = () => {
        toast.warn(`Invalid mail or password,please Register`, {
            position: "top-center",
            theme: "dark",
            autoClose: 2500,
            transition: Flip,
            className: "toast-message ",
        });
    }

    const alertConfirmPassword = () => {
        toast.warn(`Please check the Password`, {
            position: "top-center",
            theme: "dark",
            autoClose: 2500,
            transition: Flip,
            className: "toast-message ",
        });
    }

    const loginsuccess = () => {
        toast.success(`Thanks for login`, {
            position: "top-center",
            theme: "dark",
            autoClose: 2500,
            transition: Flip,
            className: "toast-message ",
        });
    }

    const registersuccess = (email) => {
        toast.success(`Registration done with ${email}`, {
            position: "top-center",
            theme: "dark",
            autoClose: 2500,
            transition: Flip,
            className: "toast-message ",
        });

    }

    const logoutcontext=()=>{
        dispatch({type:"SET_LOGOUT"})
    }

    const getdata = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch({ type: SET_INPUT, payload: { name, value } })
    }

    const storeRecord = (e) => {
        e.preventDefault()
        if (lsToken) {
            if (!((lsToken.email === state.email) && (lsToken.password === state.password))) {
                state.tokenvalid(lsToken.username)
                dispatch({ type: RESET_VALUES })
               
            } else {
                loginsuccess()
                dispatch({ type: RESET_VALUES })
            }
        }
        else{
            InvalidEmPass();
            dispatch({ type: RESET_VALUES })
        }
    }

    const Registerdata = (e) => {
        e.preventDefault()
        let email = state.email
        let password = state.password
        let username = state.username
        let cfmpassword = state.cfmpassword

        if (password === cfmpassword) {
            localStorage.setItem("Token", JSON.stringify({ email, password, username, cfmpassword }))
            dispatch({ type: RESET_VALUES_REGIS })
            registersuccess(email);
         
  
        }
        else {
            alertConfirmPassword();
        }
    }

    const guestlog=()=>{
        dispatch({type:SET_GUEST_LOGIN})
    }

    useEffect(() => {
        dispatch({ type: SET_DATA })
    }, [])

    return (
        <>
            <AuthContext.Provider value={{ ...state, getdata, storeRecord, lsToken, Registerdata,guestlog,logoutcontext}}>
                {children}
            </AuthContext.Provider>
            <ToastContainer />
        </>
    )
}

const useAuthContext = () => {
    return useContext(AuthContext)
}

export { AuthContext, AuthContextProvider, useAuthContext }