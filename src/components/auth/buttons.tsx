import { cn } from "@/lib/tailwind"
import { H3, P } from "@/ui/typography"
import { getGoogleAuthUrl } from "@/utils/auth/googleAuth/getGoogleAuthUrl"

export const LogInWithGoogle : React.FC<{className? : string}> = ({className})=>{
    return <a href={getGoogleAuthUrl()} className={cn("px-6 py-3 text-white hover:bg-primary bg-[#4285F4] rounded-lg flex items-center gap-3 shadow-md " , className )}><H3>Log In With Google </H3><i className="bi bi-google text-xl"></i> </a>
}