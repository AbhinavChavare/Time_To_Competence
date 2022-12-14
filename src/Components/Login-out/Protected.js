import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuthContext } from '../Context/AuthContext'

const Protected = (props) => {
    const Comp = props.data
    const { lsToken, tokenvalid } = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!lsToken && tokenvalid !== "guestLogin") {
            navigate("/login")
        }
    },[]);


    return (
        <div>
            {Comp}
        </div>
    )
}

export default Protected
