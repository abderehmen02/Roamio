

export enum LoginActionTypes {
    userLoginRequest  = 'USER_LOGIN_REQUEST' , 
    userLoginSuccuss = 'USER_LOGIIN_SUCCESS'    ,
    userLoginFail = 'USER_LOGIN_ERROR' ,
    userLoginReset = 'USER_LOGIN_RESET', 
    userGuestLoginRequest = 'USER_GUEST_LOGIN_REQUEST'
}


export interface LoginState {
    loading? : boolean , 
    error? : unknown , 
    token?  : string, 
    guestLoginLoading? : boolean 
}


export interface LoginRequestAction{
    type: LoginActionTypes.userLoginRequest
}

export interface LoginGuestRequest {
    type : LoginActionTypes.userGuestLoginRequest
}

export interface LoginSuccssAction{
    type  : LoginActionTypes.userLoginSuccuss , 
    payload : string , 
}

export interface LoginFailAction {
    type : LoginActionTypes.userLoginFail ,
    payload : unknown
}
export interface LoginResetAction{
    type : LoginActionTypes.userLoginReset  , 
}



export type LoginAction = LoginFailAction | LoginGuestRequest | LoginRequestAction | LoginSuccssAction | LoginResetAction