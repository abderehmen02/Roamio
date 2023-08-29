import { LoginAction , LoginState , LoginActionTypes } from '@/types/state/auth/signIn'
import { CitiesQueryAction, CitiesQueryActionTypes, CitiesQueryState } from '@/types/state/city'


export const citiesQueryReducer =  (state : CitiesQueryState = {} , action : CitiesQueryAction )=>{
switch(action.type){
    case  CitiesQueryActionTypes.EDIT_CITIES_QUERY: {
        return action.payload  
    }
    case CitiesQueryActionTypes.RESET_CITIES_QUERY: {
        return ({})
    }}} 