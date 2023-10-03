import { authConfig } from "@/config/auth"

export const getGoogleAuthUrl =   (): string=> {

if(!process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID){
    const error = "can not get the client id from the envirement variables" 
    console.log(error)
    throw new Error(error)
}

    const baseUrl = "https://accounts.google.com/o/oauth2/v2/auth"

    const options = {
        redirect_uri : authConfig.googleRedirectUrl ,
        client_id: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID ,
        access_type: "offline"  ,
        response_type : "code"  ,
        prompt : 'consent' ,
        scope: ["https://www.googleapis.com/auth/userinfo.profile" , "https://www.googleapis.com/auth/userinfo.email"].join(" ")
    }
    
    
    const qs = new URLSearchParams(options)
    

return `${baseUrl}?${qs.toString()}`
}