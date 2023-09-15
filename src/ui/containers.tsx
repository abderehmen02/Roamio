import { cn } from "@/lib/tailwind"
import { HtmlHTMLAttributes } from "react"

export const PageBody : React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({className , children , ...props})=>{
    return <div className={cn("flex px-8 gap-16  py-4 " ,className)} {...props}  >
{children}
    </div>
}




export const LoggedPage : React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({className , children , ...props})=>{
    return <div className={cn("flex  flex-col gap-11 py-8 px-2 " ,className)} {...props}  >
{children}
    </div>
}