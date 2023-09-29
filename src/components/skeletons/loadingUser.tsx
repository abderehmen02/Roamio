import { appConfig } from "@/config";
import { H1 } from "@/ui/typography";
import React from "react";
import { LoggedHeader } from "../layout/loggedHeader";

export const LoadingUserSkeleton : React.FC = ()=>{
return     <div  className="h-screen w-screen flex items-center bg-primary justify-center" >
    <H1>{appConfig.name}</H1>
    </div>
}