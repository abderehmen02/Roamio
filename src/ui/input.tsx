import { cn } from "@/lib/tailwind"
import { HTMLAttributes } from "react"

interface IconInputProps  extends HTMLAttributes<HTMLInputElement> {
Icon? : JSX.Element
}

export const PrimaryInput : React.FC<HTMLAttributes<HTMLInputElement>> = ({className, children , placeholder , ...props  })=>{
return  <input type="text"  className={cn("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" )} placeholder={placeholder} {...props} >{children}</input>
} 


export const IconInput : React.FC<IconInputProps> = ({className , children , placeholder ,Icon })=>{
    return <div className="flex  px-2 py-2 border-2 border-grayDark  focus-within:border-2  focus-within:border-black rounded-lg focus-within:shadow-xl">
    <div className=" inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
        {Icon}
    </div>
    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder={placeholder} aria-label="search">
         {children}
    </input>
  </div>
}
