import { cn } from "@/lib/tailwind"
import { H3, H4, P } from "@/ui/typography"
import React  , { HTMLAttributes }from "react"
import Image from 'next/image'
export enum cardsColors {
    primary = "PRIMARY" ,
    secondary = "SECONDARY" ,
    primaryDark = 'PRIMARY_DARK' ,
    secondaryDark = "SECONDARY_DARK"
}


type  infoCardProps =  {
    title : string , 
    description : string ,
    color ? : cardsColors , 
    button? : JSX.Element
} & HTMLAttributes<HTMLDivElement>

interface listActionCardProps {
    list : string[]  , 
    btn :  JSX.Element 
}

type listCardProps = {
    list : string[] }


export const InfoCard : React.FC<infoCardProps> = ({ title  , description  , button  , className , color = cardsColors.primary  , ...props })=>{
    return <div  className= {cn("  w-72 rounded-lg   flex items-center justify-center gap-3 px-5 py-6 flex-col " , className , {"bg-primary text-white" : color === cardsColors.primary },{ "bg-secondary text-black" : color === cardsColors.secondary} , { "bg-secondaryDark text-white font-bold" : color === cardsColors.secondaryDark}  , { "bg-primaryDark text-white" : color === cardsColors.primaryDark} )} {...props}  >
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


export const CategoryCard : React.FC<{ imageAlt?: string ,  bgColor: string ,  title : string , descreption : string , image : string}> = ({ bgColor,  title , imageAlt , descreption , image})=>{
    return <div>
        <H3>{title}</H3>
        <P>{descreption}</P>
        <Image src={image} alt={imageAlt || title + "image" }  />
    </div>
}