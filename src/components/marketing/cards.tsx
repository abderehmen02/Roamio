import { cn } from "@/lib/tailwind"
import { H2, H3, H4, P } from "@/ui/typography"
import React  , { HTMLAttributes, lazy }from "react"
import Image from 'next/image'
import { LandmarkData } from "@/constants/blog/caurser"
import Link from "next/link"
import { appConfig } from "@/config"
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




export type FeaturesSectionCardProps = {
    iconSrc : JSX.Element ,
    title : string ,
    descreption : string ,
    className?: string
}


export type ValuedPostsCardProps = {
    imgSrc : string ,
    title : string ,
    descreption : string ,
    titleClassName? : string ,
    descreptionClassName? : string ,
    className? : string 
} 


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
{ list.map(item => <li key={item} ><H3>{item}</H3></li> )
}
</ul>
    </div>
}

export const ListActionCard : React.FC<listActionCardProps> = ({btn , list , className , ...props}) =>{
    return <div className={cn("w-full tablet:w-fit bg-white px-6 laptop:px-16 py-7 flex items-center justify-center flex-col gap-9 rounded-xl border-2 border-black text-black"  , className )} {...props} >
<ul className="list-none laptop:list-disc gap-4  flex flex-col" >
{
 list.map(item=><li  key={item} ><H4>{item}</H4></li>)
}
</ul>
<div>{btn}</div>
    </div>
}


export const CategoryCard : React.FC<{  lazyLoadImage? :  boolean ,   className? : string ,   title : string , descreption : string , images : string[]}> = ({ className,  title , descreption , images , lazyLoadImage })=>{
    let currImage = images[0]
    return <div  className={cn( " rounded-xl m-4 w-fit   flex justify-between flex-col " , className)}  >
        <div style={{ minHeight : '370px',  width : '300px'}} className="px-4  flex flex-col gap-4 my-6 " >
        <H2>{title}</H2>
        <P  className="w-full box-border break-words" >{descreption}</P> 
        </div>
        <img loading={lazyLoadImage ? "lazy" : "eager"}  src={currImage} className="rounded-b-xl"  style={{width : '300px' , height : '200px'}}   />
    </div>
}




export const LandmarkCard : React.FC<{landmarkData : LandmarkData}> = ({landmarkData })=>{
    return <div className="relative  w-[20vw] h-[30vw]  rounded-2xl " >
    <img alt={landmarkData.name + " image in " + landmarkData.country} src={landmarkData.image} className="absolute top-0 object-cover rounded-2xl left-0 w-full h-full z-0" />
    <div className="absolute top-0 right-0 landmarkCardBg w-full h-full z-10" ></div>
    <H3 className="font-bold absolute bottom-[20px] left-1/2 text-white z-20 text-center -translate-x-1/2" >{landmarkData.name}</H3><H4>{landmarkData.country}</H4>
   </div>
}


export const FeatureSectionCard : React.FC<FeaturesSectionCardProps> = (cardInfo)=>{
    return <div className="p-1 laptop:px-8 laptop:py-3    flex flex-col gap-1 items-center jsutify-center ">
{cardInfo.iconSrc}
<H3 className=" m-0">{cardInfo.title}</H3>
<P className="text-center  hidden lg:block" >{cardInfo.descreption}</P>
    </div>
} 


export const ValuedPostsCard : React.FC<ValuedPostsCardProps> = ({title , titleClassName , descreption , className , descreptionClassName , imgSrc , ...props})=>{
  return <Link href={appConfig.links.blog + '/'  + title} className={cn("flex shadow-lg laptop:shadow-none p-3 py-5 laptop:px-0 laptop:py-0 flex-col laptop:flex-row items-start laptop:items-center rounded-xl  relative w-10/12 justify-center  gap-4" , className)} {...props} >
<img src={imgSrc} className="laptop:w-[200px] laptop:h-[200px] w-full  rounded-xl  laptop:rounded-r-none "  />
<div className="flex flex-col gap-7 items-start w-full " >
<H2 className={cn("text-xl laptop:text-3xl" , titleClassName)}>{title}</H2>
<P className={cn("hidden laptop:block" , descreptionClassName)} >{descreption.slice(0 , 300) } {descreption.length > 200 && " ..."}</P>
</div>
  </Link>  
}