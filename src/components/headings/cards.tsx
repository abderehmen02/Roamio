"use client"
import { appConfig } from "@/config";
import { stateType } from "@/state/reducers";
import {  UserInfoActionTypes, isGoogleUser, isUserInfo } from "@/types/state/auth/userInfo";
import { H4 } from "@/ui/typography";
import Reactn  from "react";
import { useSelector } from "react-redux";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from "axios";
import {ref , listAll , uploadBytes, getDownloadURL } from "firebase/storage"
import { firebaseStorage } from "@/db/firebase";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { authorizedPostRequest } from "@/utils/auth/autherizedRequest";

export const ProfileCard : React.FC =  ()=>{
    const userInfo   = useSelector((state : stateType)=>state.userInfo)
    const loginInfo = useSelector((state : stateType)=>state.login )
    const dispatch = useDispatch()
    console.log("user Info" , userInfo)
    const uploadImage : React.ChangeEventHandler<HTMLInputElement> = async (event) => {
        try {
          if(!loginInfo.token) return toast.error("can not get the login token ! try to refresh the page")
         
          if(event.target.files &&  event.target.files[0]){
          const imgRef = ref(firebaseStorage , `profileImages/${Date.now()}`) 
          
          const imgSnapshot = await   uploadBytes( imgRef , event.target.files[0] )
          const imageUrl = await getDownloadURL(imgRef)
    
         if(!imageUrl){ toast.error("can not get the image url , please try uploading the file again") } 
         const data = await authorizedPostRequest( loginInfo.token , "/api/updateProfileImage" , {
          imageUrl  
         })
        //  alert(newUser?.profilePic || "no profile pic")
        if(typeof data === "object" && data && "newUser" in data)          dispatch({type : UserInfoActionTypes.ADD_USER_INFO  ,payload: data.newUser  } )
         }
         else toast.error("some error happened! please upload your file again")
        }
          
         catch (error) {
          alert(error)
          console.error(error);
        }
      };    

    if(!isUserInfo(userInfo) ) {
    return <></>
}
    return <div className="flex  flex-col gap-3 px-3 py-6 items-center justify-center" >
        <div className="relative group  w-[70px] h-[70px] rounded-full  border-2  bg-secondary "  >
        <AddAPhotoIcon className="absolute opacity-50 group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-fit h-fit bg-white" ><img  className=" w-full h-full rounded-full" src={ userInfo.profilePic || userInfo.picture||  appConfig.unknownPersonImage} /></div>
        <input onChange={uploadImage}  type="file" className="w-[70px] h-[70px] absolute top-0 left-0  rounded-full items-center justify-center border-green-600   opacity-0 cursor-pointer" />
        </div>
          <H4>{isGoogleUser(userInfo)  ? userInfo.given_name : userInfo.userName  }</H4> 
    </div>
}