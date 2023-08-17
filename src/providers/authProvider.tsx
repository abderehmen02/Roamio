"use client"
import React , {useEffect, useReducer} from "react"
import { useRouter } from 'next/navigation'
import axios from "axios"
import { StatusCodes } from "http-status-codes"
import { useDispatch , useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import ActionCreators from "@/state/actionCreators/action"
import { LoginActionTypes } from "@/types/state/auth/signIn"
import {  UserInfoActionTypes } from "@/types/state/auth/userInfo"
import { stateType } from "@/state/reducers"
import { authConfig } from "@/config/auth"



function getCookie(name : string) {
    const value = `; ${document.cookie}`;
    console.log("cookies" , value)
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return    parts.pop()?.split(';').shift();
  }
export const AuthProvider : React.FC<{children : React.ReactNode}> =  ({children})=>{
    const dispatch = useDispatch()
    const {emitAction , dispatchAction } = bindActionCreators( ActionCreators  , dispatch )
    const userLogin = useSelector((state : stateType)=>state.login)
    const   localUserInfo = JSON.parse( localStorage.getItem(authConfig.userInfoLocalStorageName) as string ) 
    const router = useRouter()
    const getUser = async ()=>{
        dispatchAction({type : LoginActionTypes.userLoginRequest})
        const response =    await  axios.post('/api/getToken')
        console.log("response " , response.data.token)
        if(response.status === StatusCodes.OK){ emitAction(LoginActionTypes.userLoginSuccuss , response.data.token  )
        dispatchAction({type : UserInfoActionTypes.ADD_USER_INFO , payload  : localUserInfo })
    }
        }


    
useEffect(  ()=>{
    console.log("localuserinfo" , localUserInfo)
   localUserInfo &&  getUser()
}  , [] )

useEffect(()=>{
    console.log("effect is running" , userLogin.token)
    if(userLogin.token){ console.log("pushing") ; router.push("/dashboard") }
    console.log("boolean" , userLogin.loading || ( localUserInfo && !userLogin.token ))
} , [userLogin?.token])




if(userLogin.loading || ( localUserInfo && !userLogin.token ) ) return <div>loading...</div>
    return <div>
        {children}
    </div>
}