import { cn } from "@/lib/tailwind"
import { CSSProperties, HTMLAttributes, InputHTMLAttributes } from "react"
import { P, Text, montserratClassName } from "./typography"

interface IconInputProps  extends InputHTMLAttributes<HTMLInputElement> {
Icon? : JSX.Element
}

type  BtnProps =  {
action? : JSX.Element ,
label? : string| JSX.Element ,
helperText ? : string | JSX.Element , 
error? : string | JSX.Element  ,
containerStyle? : CSSProperties , 
} & InputHTMLAttributes<HTMLInputElement>


export const PrimaryInput : React.FC<BtnProps> = ({className  , action, containerStyle , label  , helperText , error , children , placeholder , ...props  })=>{
return <div style={containerStyle} className="flex flex-col w-full items-start    justify-center" >
{ label &&  <label className={cn("text-sm px-2 capitalize  " , montserratClassName)} >{label }</label> }
 <input   className={cn("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" )} placeholder={placeholder} {...props} >{children}</input>
 <div className="flex items-center  w-full justify-between" >  
 { error  ?  <P className="text-red-600 text-xs px-2" >{error}</P> : <P className=" text-xs px-2"   >{helperText || ""} </P> }
 {action && <Text className=" text-sm px-2  text-xs"  style={{fontWeight : 7000}}> {action} </Text>}
 </div>
 </div>
} 


export const IconInput : React.FC<IconInputProps> = ({className , children , placeholder ,Icon })=>{
    return <div className="flex  px-2 py-2 border-2 border-grayDark  focus-within:border-2  focus-within:border-black rounded-lg focus-within:shadow-lg">
    <div className=" inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
        {Icon}
    </div>
    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder={placeholder} aria-label="search">
         {children}
    </input>
  </div>
}

