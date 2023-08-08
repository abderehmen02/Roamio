import { CSSProperties, HTMLAttributes } from "react";
import { H4, P } from "./typography";
import { cn } from "@/lib/tailwind";

type  TitleProps   = {
    title : string |JSX.Element , 
    descreption? : string | JSX.Element ,
    titleStyle? : CSSProperties ,
    titleClassName? : string , 
    className? : string, 
    descreptionStyle? : CSSProperties ,
    descreptionClassName? :string ,
} & HTMLAttributes<HTMLDivElement>



export const Title : React.FC<TitleProps> = ({title , descreption   , className , titleStyle , descreptionClassName , titleClassName  , descreptionStyle , ...props })=>{
return <div  className={cn(  "w-full items-center flex flex-col" , className )}  {...props} >
{ typeof title === "string"  ?  <H4 style={titleStyle} className={cn("text-primary text-center font-bold"  , titleClassName ) }  >{title}</H4> : title }
<P className={cn("text-center"  , descreptionClassName ) } style={descreptionStyle}  >{descreption}</P>
</div>
} 