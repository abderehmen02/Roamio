import { signUpDataType, signUpValidator } from '@/utils/validators/auth'
import { asyncWrapper } from '@/utils/clientAsyncWrapper'
import axios from 'axios'
import { returnedApiFunctionData } from '@/types/apiFunctions'
import { StatusCodes } from 'http-status-codes'
import { signUpFieldError , signUpZodErrors,  signUpZodErrorShortMessages, genderType, signUpErrorTypes } from '@/types/errors/auth'
import { Dispatch, SetStateAction } from 'react'
import { parse } from 'path'
import { EmitAction } from '@/state/actionCreators/action'
import { LoginActionTypes } from '@/types/state/auth/signIn'
import { UserInfoActionTypes } from '@/types/state/auth/userInfo'


export const submitSignUp  = asyncWrapper<[signUpDataType , Dispatch<SetStateAction<signUpFieldError[]>>   , any ] , returnedApiFunctionData<{userName : string}> >(async (data , setFieldsErrors  , emitAction )=>{
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
    }
    
   if(errors.length) {      setFieldsErrors(errors)     
    return {
        succuss : false ,
        error : signUpErrorTypes.VALIDATION_ERROR
     }
}
    const response = await axios.post("/api/signUp" , data )

    if(response.status === StatusCodes.CREATED){
    console.log("response" , response)
// emitAction(LoginActionTypes.userLoginSuccuss , response.data.token  )    
const {token  ,birthDate ,email , firstName ,  gender , lastName , userName , _id } = response.data
emitAction(LoginActionTypes.userLoginRequest )
emitAction(LoginActionTypes.userLoginSuccuss  , token )
emitAction(UserInfoActionTypes.ADD_USER_INFO , { birthDate ,  email , firstName , gender , lastName , userName , _id} )

return ({
    succuss : true ,
    data : {
        userName : response.data.userName
    }

})
   }
else return {
    error : response?.data?.error ,
    succuss : false 
}
})