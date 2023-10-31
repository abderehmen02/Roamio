import { LoginAction , LoginState , LoginActionTypes } from '@/types/state/auth/signIn'


export const userLoginReducer =  (state : LoginState = {} , action : LoginAction )=>{
switch(action.type){
    case LoginActionTypes.userLoginSuccuss : {
        return {
    token : action.payload , 
    loading : false,
    error : null ,
    guestLoginLoading : false
        }
    }
    case LoginActionTypes.userLoginFail : {
        return {
            error : action.payload ,
            loading:  false , 
            guestLoginLoading : false
        }
    }
    case LoginActionTypes.userGuestLoginRequest : {
        return ({
            token :undefined ,
            error : null ,
            loading:  false ,
            guestLoginLoading : true
        })
    }
    case LoginActionTypes.userLoginRequest : {
  
        return         {   
        token :undefined ,
        error : null ,
        loading:  true ,
        guestLoginLoading : false
        }
    }
    case LoginActionTypes.userLoginReset : {
        return {}
    }
    default :  return state
}
} 