import { CSSProperties, HTMLAttributes } from "react";
import { cn } from "@/lib/tailwind";
import { Skeleton } from "@mui/material";

type  TitleSkeletonProps   = {
    title : boolean , 
    descreption? : boolean ,
    titleStyle? : CSSProperties ,
    titleClassName? : string , 
    className? : string, 
    descreptionStyle? : CSSProperties ,
    descreptionClassName? :string ,
} 


export const TitleSkeleton : React.FC<TitleSkeletonProps> = ({title , descreption   , className , titleStyle , descreptionClassName , titleClassName  , descreptionStyle  })=>{
return <div  className={cn(  "w-full items-center flex flex-col" , className )}   >
{ title && <Skeleton variant="text" style={titleStyle} className={cn("text-primary text-center font-bold"  , titleClassName ) }  ></Skeleton>   }
{ descreption &&  <Skeleton variant="text" className={cn("text-center"  , descreptionClassName ) } style={descreptionStyle}  ></Skeleton> }
</div>
} 