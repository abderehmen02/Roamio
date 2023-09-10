import { CityDb } from "@/db/models/city"
import { UserDb } from "@/db/models/user"

export enum CitiesActionTypes {
    EDIT_CITIES  = "EDIT_CITIES",
    RESET_CITIES = "RESET_CITIES"  ,
    FAIL_CITIES = "FAIL_CITIES" ,
    LOADING_CITIES = "LOADING_CITIES" ,
    EDIT_CITY = "EDIT_CITY"
} 
 


export type CitiesState = {cities : CityDb[] , loading : boolean , error : {message : string} | null }



export type CitiesEditAction = {
    type : CitiesActionTypes.EDIT_CITIES ,
    payload : CitiesState
}

export type CityEditAction = {
    type : CitiesActionTypes.EDIT_CITY  ,
    payload: CityDb 
}

export type FailCitiesAction = {
    type : CitiesActionTypes.FAIL_CITIES ,
    payload:  {message : string}
}

export type LoadingCitiesAction = {
    type : CitiesActionTypes.LOADING_CITIES , 
}

export type CitiesResetAction = {
    type : CitiesActionTypes.RESET_CITIES  ,

}



// export function isCitiesDb(citiesState: CitiesState ): citiesState is CitiesInfo {
//     return  Boolean( (citiesState as CitiesInfo).cities._id ) ;
//   }

export type CitiesAction =  CityEditAction | CitiesEditAction | CitiesResetAction | FailCitiesAction | LoadingCitiesAction