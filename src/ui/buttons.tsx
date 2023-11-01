import React, { ButtonHTMLAttributes, HTMLAttributes, forwardRef, lazy } from "react";
import { P, montserratClassName } from "./typography";
import { cn } from "@/lib/tailwind";

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
return  <button disabled={props.disabled || loading} className={cn("h-fit text-white  flex gap-3 items-center justify-center bg-primary border-2 border-primary hover:text-white hover:bg-primaryDark         hoer:text-primary  shadow-md"  , {"text-lg rounded-3xl font-bold px-4 py-2" : size === ButtonsSizes.large  , "text-base rounded-2xl font-semibold px-2 py-1" : size === ButtonsSizes.medium , "rounded-lg text-base font-normal py-1 px-2" : size === ButtonsSizes.small , "bg-gray-400 text-white hover:bg-gray-400 hover:text-white " :loading }   , montserratClassName , className)} {...props} >{children} <span className={cn("loader "  , {"w-[20px] h-[20px]" : size === ButtonsSizes.large , "w-[15px] h-[15px]": size === ButtonsSizes.medium || size === ButtonsSizes.small ,  "inline-block" : loading , "hidden": !loading })}></span>  </button>
}

export const SecondaryBtn : React.FC<UiButtonProps>  = ({children  , loading, className , size = ButtonsSizes.large , ...props })=>{
return  <button disabled={props.disabled || loading}   className={cn( " h-fit bg-secondary flex gap-3 items-center justify-center  hover:bg-orange-500  border-2 border-secondary hover:border-orange-500   shadow-md" ,{"text-lg rounded-3xl font-bold px-4 py-2"  :  size === ButtonsSizes.large ,   "text-base rounded-2xl font-semibold px-2 py-1" : size === ButtonsSizes.medium ,"text-base rounded-lg  font-normal py-1 px-2" : size === ButtonsSizes.small  } , montserratClassName, className)}  {...props} >{children} <span className={cn("loader" , {  "w-[20px] h-[20px]" : size === ButtonsSizes.large , "w-[15px] h-[15px]": size === ButtonsSizes.medium || size === ButtonsSizes.small ,  "inline-block" : loading , "hidden": !loading })}></span></button>
}

const TextButton   = forwardRef< HTMLButtonElement ,  UiButtonProps>(({children , size = ButtonsSizes.large  , className ,  ...props} , ref)=>{
    return <button ref={ref} className={cn(" bg-gray-800  hover:bg-black text-white  font-bold "  ,{"text-lg rounded-3xl font-bold px-4 py-2"  :  size === ButtonsSizes.large ,   "text-base rounded-2xl font-semibold px-2 py-1" : size === ButtonsSizes.medium  , "text-base rounded-lg  font-normal py-1 px-2" : size === ButtonsSizes.small  }  , montserratClassName  , className)} {...props} > {children}</button>
}) 

TextButton.displayName = "TextButton"

export {TextButton}
