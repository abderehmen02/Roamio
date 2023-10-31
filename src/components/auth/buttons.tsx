import Login from "@/app/[lang]/(auth)/login/page"
import { appConfig } from "@/config"
import { authConfig } from "@/config/auth"
import { submitSignIn } from "@/functions/api/auth"
import { cn } from "@/lib/tailwind"
import { H3, P } from "@/ui/typography"
import { getGoogleAuthUrl } from "@/utils/auth/googleAuth/getGoogleAuthUrl"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"

export const LogInWithGoogle : React.FC<{className? : string}> = ({className})=>{
    return <a href={getGoogleAuthUrl()} className={cn("px-6 py-3 text-white hover:bg-primary bg-[#4285F4] rounded-lg flex items-center gap-3 shadow-md " , className )}><H3>Log In With Google </H3><i className="bi bi-google text-xl"></i> </a>
}


export const LoginAsAGuest : React.FC<{className? : string}> = ({className})=>{
     const dispatch= useDispatch()
     const router = useRouter()
    return <button onClick={()=>submitSignIn({userName : authConfig.guestUsername , password  : authConfig.guestPassword} , undefined, dispatch , router.push    )}  className={cn("px-6 py-3 text-white  bg-black rounded-lg flex items-center gap-3 shadow-md " , className )}><H3>Log in as a Guest </H3><i className="bi bi-person text-xl"></i> </button>
}