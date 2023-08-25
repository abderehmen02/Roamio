"use client"
import React, { useEffect , useLayoutEffect, useState }  from "react"
import axios from "axios"
import { StatusCodes } from "http-status-codes"
import { useDispatch , useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import ActionCreators from "@/state/actionCreators/action"
import { LoginActionTypes } from "@/types/state/auth/signIn"
import {  UserInfo, UserInfoActionTypes, isGoogleUser, isUserInfo } from "@/types/state/auth/userInfo"
import { stateType } from "@/state/reducers"
import { authConfig } from "@/config/auth"
import { userInfo } from "os"
import { useTranslation } from "@/app/i18n/client"
import { GoogleUserDb } from "@/db/models/googleUser"
import { AuthApiErrors } from "@/types/errors/auth"
import { useRouter } from 'next/navigation'
import { logout } from "@/functions/api/auth"
import { ExpiredSessionDialog } from "@/app/[lang]/(logged)/_components/expiredSession"

export const AuthProvider : React.FC<{children : React.ReactNode  }> =  ({children   } )=>{
const {t} = useTranslation()
const [SessionDialig, setSessionDialig] = useState<boolean>(false)

    const dispatch = useDispatch()
    const {dispatchAction } = bindActionCreators( ActionCreators  , dispatch )
    const userLogin = useSelector((state : stateType)=>state.login)
    const   localUserInfo = typeof window !== 'undefined' && JSON.parse( localStorage?.getItem(authConfig.userInfoLocalStorageName) as string ) 
    const userInfo = useSelector((state : stateType ) =>state.userInfo )
    const router = useRouter()
// getting the user 

    const getUser = async ()=>{
try {        const response =    await  axios.post('/api/getTokenAndUserInfo')
        let userInfo : UserInfo | GoogleUserDb ; 
        let token : string; 

        if(response.status === StatusCodes.OK){
           token = response.data.token
// getting the user info if the user is signed in by google
        if(response.data.googleUser){
            let   {_id , email , googleUser  , name , picture , given_name , lastName} = response.data
            userInfo = {_id , email , googleUser , name , picture , given_name , lastName}
        }

// getting the user info if the user is signed in ussing roamio
        else {
           let   {birthDate  , email   , firstName , gender , lastName , userName , _id , verified }  = response.data
            if(!verified) {
                const response =             await axios.post("/api/sendVerifyMessage" )
                }
            userInfo  =        {birthDate , email , firstName , gender , lastName , userName , _id , verified             }        }
           
        dispatchAction({type : LoginActionTypes.userLoginSuccuss , payload : token})
        localStorage.setItem(authConfig.userInfoLocalStorageName , JSON.stringify(userInfo))
        dispatchAction({type : UserInfoActionTypes.ADD_USER_INFO , payload  : userInfo })
      } }
      catch (err : any )  {
        if(err?.response?.data?.error?.message === AuthApiErrors.expiredJWT ) setSessionDialig(true)
        else   logout(dispatch , router.push)
      }
        }






useEffect(()=>{
dispatchAction({type : LoginActionTypes.userLoginRequest})
getUser()
}  , [] )

if( !userLogin.token && !userLogin.error  ) return <div>{t("loading")}</div>
if(  isUserInfo(userInfo) && !isGoogleUser(userInfo)  && !userInfo.verified  )return <div>{t("auth.verifyEmailMessageSent")}</div>
    return <div>
        <ExpiredSessionDialog open={SessionDialig} setOpen={setSessionDialig} />
        {children}
    </div>
}