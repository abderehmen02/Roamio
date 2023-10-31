import { signInDataType, signInValidator, signUpDataType, signUpValidator } from '@/utils/validators/auth'
import { asyncWrapper } from '@/utils/clientAsyncWrapper'
import axios, { AxiosError } from 'axios'
import { returnedApiFunctionData } from '@/types/apiFunctions'
import { StatusCodes } from 'http-status-codes'
import { signUpFieldError , signUpZodErrors,  signUpZodErrorShortMessages, genderType, signUpErrorTypes, signInFieldErrors, signInErrorShortMessages, signInFieldError, SignInFields } from '@/types/errors/auth'
import { Dispatch, SetStateAction } from 'react'
import { LoginAction, LoginActionTypes } from '@/types/state/auth/signIn'
import { UserInfo, UserInfoActionTypes } from '@/types/state/auth/userInfo'
import { authConfig } from '@/config/auth'
import { AnyAction } from 'redux'
import { AppRouterInstance, NavigateOptions } from 'next/dist/shared/lib/app-router-context'
import {  toast } from 'sonner';
import { appConfig } from '@/config'
import { getErrorMap } from 'zod'
import { getErrorMessage } from '@/utils/api/error'






export type LoginTypes = "Guest" | "Normal"



export const submitSignUp  = async (data : signUpDataType , setFieldsErrors : Dispatch<SetStateAction<signUpFieldError[]>>     , emitAction :  any , pushFn :   (href: string, options?: NavigateOptions | undefined) => void  , pushUrl : string   ) : Promise<returnedApiFunctionData<{userName : string}>> =>{
try {
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

     emitAction(LoginActionTypes.userLoginRequest)
     
    const response = await axios.post("/api/signUp" , data )

    if(response.status === StatusCodes.CREATED){
  
const {token  ,birthDate ,email , savedCities , firstName ,  gender , lastName , userName , _id , verified } = response.data
const userInfo : UserInfo  =  { birthDate , savedCities ,   email , firstName , gender , lastName , userName , verified , _id}
emitAction(LoginActionTypes.userLoginSuccuss  , token )

emitAction(UserInfoActionTypes.ADD_USER_INFO , userInfo  )
localStorage.setItem(authConfig.userInfoLocalStorageName  ,  JSON.stringify(userInfo)  )
toast.success("Sign up successfully")
pushFn(appConfig.links.home)
return ({
    succuss : true ,
    data : response.data

})
   }

else {
    
    toast.error("Something went wrong! please try again.")
    return ({
    error : response?.data?.error ,
    succuss : false 
})
}

}
catch(err){
    console.log("err"  , err)

    if(err instanceof AxiosError && err?.response?.data?.error?.message ){
        const errMessage = err?.response?.data?.error?.message
        emitAction(LoginActionTypes.userLoginFail , err.response.data.error.message || "Axios Fetching Error" )
        const errorObj = typeof errMessage === "string" ?  signUpZodErrors[errMessage as signUpZodErrorShortMessages] : null 
        if(errorObj) setFieldsErrors([errorObj])
         toast.error(errorObj?.message)
    }
    else toast.error("Some error hapened! please try again")
    return ({
        error : err , 
        succuss : false
    })
}
}




export const logout = async (dispatch : Dispatch<AnyAction> , router : AppRouterInstance  , pathToPush  = "/"   )=>{
    const response = await axios.post("/api/logout")
    if(response.status === StatusCodes.OK){
    dispatch({type : LoginActionTypes.userLoginReset})
    dispatch({type : UserInfoActionTypes.RESET_USER_INFO})
    typeof window !== "undefined" && localStorage.removeItem(authConfig.userInfoLocalStorageName) 
    console.log("pushing")
    router.push(pathToPush)
    router.refresh()
}
    else toast.error("someting went wrong! please try again")
}





export const submitSignIn = async ( data : signInDataType , setFieldsErrors : Dispatch<SetStateAction<signInFieldError[]>> | undefined ,   dispatch : Dispatch<LoginAction> , pushUrlFn : (href: string, options?: NavigateOptions | undefined) => void , pushLink = appConfig.links.home , type : LoginTypes = "Normal" )=>{
try{    
    const fieldErrors : signInFieldError[] = []
    const errors : any[]  = []
    if(!data.userName)  fieldErrors.push(signInFieldErrors.invalidUsername)
    if(!data.password) fieldErrors.push(signInFieldErrors.invalidPassword)
    const parsedData = signInValidator.safeParse(data)
    if(!parsedData.success){
        JSON.parse(parsedData.error.message).forEach((error : any ) => {
            const errorObj = signInFieldErrors[error.message as signInErrorShortMessages ] 
            if(errorObj)            fieldErrors.push(errorObj)
            else errors.push(error.message)
           });
    }
    if(fieldErrors.length && setFieldsErrors )return setFieldsErrors(fieldErrors)
    else if(errors.length) return errors.forEach((errMessage)=>{
if(typeof errMessage === "string" ) toast.error(errMessage)
else toast.error("something went wrong! please try again")
})
console.log("type" , type)
    type === "Normal" ?  dispatch({type : LoginActionTypes.userLoginRequest}) :  dispatch({type : LoginActionTypes.userGuestLoginRequest})
    const response = await axios.post("/api/signIn" , data)
    if(response.status === StatusCodes.CREATED){
    dispatch({type : LoginActionTypes.userLoginSuccuss , payload : response.data.token  })
    toast.success("Loged in succussfully")
    pushUrlFn(pushLink)
}
    else alert("someting went wrong! please try again")
}
catch(err){
    dispatch({type : LoginActionTypes.userLoginFail , payload : getErrorMessage(err)  })
    let errorMessage = signInFieldErrors[getErrorMessage(err) as signInErrorShortMessages ].message || getErrorMessage(err) 
    if(signInFieldErrors[getErrorMessage(err) as signInErrorShortMessages ]){
    setFieldsErrors ?    setFieldsErrors([signInFieldErrors[getErrorMessage(err) as signInErrorShortMessages ]]) : toast.error(signInFieldErrors[getErrorMessage(err) as signInErrorShortMessages ].message) 
    }
    toast.error(errorMessage)
}



}




