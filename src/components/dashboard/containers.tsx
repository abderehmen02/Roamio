import { cn } from "@/lib/tailwind"
import { HTMLAttributes } from "react"

export const DashboardSection : React.FC<HTMLAttributes<HTMLDivElement>> = ({className , ...props})=>{
    return <div className={cn("  rounded-lg flex flex-col px-10 py-6 bg-white " , className )} {...props} >
    </div>
}