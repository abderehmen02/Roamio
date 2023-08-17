"use client"
import React , {useEffect} from "react"
import {cookies} from 'next/headers'
import { authConfig } from "@/config/auth"
import axios from "axios"

export const AuthProvider : React.FC<{children : React.ReactNode}> =  ({children})=>{
    const fetchToken = async ()=>{
        const response =    await  axios.post('/api/getToken')
        console.log("response" , response)
    
    }
useEffect(  ()=>{
    fetchToken()
}  , [] )
    return <div>
        {children}
    </div>
}