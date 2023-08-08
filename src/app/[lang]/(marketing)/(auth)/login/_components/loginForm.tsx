import { useTranslation } from "@/app/i18n"
import { PrimaryBtn } from "@/ui/buttons"
import { PrimaryInput } from "@/ui/input"
import { H2, H3, H4, P } from "@/ui/typography"
import Image from "next/image"
import Link from "next/link"


export const LoginForm  : React.FC= async  ()=>{
const {t}= await useTranslation()

return <div className="flex w-full relative gap-0 items-center justify-center" >
    <div className="flex bg-white w-7/12 gap-6 py-8 flex-col" >
    <div className="w-full  flex flex-col" >
    <H2 className="text-primary text-center font-bold" >{t("login.title")}</H2>
    <P className="text-center " >{t("login.welcome")}</P>
    </div>
    <div className="flex flex-col items-center gap-8" >
        <PrimaryInput action={<Link href="/forgetUsername" className="hover:font-semibold" >{t("login.forgetUsername")}</Link>}  label={t("login.username")} placeholder={t("login.userNamePlaceHolder")} containerStyle={{maxWidth : '500px'}} type="text" />
        <PrimaryInput action={<Link href="/forgetPassword" className="hover:font-semibold" >{t("login.forgetPassword")}</Link>}  label={t("login.password")}  placeholder={t("login.passwordPlaceHolder")} containerStyle={{maxWidth : '500px'}} className="max-w-xl " type="password" />
        <PrimaryBtn className="text-lg w-full" style={{maxWidth : '500px'}} > {t("login.title")} </PrimaryBtn>
    </div>
    <P className="w-full text-center " >{t("login.havingAProblem")} <Link href="/contact" className="underline" >{t("login.contactUs")} </Link></P>
    </div>
     <div className="relative loginImg w-5/12 h-full " >    <Image src="/eifelTower.jpg"    sizes="(max-width: 640px) 160px, (max-width: 1200px) 1400px , 1025px"   className=" object-contain rounded-md "  alt="eifel tower pic at night with gold color" fill  /></div>
</div>
}