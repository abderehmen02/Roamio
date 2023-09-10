import axios from "axios"

export const authorizedPostRequest = async  <returnedDataType>(  token : string, url : string , data : any ): Promise<returnedDataType | void >=>{
try {
const responce = await   axios.post(url , data ,  {
    headers : {
        "authorization" : `bareare ${token}`
    }
})
return responce.data 
}
catch(err){
    console.error(err)
}
}


export const authorizedPatchRequest = <returnedDataType>(  token : string, url : string , data : any ): Promise<returnedDataType>=>{
    return  axios.patch(url , data , {
            headers : {
                "authorization" : `bareare ${token}`
            }
        })
    }