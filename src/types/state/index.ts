import {LoginAction, LoginActionTypes } from './auth/signIn'
import { UserInfoAction, UserInfoActionTypes } from './auth/userInfo'
import { CitiesQueryAction, CitiesQueryActionTypes } from './city'


export type StateActionTypes = LoginActionTypes  | UserInfoActionTypes |CitiesQueryActionTypes
export type StateAction  = LoginAction | UserInfoAction | CitiesQueryAction
