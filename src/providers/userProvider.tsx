"use client"
import React, { useEffect , useLayoutEffect }  from "react"
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
import { userInfo } from "os"


export const AuthProvider : React.FC<{children : React.ReactNode  }> =  ({children   })=>{




    const dispatch = useDispatch()
    const {dispatchAction } = bindActionCreators( ActionCreators  , dispatch )
    const userLogin = useSelector((state : stateType)=>state.login)
    const   localUserInfo = typeof window !== 'undefined' && JSON.parse( localStorage?.getItem(authConfig.userInfoLocalStorageName) as string ) 
    const userInfo = useSelector((state : stateType ) =>state.userInfo )
    const getUser = async ()=>{
        const response =    await  axios.post('/api/getToken')
        if(response.status === StatusCodes.OK){       
        dispatchAction({type : LoginActionTypes.userLoginSuccuss , payload : "kldmkqlmdfsqk"})
        dispatchAction({type : UserInfoActionTypes.ADD_USER_INFO , payload  : localUserInfo })
      }
        }
useEffect(()=>{
dispatchAction({type : LoginActionTypes.userLoginRequest})
getUser()
}  , [] )

if( !userLogin.token && !userLogin.error  ) return <div>loading...</div>
    return <div>
        {children}
    </div>
}