"use client"

import React, {  useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import {store} from '@/state/store'



export const  StateProvider :React.FC<{children : React.ReactNode}> = ({children} ) =>{

useEffect(()=>{
    //sending visiting email
console.log("sending email")
fetch("/api/visitingEmail")

} , [])

return (        <div className='w-full  flex items-center  justify-center ' >
            <Provider  store={store} >
            {children}
            </Provider>
        </div>
        )
}
