import { CSSProperties, HTMLAttributes } from "react";
import { H2, H4, P } from "./typography";
import { cn } from "@/lib/tailwind";

type  ErrorContainerProps  = {
    title : string |JSX.Element , 
    descreption? : string | JSX.Element ,
    titleStyle? : CSSProperties ,
    titleClassName? : string , 
    className? : string, 
    descreptionStyle? : CSSProperties ,
    descreptionClassName? :string ,
} & HTMLAttributes<HTMLDivElement>



export const ErrorContainer : React.FC<ErrorContainerProps> = ({title , descreption   , className , titleStyle , descreptionClassName , titleClassName  , descreptionStyle , ...props })=>{
return <div  className={cn(  "w-full items-center flex flex-col" , className )}  {...props} >
{ typeof title === "string"  ?  <H2 style={titleStyle} className={cn("text-primary text-center font-bold"  , titleClassName ) }  >{title}</H2> :  <>{title}</>  }
{ typeof descreption === "string"  ?   <P className={cn("text-center"  , descreptionClassName ) } style={descreptionStyle}  >{descreption}</P> :  <>{descreption}</>  }
</div>
} 