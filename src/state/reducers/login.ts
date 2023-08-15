import { LoginAction , LoginState , LoginActionTypes } from '@/types/state/auth/signIn'


export const userLoginReducer =  (state : LoginState = {} , action : LoginAction )=>{
switch(action.type){
    case LoginActionTypes.userLoginSuccuss : {
        return {
    token : action.payload , 
    loading : false,
    error : null ,
    
        }
    }
    case LoginActionTypes.userLoginFail : {
        return {
            error : action.payload ,
            loading:  false , 
        }
    }
    case LoginActionTypes.userLoginRequest : {
        return {
            loading : true ,
        }
    }
    case LoginActionTypes.userLoginReset : {
        return {}
    }
    default :  return state
}
} 