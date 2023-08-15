import {combineReducers } from 'redux' ; 
import {userLoginReducer  } from './login' 
const reducers = combineReducers({
  login : userLoginReducer ,
})
export default reducers

export type stateType = ReturnType<typeof  reducers>