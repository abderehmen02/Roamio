import {combineReducers } from 'redux' ; 
import {userLoginReducer  } from './login' 
import { userInfoReducer } from './userInfo';
const reducers = combineReducers({
  login : userLoginReducer ,
  userInfo : userInfoReducer
})
export default reducers

export type stateType = ReturnType<typeof  reducers>