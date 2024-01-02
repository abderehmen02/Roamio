import { AboutFeatureInfo } from "@/config/about"
import { cn } from "@/lib/tailwind"
import React, { HTMLAttributes } from "react"

export type AboutCardProps = AboutFeatureInfo &  HTMLAttributes<HTMLDivElement> 

export const AboutCard : React.FC<AboutCardProps> = ({title , descreption , icon, ...props})=>{
    return <div className={cn( "bg-whiteSmoke w-full px-10 py-3 flex items-center justify-between" , props.className )} >
<div className="flex flex-col items-start justify-center gap-6" >

</div>
    </div>
}