import {LoginAction, LoginActionTypes } from './auth/signIn'
import { UserInfoAction, UserInfoActionTypes } from './auth/userInfo'


export type StateActionTypes = LoginActionTypes  | UserInfoActionTypes
export type StateAction  = LoginAction | UserInfoAction
