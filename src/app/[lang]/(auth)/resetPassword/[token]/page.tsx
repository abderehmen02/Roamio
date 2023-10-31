import { Page } from "@/ui/containers"
import { ResetPasswordForm } from "./_components/resetPasswordForm"
import { isTokenExpired, verifyToken } from "@/utils/auth/tokens"
import { notFound, redirect } from "next/navigation"
import { appConfig } from "@/config"
import { TokenTypes } from "@/types/auth/token"





export default function ResetPasswordPage  ({params : {token} } : {params : {token  : string}} ){
if(isTokenExpired(token)) return  redirect(appConfig.links.messages.tokenExpired)
const tokenInfo = verifyToken(token)
if(!tokenInfo || typeof tokenInfo !== "object" || ! ("type" in tokenInfo) || tokenInfo.type !== TokenTypes.RESET_PASSWORD ) return notFound()

return <Page className="flex items-center" >
    <ResetPasswordForm token={token} />
    </Page>
}