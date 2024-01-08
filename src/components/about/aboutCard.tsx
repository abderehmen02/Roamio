import { AboutFeatureInfo } from "@/config/about"
import { cn } from "@/lib/tailwind"
import { H2, H3, P } from "@/ui/typography"
import React, { HTMLAttributes } from "react"

export type AboutCardProps = AboutFeatureInfo &  HTMLAttributes<HTMLDivElement> 

export const AboutCard : React.FC<AboutCardProps> = ({title , descreption , Icon  , ...props})=>{
    return <div className={cn( "bg-white w-full p-10 flex flex-col-reverse laptop:flex-row items-center justify-between rounded-xl gap-24" , props.className )} >
<div className="flex flex-col items-start justify-center gap-6" style={{maxWidth : "700px"}} >
<H2 className="font-semibold" >{title}</H2>
<P>{descreption}</P>
</div>
<div className="p-6 rounded-2xl bg-whiteSmoke" >
{Icon}
</div>
    </div>
}