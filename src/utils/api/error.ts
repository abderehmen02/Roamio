import { AxiosError } from "axios"
import { ApiError } from "next/dist/server/api-utils"

export const errorMessage = (message : string) : Object =>{
    return ({
        error  : {
            message 
        }
    })
}



export const getErrorMessage = (err : any ) : string =>{

    return err?.response?.data?.error?.message || err?.message || "some error happened"
}