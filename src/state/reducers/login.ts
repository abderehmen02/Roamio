import { userLoginAction , userLoginStateType , userLoginActionsType } from '@/types/state/auth/signIn'


export const userLoginReducer =  (state : userLoginStateType = {} , action : userLoginAction )=>{
switch(action.type){
    case userLoginActionsType.userLoginSuccuss : {
        return {
    token : action.token , 
    loading : false,
    error : null ,
    
        }
    }
    case userLoginActionsType.userLoginFail : {
        return {
            error : action.error ,
            loading:  false , 
        }
    }
    case userLoginActionsType.userLoginRequest : {
        return {
            loading : true ,
        }
    }
    case userLoginActionsType.userLoginReset : {
        return {}
    }
    default :  return state
}
} 