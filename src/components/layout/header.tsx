import { stateType } from "@/state/reducers"
import { useSelector } from "react-redux"
import { LoggedHeader } from "./loggedHeader"
import { UnlogedHeader } from "./unlogedHeader"
import {cookies } from "next/headers"
import { authConfig } from "@/config/auth"
export const Header = ()=>{
    const token = cookies().get(authConfig.tokenCookieName)
    const refreshToken = cookies().get(authConfig.refreshTokenCookieName)
    if(token?.value && refreshToken?.value ) return <LoggedHeader/>
    else return <UnlogedHeader/>
}