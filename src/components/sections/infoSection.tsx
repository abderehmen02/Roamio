import { cn } from "@/lib/tailwind"
import { H2, H3, P } from "@/ui/typography"
import React from "react"

export type InfoSection =  {
titleClassName? : string ,
descreptionClassName? : string ,
className? : string ,
title : string ,
descreption :string
}


export type ButtonInfoSection =  {
    titleClassName? : string ,
    descreptionClassName? : string ,
    className? : string ,
    title : string ,
    descreption :string ,
    button : JSX.Element
    }
    

export const StandardInfoSection : React.FC<InfoSection>  = (infoData)=>{
    return  <div className={cn("flex w-[600px] flex-col items-start justify-center gap-4" , infoData.className )}>
        <H2 className={cn("font-semibold  " , infoData.titleClassName)} >{infoData.title}</H2>
        <P  className={cn("text-lg" , infoData.descreptionClassName)} >{infoData.descreption}</P>
    </div>
}

export const ButtonInfoSection : React.FC<ButtonInfoSection>  = (infoData)=>{
    return  <div className={cn("flex w-[600px] flex-col items-start justify-center gap-4" , infoData.className )}>
        <H2 className={cn("font-semibold  " , infoData.titleClassName)} >{infoData.title}</H2>
        <P  className={cn("text-lg" , infoData.descreptionClassName)} >{infoData.descreption}</P>
        {infoData.button}
    </div>
}
