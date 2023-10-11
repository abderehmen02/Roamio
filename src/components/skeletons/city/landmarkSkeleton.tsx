import { Skeleton } from "@mui/material"
import { TitleSkeleton } from "../ui/title"

export const LandmarkSkeletonCard : React.FC =()=>{
return  <>

{/* skeleton for desktop */}
<div  className="hidden laptop:flex shadow-md   rounded-xl  w-full border-stone-600 relative" >
    <Skeleton  variant="rectangular"  style={{width : '200px' , margin : 0 ,  height : '100%' }}    />    
    <div className="flex px-6 py-2 justify-around flex-col gap-1" >
     <TitleSkeleton title={true}  titleStyle={{width : 250, height: 40}}  className="flex-row   items-center justify-start gap-7"  descreptionStyle={{width : 500 , height : 30}} descreption={true}  />
     <Skeleton variant="rectangular" width="100%" height={100} />
    </div></div>

{/* skeleton for mobile */}
<div className="flex flex-col items-center justify-center py-0 laptop:hidden  shadow-md w-full   bg-white rounded-xl  border-stone-600" >
    <Skeleton variant="rectangular" style={{margin : "0px" , height : "250px" , width : "100%" , display : "block"  }}  />
    <TitleSkeleton titleStyle={{width : 100 , height : 40 }} descreptionStyle={{width: 350 , height : 27}}  title={true} titleClassName="text-2xl" className="flex-col   items-start justify-start w-[90%] "  descreptionClassName="font-bold text-secondaryDark" descreption={true}  />
    <Skeleton variant="text" width="90%"  />
    <Skeleton variant="text" width="90%"  />
    <Skeleton variant="text"  width="90%"  />
   </div>

</>

}