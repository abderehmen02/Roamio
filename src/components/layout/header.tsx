"use client"
import { LoggedHeader } from "./loggedHeader"
import { UnlogedHeader } from "./unlogedHeader"
import {cookies } from "next/headers"
import { getCookie } from "cookies-next"
import { authConfig } from "@/config/auth"


export const Header = ()=>{
    const token = getCookie(authConfig.tokenCookieName)
    const refreshToken = getCookie(authConfig.refreshTokenCookieName)
    if(token?.toString() && refreshToken?.toString() ) return <LoggedHeader/>
    else return <UnlogedHeader/>
}