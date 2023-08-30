import { LoginAction , LoginState , LoginActionTypes } from '@/types/state/auth/signIn'
import { CitiesAction, CitiesActionTypes, CitiesState } from '@/types/state/cities'


export const citiesReducer =  (state : CitiesState = {cities : []} , action : CitiesAction )=>{
switch(action.type){
    case CitiesActionTypes.EDIT_CITIES: {
        return action.payload
    }

    case CitiesActionTypes.RESET_CITIES : {
        return ({cities : []})
    }
    default :  return state
}
} 