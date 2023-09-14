import { Skeleton } from "@mui/material"
import { TitleSkeleton } from "../ui/title"

export const LandmarkSkeletonCard : React.FC =()=>{
return  <div  className=" flex shadow-md   rounded-xl  w-full border-stone-600 relative" >
    <Skeleton  variant="rectangular"  style={{width : '200px' , margin : 0 ,  height : '100%' }}    />    
    <div className="flex px-6 py-2 justify-around flex-col gap-1" >
     <TitleSkeleton title={true}  titleStyle={{width : 250, height: 40}}  className="flex-row   items-center justify-start gap-7"  descreptionStyle={{width : 500 , height : 30}} descreption={true}  />
     <Skeleton variant="rectangular" width="100%" height={100} />
    </div></div>
}