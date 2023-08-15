export interface userLoginStateType {
    loading? : boolean , 
    error? : unknown , 
    token?  : string, 
}

export enum userLoginActionsType {
    userLoginRequest  = 'USER_LOGIN_REQUEST' , 
    userLoginSuccuss = 'USER_LOGIIN_SUCCESS'    ,
    userLoginFail = 'USER_LOGIN_ERROR' ,
    userLoginReset = 'USER_LOGIN_RESET'
}

export interface loginRequestAction{
    type: userLoginActionsType.userLoginRequest
}

export interface loginSuccssAction{
    type  : userLoginActionsType.userLoginSuccuss , 
    token : string , 
}

export interface loginFailAction {
    type : userLoginActionsType.userLoginFail ,
    error : unknown
}
export interface loginResetAction{
    type : userLoginActionsType.userLoginReset  , 
}

export type userLoginActionType = loginFailAction | loginRequestAction | loginSuccssAction | loginResetAction