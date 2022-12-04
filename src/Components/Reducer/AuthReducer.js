
const AuthReducer = (state,action) => {
switch(action.type){

case "SET_DATA": 
    return{
        ...state
    }

case "SET_INPUT":
  let  {name,value}=action.payload
//   console.warn(action.payload)
    return{
        ...state ,[name]:value,
    }
 case "RESET_VALUES":
    state.email=""
    state.password=""
    state.cfmpassword=""
    state.username=""
    return{      
          ...state
        }   
    
    
}
}
export default AuthReducer
