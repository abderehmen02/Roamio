import { appConfig } from "@/config";
import { H2, H3 } from "@/ui/typography";
import { Box, LinearProgress } from "@mui/material";

export default function LoadingPage (){
    return <div  className="h-screen w-screen flex items-center flex-col bg-transparent justify-center" >
 <img alt={appConfig.name + "logo image"} src={appConfig.logoImage} style={{width  : '74px' , height : "74px" , margin  : "16px"}} />
     <Box sx={{width : '100px'}} ><LinearProgress/></Box>
    </div>
}