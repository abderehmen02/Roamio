import { CityDb } from "@/db/models/city"

export enum CitiesActionTypes {
    EDIT_CITIES  = "EDIT_CITIES",
    RESET_CITIES = "RESET_CITIES"
} 



export type CitiesState = {cities: CityDb[] }



export type CitiesEditAction = {
    type : CitiesActionTypes.EDIT_CITIES ,
    payload : CitiesState
}


export type CitiesResetAction = {
    type : CitiesActionTypes.RESET_CITIES  ,
}



export type CitiesAction = CitiesEditAction | CitiesResetAction