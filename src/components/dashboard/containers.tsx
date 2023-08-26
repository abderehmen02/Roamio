import { cn } from "@/lib/tailwind"
import { HTMLAttributes } from "react"

export const DashboardSection : React.FC<HTMLAttributes<HTMLDivElement>> = ({className , ...props})=>{
    return <div  className={cn(" clearBorder rounded-lg flex flex-col px-6 py-2 bg-white " , className )} {...props} >
    </div>
}