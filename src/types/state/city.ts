import { Continent } from "@/db/models/city"
import { Category, Language, Price, Weather, YearTime } from "../prefrences"

export enum CitiesQueryActionTypes {
    EDIT_CITIES_QUERY ,
    RESET_CITIES_QUERY
} 


export const QueryTypes   = { all  : "ALL"  , any  :    "ANY"} as const 
export const QueryTypeArray = Object.values(QueryTypes)
export type QueryType = typeof QueryTypeArray[number]   

export interface CitiesQueryState {
        name?: {type : QueryType , value : string },
        country?: {type : QueryType , value : string[]},
        continent?: { type: QueryType , value : Continent[] } ,
        population?: number ,
        categories?: { type : QueryType , value : Category[] },
        price?: { type : QueryType , value :  Price[] },
        weathers?: {  type : QueryType , value : Weather[] },
        yearTimes?: { type : QueryType , value : YearTime[]  },
        languages?: { type : QueryType , value :  Language[] } ,
}



export type CityQueryEditAction = {
    type : CitiesQueryActionTypes.EDIT_CITIES_QUERY ,
    payload : CitiesQueryState
}


export type CityQueryResetAction = {
    type : CitiesQueryActionTypes.RESET_CITIES_QUERY  ,
}



export type CityQueryAction = CityQueryEditAction | CityQueryResetAction