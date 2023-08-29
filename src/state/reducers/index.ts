import {combineReducers } from 'redux' ; 
import {userLoginReducer  } from './login' 
import { userInfoReducer } from './userInfo';
import { citiesQueryReducer } from './city';
const reducers = combineReducers({
  login : userLoginReducer ,
  userInfo : userInfoReducer ,
  citiesQuery :citiesQueryReducer
})
export default reducers

export type stateType = ReturnType<typeof  reducers>