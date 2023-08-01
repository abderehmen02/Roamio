import { cn } from "@/lib/tailwind"
import { HTMLAttributes } from "react"

interface IconInputProps  extends HTMLAttributes<HTMLInputElement> {
Icon? : JSX.Element
}

export const PrimaryInput : React.FC<HTMLAttributes<HTMLInputElement>> = ({className, children , placeholder , ...props  })=>{
return  <input type="text"  className={cn("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" )} placeholder={placeholder} {...props} >{children}</input>
} 


export const IconInput : React.FC<IconInputProps> = ({className , children , placeholder ,Icon })=>{
    return <div className="relative flex mb-6">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
        {Icon}
    </div>
    <input   className={cn("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" , className)}  placeholder={placeholder}>
        {children}
    </input>
  </div>
}