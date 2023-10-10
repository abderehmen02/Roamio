import { cn } from "@/lib/tailwind"
import { H2, H3, H4, P } from "@/ui/typography"
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

interface listActionCardProps extends HTMLAttributes<HTMLDivElement> {
    list : string[]  , 
    btn :  JSX.Element 
}  

type listCardProps = {
    list : string[] }& HTMLAttributes<HTMLDivElement>


export const InfoCard : React.FC<infoCardProps> = ({ title  , description  , button  , className , color = cardsColors.primary  , ...props })=>{
    return <div  className= {cn("  w-72 rounded-lg   flex items-center justify-center gap-3 px-5 py-6 flex-col " , className , {"bg-primary text-white" : color === cardsColors.primary },{ "bg-secondary text-black" : color === cardsColors.secondary} , { "bg-secondaryDark text-white font-bold" : color === cardsColors.secondaryDark}  , { "bg-primaryDark text-white" : color === cardsColors.primaryDark} )} {...props}  >
<H3 className="text-center" >{title}</H3>
<P className="text-center text-sm" >{description}</P>
{button}
    </div>
}


export const ListCard : React.FC<listCardProps> = ( {list , ...props })=>{
    return <div className={cn("bg-secondary  text-white  w-fit rounded-lg   flex items-center justify-center gap-3 px-16 py-6 flex-col " , props.className   )}  >
<ul className="list-disc text-primary gap-3" >
{ list.map(item => <li><H3>{item}</H3></li> )
}
</ul>
    </div>
}

export const ListActionCard : React.FC<listActionCardProps> = ({btn , list , className , ...props}) =>{
    return <div className={cn("w-full bg-white px-16 py-7 flex items-center justify-center flex-col gap-9 rounded-xl border-2 border-black text-black"  , className )} {...props} >
<ul className="list-disc gap-4 flex flex-col" >
{
 list.map(item=><li><H4>{item}</H4></li>)
}
</ul>
<div>{btn}</div>
    </div>
}


export const CategoryCard : React.FC<{   className? : string ,   title : string , descreption : string , images : string[]}> = ({ className,  title , descreption , images})=>{
    let currImage = images[0]
    return <div  className={cn( " rounded-xl m-4 w-fit   flex justify-between flex-col " , className)}  >
        <div style={{ height : '270px',  width : '350px'}} className="px-4  flex flex-col gap-4 my-6 " >
        <H2>{title}</H2>
        <P  className="w-full box-border break-words" >{descreption}</P> 
        </div>
        <img   src={currImage} className="rounded-b-xl"  style={{width : '350px' , height : '200px'}}   />
    </div>
}