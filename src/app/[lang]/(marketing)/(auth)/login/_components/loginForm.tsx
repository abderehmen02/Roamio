import { useTranslation } from "@/app/i18n"
import { PrimaryBtn } from "@/ui/buttons"
import { PrimaryInput } from "@/ui/input"
import { H2, H3, H4, P } from "@/ui/typography"
import Image from "next/image"
import Link from "next/link"


export const LoginForm  : React.FC= async  ()=>{
const {t}= await useTranslation()

return <div className="flex w-full relative gap-0 items-center justify-center" >
    <div className="flex bg-white w-7/12 gap-16 py-8 flex-col" >
    <div className="w-full" >
    <H2 className="text-primary text-center font-bold" >{t("login.title")}</H2>
    <P className="text-center " >{t("login.welcome")}</P>
    </div>
    <div className="flex flex-col items-center gap-4" >
        <PrimaryInput placeholder={t("login.userNamePlaceHolder")} style={{maxWidth : '500px'}} type="text" />
        <PrimaryInput  placeholder={t("login.passwordPlaceHolder")} style={{maxWidth : '500px'}} className="max-w-xl " type="password" />
        <PrimaryBtn className="text-lg w-full" style={{maxWidth : '500px'}} > {t("login.title")} </PrimaryBtn>
    </div>
    <H4 className="w-full text-center " >Do you have any problem? <Link href="/contact" className="underline" > Contact us </Link></H4>
    </div>
     <div className="relative loginImg w-5/12 h-full " >    <Image src="/eifelTower.jpg"    sizes="(max-width: 640px) 160px, (max-width: 1200px) 1400px , 1025px"   className=" object-contain rounded-md "  alt="eifel tower pic at night with gold color" fill  /></div>
</div>
}