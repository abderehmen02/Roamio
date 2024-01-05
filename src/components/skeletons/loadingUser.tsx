import { appConfig } from "@/config";
import { H1 } from "@/ui/typography";
import React from "react";
import { LoggedHeader } from "../layout/loggedHeader";
import { Box, LinearProgress } from "@mui/material";

export const LoadingUserSkeleton : React.FC = ()=>{
return     <div  className="h-screen w-screen flex items-center flex-col  justify-center" >
    <img src={appConfig.logoImage} style={{width  : '54px' , height : "54px" , margin  : "16px"}} />
    <Box sx={{width : '100px'}} ><LinearProgress/></Box>
    </div>
}