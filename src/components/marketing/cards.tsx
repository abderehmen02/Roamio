import { H3, H4, P } from "@/ui/typography"
import React from "react"

interface infoCardProps {
    title : string , 
    description : string ,
    button? : JSX.Element
}

interface listActionCardProps {
    list : string[]  , 
    btn :  JSX.Element 
}

type listCardProps = {
    list : string[] }


export const InfoCard : React.FC<infoCardProps> = ({ title , description  , button  })=>{
    return <div className="bg-primary text-white  w-72 rounded-lg   flex items-center justify-center gap-3 px-5 py-6 flex-col " >
<H3 className="text-center" >{title}</H3>
<P className="text-center text-sm" >{description}</P>
{button}
    </div>
}


export const ListCard : React.FC<listCardProps> = ( {list})=>{
    return <div className="bg-secondary  text-white  w-fit rounded-lg   flex items-center justify-center gap-3 px-16 py-6 flex-col " >
<ul className="list-disc text-primary gap-3" >
{ list.map(item => <li><H3>{item}</H3></li> )
}
</ul>
    </div>
}

export const ListActionCard : React.FC<listActionCardProps> = ({btn , list}) =>{
    return <div className="w-full bg-white px-16 py-7 flex items-center justify-center flex-col gap-9 rounded-xl border-2 border-black text-black" >
<ul className="list-disc gap-4 flex flex-col" >
{
 list.map(item=><li><H4>{item}</H4></li>)
}
</ul>
<div>{btn}</div>
    </div>
}