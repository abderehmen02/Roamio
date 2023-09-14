import { CSSProperties, HTMLAttributes } from "react";
import { cn } from "@/lib/tailwind";
import { Skeleton } from "@mui/material";

type  TitleProps   = {
    title : boolean , 
    descreption? : boolean ,
    titleStyle? : CSSProperties ,
    titleClassName? : string , 
    className? : string, 
    descreptionStyle? : CSSProperties ,
    descreptionClassName? :string ,
} & HTMLAttributes<HTMLDivElement>



export const TitleSkeleton : React.FC<TitleProps> = ({title , descreption   , className , titleStyle , descreptionClassName , titleClassName  , descreptionStyle  })=>{
return <div  className={cn(  "w-full items-center flex flex-col" , className )}   >
{ title && <Skeleton style={titleStyle} className={cn("text-primary text-center font-bold"  , titleClassName ) }  ></Skeleton>   }
{ descreption &&  <Skeleton className={cn("text-center"  , descreptionClassName ) } style={descreptionStyle}  >{descreption}</Skeleton> }
</div>
} 