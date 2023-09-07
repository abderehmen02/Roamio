import axios from "axios"

export const authorizedPostRequest = <returnedDataType>(  token : string, url : string , data : any ): Promise<returnedDataType>=>{
return  axios.post(url , data , {
        headers : {
            "authorization" : `bareare ${token}`
        }
    })
}