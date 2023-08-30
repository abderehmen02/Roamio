"use client"
import React from "react";
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
  
  const queryClient = new QueryClient()

export const TanstackProvider : React.FC <{children : React.ReactNode}> = ({children})=>{
    return <QueryClientProvider client={queryClient} >
        {children}
    </QueryClientProvider>
}