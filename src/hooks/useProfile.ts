import { stateType } from "@/state/reducers";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import {ref , listAll , uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import { firebaseStorage } from "@/db/firebase";
import { authorizedPostRequest } from "@/utils/auth/autherizedRequest";
import { UserInfoActionTypes } from "@/types/state/auth/userInfo";
import { useState } from "react";



export interface UserInfoTools {
    uploadImage : React.ChangeEventHandler<HTMLInputElement> ,
    isUploadImageRequest : boolean ,
    uploadImageProgress : number
}

export const useUserInfoTools = () : UserInfoTools =>{
    const [isUploadImageRequest , setIsUploadImageRequest ] = useState<boolean>(false)
    const [uploadImageProgress , setUploadImageProgress ] = useState<number>(0)
    const userInfo   = useSelector((state : stateType)=>state.userInfo)
    const loginInfo = useSelector((state : stateType)=>state.login )
    if(!loginInfo.token) throw new Error("can not use the useUserInfoTools when the user is not logged")
    const dispatch = useDispatch()








    const uploadImage : React.ChangeEventHandler<HTMLInputElement> = async (event) => {
        setIsUploadImageRequest(true)
        try {
          if(!loginInfo.token) return toast.error("can not get the login token ! try to refresh the page")
         
          if(event.target.files &&  event.target.files[0]){
          const imgRef = ref(firebaseStorage , `profileImages/${Date.now()}`) 
          
          const uploadTask =    uploadBytesResumable( imgRef , event.target.files[0] )
          uploadTask.on("state_changed" ,(snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadImageProgress(progress)
          }, 
          
          (error) => {
            console.error(error);
            toast.error("Error uploading file. Please try again.");
          },async ()=>{
            const imageUrl = await getDownloadURL(imgRef)
            if(!imageUrl){ toast.error("can not get the image url , please try uploading the file again") } 
            const data = await authorizedPostRequest( loginInfo.token as string , "/api/updateProfileImage" , {
             imageUrl  
            })
           //  alert(newUser?.profilePic || "no profile pic")
           if(typeof data === "object" && data && "newUser" in data)          dispatch({type : UserInfoActionTypes.ADD_USER_INFO  ,payload: data.newUser  } )
   
          }
          )
    
         }
         else toast.error("some error happened! please upload your file again")
         setIsUploadImageRequest(false)

        }
         catch (error) {
          alert(error)
          setIsUploadImageRequest(false)
          console.error(error);
        }
      }; 
return {uploadImage , isUploadImageRequest , uploadImageProgress }
}