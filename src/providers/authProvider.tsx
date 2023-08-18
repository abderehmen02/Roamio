import React  from "react"
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
import { cookies } from 'next/headers'
import {redirect}   from 'next/navigation'


export const AuthProvider : React.FC<{children : React.ReactNode  }> =  ({children   })=>{


    const cookieStore = cookies()


    // const dispatch = useDispatch()
    // const {emitAction , dispatchAction } = bindActionCreators( ActionCreators  , dispatch )
    // const userLogin = useSelector((state : stateType)=>state.login)
    // const   localUserInfo = typeof window !== 'undefined' && JSON.parse( localStorage?.getItem(authConfig.userInfoLocalStorageName) as string ) 
    // const router = useRouter()
    // const getUser = async ()=>{
    //     dispatchAction({type : LoginActionTypes.userLoginRequest})
    //     const response =    await  axios.post('/api/getToken')
    //     console.log("response " , response.data.token)
    //     if(response.status === StatusCodes.OK){ emitAction(LoginActionTypes.userLoginSuccuss , response.data.token  )
    //     dispatchAction({type : UserInfoActionTypes.ADD_USER_INFO , payload  : localUserInfo })
    //     router.push("/dashboard")
    // }
    //     }

// const userLoginCookie = cookieStore.get(authConfig.refreshTokenCookieName)?.value
// if(userLoginCookie) redirect('/dashboard')




    return <div>
        {children}
    </div>
}