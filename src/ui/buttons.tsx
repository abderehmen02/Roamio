import React, { ButtonHTMLAttributes, HTMLAttributes, lazy } from "react";
import { P, montserratClassName } from "./typography";
import { cn } from "@/lib/tailwind";
import { CircularProgress } from "@mui/material";

export enum ButtonsSizes {
    small = "SMALL" ,
    medium = "MEDIUM"  ,
    large = "LARGE" 
}
export type UiButtonProps  = {
loading? : boolean ,
size? : string 
} & ButtonHTMLAttributes<HTMLButtonElement>
export const PrimaryBtn : React.FC<UiButtonProps> = ({children , loading = false , className , size = ButtonsSizes.large , ...props })=>{
return  <button disabled={props.disabled || loading} className={cn("h-fit text-white   bg-primary border-2 border-primary hover:text-white hover:bg-primaryDark         hoer:text-primary  shadow-md"  , {"text-lg rounded-3xl font-bold px-4 py-2" : size === ButtonsSizes.large  , "text-base rounded-2xl font-semibold px-2 py-1" : size === ButtonsSizes.medium , "rounded-lg text-base font-normal py-1 px-2" : size === ButtonsSizes.small , "bg-gray-400 text-white hover:bg-gray-400 hover:text-white " :loading }   , montserratClassName , className)} {...props} >{children} { loading &&  <CircularProgress  style={{width: '25px' , height : '25px' }} className="opacity-60 " /> } </button>
}

export const SecondaryBtn : React.FC<UiButtonProps>  = ({children  , loading, className , size = ButtonsSizes.large , ...props })=>{
return  <button disabled={props.disabled || loading}   className={cn( " h-fit bg-secondary  hover:bg-orange-500  border-2 border-secondary hover:border-orange-500   shadow-md" ,{"text-lg rounded-3xl font-bold px-4 py-2"  :  size === ButtonsSizes.large ,   "text-base rounded-2xl font-semibold px-2 py-1" : size === ButtonsSizes.medium ,"text-base rounded-lg  font-normal py-1 px-2" : size === ButtonsSizes.small , "bg-green-400" : loading } , montserratClassName, className)}  {...props} >{children}</button>
}

" h-fit bg-secondary border-2 border-secondary hover:border-secondaryDark hover:bg-secondaryDark shadow-md"
export const TextButton : React.FC<UiButtonProps>  = ({children , size = ButtonsSizes.large , className , ...props })=>{
return <button  className={cn(" bg-gray-800  hover:bg-black text-white  font-bold "  ,{"text-lg rounded-3xl font-bold px-4 py-2"  :  size === ButtonsSizes.large ,   "text-base rounded-2xl font-semibold px-2 py-1" : size === ButtonsSizes.medium  , "text-base rounded-lg  font-normal py-1 px-2" : size === ButtonsSizes.small  }  , montserratClassName  , className)} {...props} > {children}</button>
}