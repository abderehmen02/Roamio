import {combineReducers } from 'redux' ; 
import {userLoginReducer  } from './login' 
import { userInfoReducer } from './userInfo';
import { citiesQueryReducer } from './queryCities';
import { citiesReducer } from './cities';
const reducers = combineReducers({
  login : userLoginReducer ,
  userInfo : userInfoReducer ,
  citiesQuery :citiesQueryReducer , 
  cities : citiesReducer
})
export default reducers

export type stateType = ReturnType<typeof  reducers>