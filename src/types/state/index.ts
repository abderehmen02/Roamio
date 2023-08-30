import {LoginAction, LoginActionTypes } from './auth/signIn'
import { UserInfoAction, UserInfoActionTypes } from './auth/userInfo'
import { CitiesQueryAction, CitiesQueryActionTypes } from './citiesQuery'


export type StateActionTypes = LoginActionTypes  | UserInfoActionTypes |CitiesQueryActionTypes
export type StateAction  = LoginAction | UserInfoAction | CitiesQueryAction
