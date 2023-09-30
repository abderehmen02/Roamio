import { getGoogleAuthUrl } from "@/utils/auth/googleAuth/getGoogleAuthUrl"

export const LogInWithGoogle = ()=>{
    return <a href={getGoogleAuthUrl()} className="px-3 py-6" >Log In With Google <i className="bi bi-google"></i> </a>
}