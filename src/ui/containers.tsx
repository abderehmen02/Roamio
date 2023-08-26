import { cn } from "@/lib/tailwind"
import { HtmlHTMLAttributes } from "react"

export const Page : React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({className , children , ...props})=>{
    return <div className={cn("flex px-8  py-4 " ,className)} {...props}  >
{children}
    </div>
}