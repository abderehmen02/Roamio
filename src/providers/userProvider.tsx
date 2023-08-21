"use client"
import React, { useEffect , useLayoutEffect }  from "react"
import { useRouter } from 'next/navigation'
import axios from "axios"
import { StatusCodes } from "http-status-codes"
import { useDispatch , useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import ActionCreators from "@/state/actionCreators/action"
import { LoginActionTypes } from "@/types/state/auth/signIn"
import {  UserInfo, UserInfoActionTypes, isUserInfo } from "@/types/state/auth/userInfo"
import { stateType } from "@/state/reducers"
import { authConfig } from "@/config/auth"
import { userInfo } from "os"
import { useTranslation } from "@/app/i18n/client"


export const AuthProvider : React.FC<{children : React.ReactNode  }> =  ({children   } )=>{
const {t} = useTranslation()


    const dispatch = useDispatch()
    const {dispatchAction } = bindActionCreators( ActionCreators  , dispatch )
    const userLogin = useSelector((state : stateType)=>state.login)
    const   localUserInfo = typeof window !== 'undefined' && JSON.parse( localStorage?.getItem(authConfig.userInfoLocalStorageName) as string ) 
    const userInfo = useSelector((state : stateType ) =>state.userInfo )
    const getUser = async ()=>{
        const response =    await  axios.post('/api/getTokenAndUserInfo')
        if(response.status === StatusCodes.OK){       
        const {token  ,birthDate ,email , firstName ,  gender , lastName , userName , _id , verified } = response.data
        if(!verified) {
        const response =             await axios.post("/api/sendVerifyMessage" )
        console.log("response" , response)
        }
        const userInfo : UserInfo = {birthDate , email , firstName , gender , lastName , userName , _id , verified }    
        dispatchAction({type : LoginActionTypes.userLoginSuccuss , payload : token})
        dispatchAction({type : UserInfoActionTypes.ADD_USER_INFO , payload  : localUserInfo })
        localStorage.setItem(authConfig.userInfoLocalStorageName , JSON.stringify(userInfo))
      }
        }
useEffect(()=>{
dispatchAction({type : LoginActionTypes.userLoginRequest})
getUser()
}  , [] )

if( !userLogin.token && !userLogin.error  ) return <div>{t("loading")}</div>
if(  isUserInfo(userInfo) && !userInfo.verified  )return <div>{t("auth.verifyEmailMessageSent")}</div>
    return <div>
        {children}
    </div>
}