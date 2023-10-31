"use client"

import React, {  useState } from 'react'
import { Provider } from 'react-redux'
import {store} from '@/state/store'



export const  StateProvider :React.FC<{children : React.ReactNode}> = ({children} ) =>{
    return (        <div className='w-full  flex items-center  justify-center ' >
            <Provider  store={store} >
            {children}
            </Provider>
        </div>
        )
}
