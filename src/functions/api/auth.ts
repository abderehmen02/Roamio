import { signUpDataType } from '@/utils/validators/auth'
import { asyncWrapper } from '@/utils/clientAsyncWrapper'
import axios from 'axios'
import { returnedApiFunctionData } from '@/types/apiFunctions'
import { StatusCodes } from 'http-status-codes'

export const submitSignUp  = asyncWrapper<[signUpDataType] , returnedApiFunctionData<{userName : string}> >(async (data)=>{
    console.log("data"  , data)
//     const response = await axios.post("/api/signUp" , data )
//     console.log("response"  , response)
//    if(response.status === StatusCodes.CREATED)return ({
//     succuss : true ,
//     data : {
//         userName : response.data.userName
//     }

// })

// else return {
//     error : response?.data?.error ,
//     succuss : false 
// }
return {
    succuss : true , 
}
})