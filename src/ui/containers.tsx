import { cn } from "@/lib/tailwind"
import React, { HtmlHTMLAttributes } from "react"

export const PageBody : React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({className , children , ...props})=>{
    return <div className={cn("flex px-8 gap-16 min-h-screen w-full  py-4 " ,className)} {...props}  >
{children}
    </div>
}




export const LoggedPage : React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({className , children , ...props})=>{
    return <div className={cn("flex  flex-col gap-11 py-8 px-2 " ,className)} {...props}  >
{children}
    </div>
}

export const Page : React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({className , children , ...props})=>{
    return <div className={cn("flex  flex-col gap-11 w-full   min-h-screen py-6 px-4" , className)} style={{...props.style, maxWidth : '1500px' }} {...props} >
{children}
    </div>
}