import React, { HTMLAttributes } from "react";
import { P, montserratClassName } from "./typography";
import { cn } from "@/lib/tailwind";


export const PrimaryBtn : React.FC<HTMLAttributes<HTMLDivElement>>  = ({children , className , ...props })=>{
return  <button  className={cn("bg-primary  hover:bg-primaryDark text-3xl font-bold px-1 py-2 text-white  shadow-lg" , montserratClassName , className)} >{children}</button>
}

export const SecondaryBtn : React.FC<HTMLAttributes<HTMLDivElement>>  = ({children , className , ...props })=>{
    return  <button  className={cn( " bg-secondary hover:bg-secondaryDark text-3xl font-bold px-1 py-2  shadow-lg" , montserratClassName, className)} >{children}</button>
    }
    
export const TextButton : React.FC<HTMLAttributes<HTMLButtonElement>>  = ({children , className , ...props })=>{
return <button  className={cn(" bg-black hover:bg-grayDark text-white text-3xl font-bold px-1 py-2  shadow-lg" , montserratClassName  , className)}> {children}</button>
}



