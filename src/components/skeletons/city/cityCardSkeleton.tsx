import { Title } from "@/ui/title"
import { Skeleton } from "@mui/material"
import { TitleSkeleton } from "../ui/title"

export const CityCardSkeleton : React.FC = ()=>{
    return <div className="w-full " style={{width : '100%' }} >
    {/* skeleton for desktop */}
    <div className="hidden laptop:flex bg-white  shadow-md w-full    rounded-xl  border-stone-600" >
    <div  className="flex-col laptop:flex-row  w-full flex" >
    <Skeleton variant="rectangular"  style={{width : 400 , height : '100%'}} />
    <div className="flex px-6 w-full py-4 gap-3 justify-around flex-col " >
     <TitleSkeleton titleStyle={{width : 100 , height : 40 }} descreptionStyle={{width: 350 , height : 27}}  title={true} titleClassName="text-2xl" className="flex-row   items-center justify-start gap-7"  descreptionClassName="font-bold text-secondaryDark" descreption={true}  />
     <Skeleton variant="rectangular" className="w-full" height='100px' />
<div className="flex items-center justify-between gap-6 py-1" ><div className="flex items-center justify-center gap-5 h-4  " >  
 <div className="flex items-center justify-center gap-1" > <Skeleton style={{width : 28 , height : 40}} />  </div>  
 <div className="flex items-center justify-center gap-1"  >   <Skeleton style={{width : 28 , height : 40}}   />       </div>  
<div  ><Skeleton style={{width : 28 , height : 40}} /></div> </div><div className="flex gap-6 justiyf-center" >  <Skeleton width={200} height={40} /><Skeleton width={200} height={40} /></div></div>
    </div>
    </div>
   </div>

{/* skeleton for mobile  */}
   <div className="flex flex-col  items-center justify-center py-0 laptop:hidden  shadow-md w-full   bg-white rounded-xl  border-stone-600" >
    <Skeleton variant="rectangular" style={{margin : "0px" , height : "250px" , width : "100%" , display : "block"  }}  />
    <TitleSkeleton titleStyle={{width : 100 , height : 40 }} descreptionStyle={{width: 350 , height : 27}}  title={true} titleClassName="text-2xl" className="flex-col   items-start justify-start w-[90%] "  descreptionClassName="font-bold text-secondaryDark" descreption={true}  />
    <Skeleton variant="text" width="90%"  />
    <Skeleton variant="text" width="90%"  />
    <Skeleton variant="text"  width="90%"  />
    <Skeleton variant="rectangular" className="mb-2" width="90%" height="50px" /> 
   </div>
   </div>
}