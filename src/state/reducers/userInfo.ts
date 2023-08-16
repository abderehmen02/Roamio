import { UserInfoAction, UserInfoActionTypes, UserInfoState } from '@/types/state/auth/userInfo'


export const userInfoReducer =  (state : UserInfoState = null, action : UserInfoAction )=>{
switch(action.type){
    case UserInfoActionTypes.ADD_USER_INFO : {
        return action.payload
    }
    case UserInfoActionTypes.FAIL_USER_INFO : {
        return action.payload
    }
    case UserInfoActionTypes.RESET_USER_INFO : {
        return null
    }
    default :  return state
}
} 