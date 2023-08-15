import { signUpDataType, signUpValidator } from '@/utils/validators/auth'
import { asyncWrapper } from '@/utils/clientAsyncWrapper'
import axios from 'axios'
import { returnedApiFunctionData } from '@/types/apiFunctions'
import { StatusCodes } from 'http-status-codes'
import { signUpFieldError , signUpZodErrors,  signUpZodErrorShortMessages, genderType } from '@/types/errors/auth'
import { Dispatch, SetStateAction } from 'react'
import { parse } from 'path'


export const submitSignUp  = asyncWrapper<[signUpDataType , Dispatch<SetStateAction<signUpFieldError[]>> ] , returnedApiFunctionData<{userName : string}> >(async (data , setFieldsErrors)=>{
    setFieldsErrors([])
    let errors : signUpFieldError[] = []
    if(!data.userName) errors.push(signUpZodErrors.requiredUsername)
    if(!data.password) errors.push(signUpZodErrors.requiredPassword)
    if(!data.birthDate) errors.push(signUpZodErrors.requiredBirthDate)
    if(!data.firstName) errors.push(signUpZodErrors.requiredFirstname)
    if(!data.lastName) errors.push(signUpZodErrors.requiredLastname)
    if(!data.email) errors.push(signUpZodErrors.requiredEmail)
    if(!data.gender) errors.push(signUpZodErrors.invalidGender)
    const parsedResults  =     signUpValidator.safeParse(data)
    if(!parsedResults.success ){    
     JSON.parse(parsedResults.error.message).forEach((error : any ) => {
      const messageObj = signUpZodErrors[error.message as signUpZodErrorShortMessages ] || error
      errors.push(messageObj)
     });
     
    console.log("parsedrequlst"  , parsedResults.error)
    }

   if(errors.length) {      setFieldsErrors(errors)     
    return {
        succuss : false ,
        error : parsedResults.success ? "validation error" : parsedResults.error
     }
}

    const response = await axios.post("/api/signUp" , data )

    return {
        succuss : true , 
    }
    


   if(response.status === StatusCodes.CREATED)return ({
    succuss : true ,
    data : {
        userName : response.data.userName
    }

})

else return {
    error : response?.data?.error ,
    succuss : false 
}
})