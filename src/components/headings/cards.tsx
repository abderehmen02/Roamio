
import React from "react";



export const ProfileCard : React.FC<{username : string , profileImage?: string }> =  ({username , profileImage})=>{
    return <div className="flex flex-col gap-3 px-3 py-6" >
        <img  className="w-[150px] h-[150px]" src={profileImage || "unknow"} />
    </div>
}