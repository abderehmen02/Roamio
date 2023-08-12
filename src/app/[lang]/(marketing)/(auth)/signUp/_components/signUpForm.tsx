"use client"

import { useTranslation } from "@/app/i18n/client"
import { PrimaryInput } from "@/ui/input"
import { Title } from "@/ui/title"
import { P } from "@/ui/typography"
import Link from "next/link"
import { SecondaryBtn } from "@/ui/buttons"
import {useForm} from "react-hook-form"
import { submitSignUp } from "@/functions/api/auth"
import { signUpDataType } from "@/utils/validators/auth"
import { GenderSelector } from "@/components/marketing/genderSelector"
import { SignUpDatePicker } from "@/components/marketing/datePicker"


export const SignUpForm = ()=>{
    const {t} = useTranslation()
    const { setValue  , register, handleSubmit,  formState: { errors },  } = useForm<signUpDataType>();


return <form onSubmit={handleSubmit((data)=>submitSignUp(data))} className="bg-white px-10 shadow-lg gap-10 py-5 signUpForm  h-fit rounded-lg items-start  flex flex-col" >
<Title title={t("signUp.title")}  descreption={<div>{t("signUp.dontHaveAccount")} <Link href="/login" className="font-semibold underline" >{t("login.title")}</Link> </div>} />
<PrimaryInput {...register("firstName")}  label={t("signUp.firstName")} />
<PrimaryInput {...register("lastName")} label={t("signUp.lastName")}  />
<PrimaryInput {...register("userName")} label={t("signUp.userName")}  action={<P>{t("signUp.generateUsername")}</P>}  helperText={t("signUp.helperUserName")} />
<PrimaryInput {...register("email")} type="email"   label={t("signUp.email")}  />
<PrimaryInput {...register("password")} type="password"   label={t("signUp.password")}  />
<div className="flex w-full justify-start gap-14" >
<SignUpDatePicker setValue={setValue} />
<GenderSelector  setValue={setValue} />
</div>
<SecondaryBtn type="submit" className="w-full"> {t("signUp.title")}</SecondaryBtn>
    </form>
}