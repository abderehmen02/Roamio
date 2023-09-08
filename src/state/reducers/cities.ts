import { LoginAction , LoginState , LoginActionTypes } from '@/types/state/auth/signIn'
import { CitiesAction, CitiesActionTypes, CitiesState } from '@/types/state/cities'

const initialCities : CitiesState  = {cities : [] , loading : false , error : null} 
export const citiesReducer =  (state : CitiesState = initialCities , action : CitiesAction )=>{
switch(action.type){
    case CitiesActionTypes.EDIT_CITIES: {
        return action.payload
    }

    case CitiesActionTypes.RESET_CITIES : {
        return initialCities
    } 
    case CitiesActionTypes.FAIL_CITIES : {
        return {...state , error : action.payload }
    }
    case CitiesActionTypes.LOADING_CITIES : {
        return { ...state ,  loading : true  }
    }
    default :  return state
}
} 