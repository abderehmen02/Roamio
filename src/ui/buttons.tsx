import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { P, montserratClassName } from "./typography";
import { cn } from "@/lib/tailwind";

export enum ButtonsSizes {
    small = "SMALL" ,
    medium = "MEDIUM"  ,
    large = "LARGE" 
}
export type UiButtonProps  = {
size? : string 
} & ButtonHTMLAttributes<HTMLButtonElement>

export const PrimaryBtn : React.FC<UiButtonProps> = ({children , className , size = ButtonsSizes.large , ...props })=>{
return  <button  className={cn("   bg-white border-2 border-primary hover:text-white hover:bg-primary    hover:outline hover:outline-2 hover:outline-primary   text-primary  shadow-md"  , {"text-lg rounded-3xl font-bold px-4 py-2" : size === ButtonsSizes.large  , "text-base rounded-2xl font-semibold px-2 py-1" : size === ButtonsSizes.medium }   , montserratClassName , className)} {...props} >{children}</button>
}

export const SecondaryBtn : React.FC<UiButtonProps>  = ({children , className , size = ButtonsSizes.large , ...props })=>{
return  <button  className={cn( " bg-secondary border-2 border-secondary hover:border-secondaryDark hover:bg-secondaryDark shadow-md" ,{"text-lg rounded-3xl font-bold px-4 py-2"  :  size === ButtonsSizes.large ,   "text-base rounded-2xl font-semibold px-2 py-1" : size === ButtonsSizes.medium } , montserratClassName, className)} >{children}</button>
}
    
export const TextButton : React.FC<UiButtonProps>  = ({children , size = ButtonsSizes.large , className , ...props })=>{
return <button  className={cn(" bg-black  hover:bg-grayDark text-white  font-bold "  ,{"text-lg rounded-3xl font-bold px-4 py-2"  :  size === ButtonsSizes.large ,   "text-base rounded-2xl font-semibold px-2 py-1" : size === ButtonsSizes.medium }  , montserratClassName  , className)}> {children}</button>
}



