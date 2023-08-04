import React, { HTMLAttributes } from "react";
import { P, montserratClassName } from "./typography";
import { cn } from "@/lib/tailwind";


export const PrimaryBtn : React.FC<HTMLAttributes<HTMLDivElement>>  = ({children , className , ...props })=>{
return  <button  className={cn("bg-primary  hover:bg-white  hover:text-primary  text-xl rounded-3xl font-bold px-6 py-3  hover:outline hover:outline-2 hover:outline-primary   text-white  shadow-md" , montserratClassName , className)} >{children}</button>
}

export const SecondaryBtn : React.FC<HTMLAttributes<HTMLDivElement>>  = ({children , className , ...props })=>{
return  <button  className={cn( " bg-secondary hover:bg-secondaryDark text-xl rounded-3xl font-bold px-6 py-3 shadow-md" , montserratClassName, className)} >{children}</button>
}
    
export const TextButton : React.FC<HTMLAttributes<HTMLButtonElement>>  = ({children , className , ...props })=>{
return <button  className={cn(" bg-black rounded-3xl hover:bg-grayDark text-white  font-bold px-6 py-3  shadow-lg" , montserratClassName  , className)}> {children}</button>
}



