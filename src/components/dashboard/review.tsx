import { appConfig } from "@/config"
import { P } from "@/ui/typography"
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from "react-redux";
import { stateType } from "@/state/reducers";
import { isUserInfo } from "@/types/state/auth/userInfo";
export type Review =  {
    userName? : string , 
    image?: string , 
    userId?: string ,
    review?: string ,
    deleteReviewFn: (reviewId : string)=>any , 
    _id?: string 
}

export const ReviewComponent : React.FC<Review> = ({review , userId  , _id , image , userName , deleteReviewFn  })=>{
    console.log("username"  , userName , image)
    if(!review) return <span>skeleton</span>
    else if(review && !image && !userName) return <span>userName and image skeleton + {review}</span>

   
   const userInfo =  useSelector((state: stateType)=>state.userInfo)
    return <div className="flex px-1 items-center   w-full justify-between" >
    <div className="flex w-full px-2  items-center justify-start gap-2" >
        <img alt="profile image" src={ image || appConfig.unknownPersonImg } width={35}  height={35} style={{border : '1px solid black'}} className=" rounded-full" />
        <div className="flex items-start  flex-col" >
        <P className="text-start text-sm font-extrabold " >{userName}</P>
        <P style={{maxWidth: '350px'}} className="text-start text-sm" >{review}</P>
        </div>
    </div>
{ isUserInfo(userInfo) && userInfo._id === userId && <DeleteIcon  className="cursor-pointer hover:text-red-500 " onClick={()=>{if(_id)deleteReviewFn(_id)}} />}
    </div>
}