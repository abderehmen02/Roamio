"use client"
import { submitSignIn } from "@/functions/api/auth"
import ActionCreators from "@/state/actionCreators/action"
import { PrimaryBtn } from "@/ui/buttons"
import { PrimaryInput } from "@/ui/input"
import { H2, H3, H4, P } from "@/ui/typography"
import { signInDataType } from "@/utils/validators/auth"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/app/i18n/client"
import { LogInWithGoogle, LoginAsAGuest } from "@/components/auth/buttons"
import { useState } from "react"
import { SignInFields, signInFieldError } from "@/types/errors/auth"
import { useSelector } from "react-redux"
import { stateType } from "@/state/reducers"

export const LoginForm  : React.FC=   ()=>{
const {t} = useTranslation()
const [fieldsErrors , setFieldsErrors ] = useState<signInFieldError[]>([])
const dispath = useDispatch()
const {  register, handleSubmit,  formState: { errors },  } = useForm<signInDataType>();
const dispatch = useDispatch()
const push = useRouter().push
const logInState = useSelector((state : stateType)=>state.login)



return <div className="flex  w-full relative gap-0 flex-col laptop:flex-row items-center justify-center" >
    <div className="flex bg-white w-full laptop:w-7/12 gap-6 py-8 px-5   laptop:px-16 flex-col" >
    <div className="w-full  flex flex-col" >
    <H2 className="text-primary text-center font-bold" >{t("login.title")}</H2>
    <P className="text-center " >{t("login.welcome")}</P>
    </div>
    <form onSubmit={handleSubmit((data)=>submitSignIn(data , setFieldsErrors , dispatch , push   ))} className="flex flex-col items-center gap-8" >
        <PrimaryInput error={fieldsErrors.find(error=>error.field===SignInFields.USERNAME)?.message} {...register("userName")}   label={t("login.username")} placeholder={t("login.userNamePlaceHolder")} containerStyle={{maxWidth : '500px'}} type="text" />
        <PrimaryInput error={fieldsErrors.find(error=>error.field===SignInFields.PASSWORD)?.message}  {...register("password")} action={<Link href="sendResetPasswordEmail" className="hover:font-semibold" >{t("login.forgetPassword")}</Link>}  label={t("login.password")}  placeholder={t("login.passwordPlaceHolder")} containerStyle={{maxWidth : '500px'}} className="max-w-xl " type="password" />
        <PrimaryBtn loading={logInState.loading} type="submit" className="text-lg w-full" style={{maxWidth : '500px'}} > {t("login.title")} </PrimaryBtn>
    </form>
    <div className="flex w-full flex-col items-center my-8 gap-5" >
    <LogInWithGoogle className="w-full flex items-center justify-center" />
    <LoginAsAGuest className="w-full flex items-center justify-center"/>
    </div>
    <P className="w-full text-center " >{t("login.havingAProblem")} <Link href="/contact" className="underline hover:font-semibold" >{t("login.contactUs")} </Link></P>
    </div>
     <div className="relative hidden laptop:block loginImg w-5/12 h-full " >    <Image src="/eifelTower.jpg"    sizes="(max-width: 640px) 160px, (max-width: 1200px) 1400px , 1025px"   className=" object-contain rounded-md "  alt="eifel tower pic at night with gold color" fill  /></div>
</div>
}