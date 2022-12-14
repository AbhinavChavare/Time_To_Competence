import {
    SET_INPUT, RESET_VALUES, RESET_VALUES_REGIS, SET_GUEST_LOGIN, SET_DATA
} from "../Constants/Constants"

const AuthReducer = (state, action) => {
    switch (action.type) {

        case SET_DATA:
            return {
                ...state
            }

        case SET_INPUT:
            let { name, value } = action.payload
            return {
                ...state, [name]: value,
            }
            
        case RESET_VALUES:
            state.email = ""
            state.password = ""
            state.cfmpassword = ""
            state.username = ""
            return {
                ...state
            }

        case RESET_VALUES_REGIS:
            state.email = ""
            state.password = ""
            state.cfmpassword = ""
            state.username = ""
            return {
                ...state, registoken: true
            }

        case SET_GUEST_LOGIN:
            return {
                ...state, tokenvalid: "guestLogin", registoken: false

            }

            case "SET_LOGOUT":
                return{
                    ...state,tokenvalid:"log",
                }
    }
}
export default AuthReducer
