"use client"

import React, {  useState } from 'react'
import { Provider } from 'react-redux'
import {store} from '@/state/store'



export const  StateProvider :React.FC<{children : React.ReactNode}> = ({children} ) =>{
    return (        <div>
            <Provider store={store} >
            {children}
            </Provider>
        </div>
        )
}
