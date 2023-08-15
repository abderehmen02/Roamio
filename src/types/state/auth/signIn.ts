

export enum LoginActionTypes {
    userLoginRequest  = 'USER_LOGIN_REQUEST' , 
    userLoginSuccuss = 'USER_LOGIIN_SUCCESS'    ,
    userLoginFail = 'USER_LOGIN_ERROR' ,
    userLoginReset = 'USER_LOGIN_RESET'
}


export interface LoginState {
    loading? : boolean , 
    error? : unknown , 
    token?  : string, 
}


export interface LoginRequestAction{
    type: LoginActionTypes.userLoginRequest
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



export type LoginAction = LoginFailAction | LoginRequestAction | LoginSuccssAction | LoginResetAction