import React, { HTMLAttributes } from "react";
import { P, montserratClassName } from "./typography";
import { cn } from "@/lib/tailwind";


export const PrimaryBtn : React.FC<HTMLAttributes<HTMLButtonElement>>  = ({children , className , ...props })=>{
return  <button  className={cn("   bg-white border-2 border-primary hover:text-white hover:bg-primary  text-lg rounded-3xl font-bold px-4 py-2  hover:outline hover:outline-2 hover:outline-primary   text-primary  shadow-md" , montserratClassName , className)} {...props} >{children}</button>
}

export const SecondaryBtn : React.FC<HTMLAttributes<HTMLDivElement>>  = ({children , className , ...props })=>{
return  <button  className={cn( " bg-secondary border-2 border-secondary hover:border-secondaryDark hover:bg-secondaryDark text-lg rounded-3xl font-bold px-4 py-2 shadow-md" , montserratClassName, className)} >{children}</button>
}
    
export const TextButton : React.FC<HTMLAttributes<HTMLButtonElement>>  = ({children , className , ...props })=>{
return <button  className={cn(" bg-black rounded-3xl hover:bg-grayDark text-white  font-bold px-6 py-3  shadow-lg" , montserratClassName  , className)}> {children}</button>
}



