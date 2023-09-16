import { Categories } from '@/types/prefrences'
import { LoginAction , LoginState , LoginActionTypes } from '@/types/state/auth/signIn'
import { CitiesQueryAction, CitiesQueryActionTypes, CitiesQueryState, QueryTypes } from '@/types/state/citiesQuery'

const initialQueryCitiesState : CitiesQueryState = {
    page: 1  ,
    categories : {
        type : QueryTypes.any , 
        value : [Categories.MostVisited]
    } , 
    continent : {
        type : QueryTypes.any , 
        value : []
    } ,
     country : {
        type : QueryTypes.any , 
        value : []
     } , 
     languages : {
        type :QueryTypes.any  , 
        value : []
     }  , 
     name : undefined  , 
     population : undefined ,
     price : {
        type : QueryTypes.any , 
        value : [] 
     } ,
     weathers : {
        type : QueryTypes.any   ,
        value : []
     } , 
     yearTimes : {
        type : QueryTypes.any , 
        value : []
     } 
}
export const citiesQueryReducer =  (state : CitiesQueryState = initialQueryCitiesState , action : CitiesQueryAction )=>{
switch(action.type){
    case  CitiesQueryActionTypes.EDIT_CITIES_QUERY: {
        return action.payload  
    }
    case CitiesQueryActionTypes.RESET_CITIES_QUERY: {
        return initialQueryCitiesState
    }
    default : return state


}} 