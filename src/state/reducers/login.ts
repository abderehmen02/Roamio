import { LoginAction , LoginState , LoginActionTypes } from '@/types/state/auth/signIn'


export const userLoginReducer =  (state : LoginState = {} , action : LoginAction )=>{
switch(action.type){
    case LoginActionTypes.userLoginSuccuss : {
    console.log("succuss user")
        return {
    token : action.payload , 
    loading : false,
    error : null ,
    
        }
    }
    case LoginActionTypes.userLoginFail : {
        console.log("failing")
        return {
            error : action.payload ,
            loading:  false , 
        }
    }
    case LoginActionTypes.userLoginRequest : {
        console.log("requesting")
        return {
            token : undefined ,
            error : null , 
            loading : true ,
        }
    }
    case LoginActionTypes.userLoginReset : {
        return {}
    }
    default :  return state
}
} 