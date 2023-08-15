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
import { GenderSelector } from "@/components/auth/genderSelector"
import { SignUpDatePicker } from "@/components/auth/datePicker"
import { useState } from "react"
import { SignUpFields, signUpFieldError } from "@/types/errors/auth"
import { useSelector } from "react-redux"
import { stateType } from "@/state/reducers"
import { LoginState } from "@/types/state/auth/signIn"



export const SignUpForm = ()=>{
    const {t} = useTranslation()
    const { setValue  , register, handleSubmit,  formState: { errors },  } = useForm<signUpDataType>();
    const  [fieldsErrors , setFieldsErrors ] = useState<signUpFieldError[]>([])
    const loginState : LoginState = useSelector((state : stateType)=>state.login)
    console.log("state" , loginState)
return <form onSubmit={handleSubmit((data)=>submitSignUp(data , setFieldsErrors ))} className="bg-white px-10 shadow-lg gap-10 py-5 signUpForm  h-fit rounded-lg items-start  flex flex-col" >
<Title title={t("signUp.title")}  descreption={<div>{t("signUp.dontHaveAccount")} <Link href="/login" className="font-semibold underline" >{t("login.title")}</Link> </div>} />
<PrimaryInput  error={fieldsErrors.find(item =>item.field === SignUpFields.FIRSTNAME)?.message} {...register("firstName")}  label={t("signUp.firstName")} />
<PrimaryInput  error={fieldsErrors.find(item =>item.field === SignUpFields.LASTNAME)?.message} {...register("lastName")} label={t("signUp.lastName")}  />
<PrimaryInput  error={fieldsErrors.find(item =>item.field === SignUpFields.USERNAME)?.message} {...register("userName")} label={t("signUp.userName")}  action={<P>{t("signUp.generateUsername")}</P>}  helperText={t("signUp.helperUserName")} />
<PrimaryInput  error={fieldsErrors.find(item =>item.field === SignUpFields.EMAIL)?.message} {...register("email")} type="email"   label={t("signUp.email")}  />
<PrimaryInput  error={fieldsErrors.find(item =>item.field === SignUpFields.PASSWORD)?.message} {...register("password")} type="password"   label={t("signUp.password")}  />
<div className="flex w-full justify-start gap-14" >
<SignUpDatePicker  error={fieldsErrors.find(item =>item.field === SignUpFields.BIRTHDATE)?.message} setValue={setValue} />
<GenderSelector  error={fieldsErrors.find(item =>item.field === SignUpFields.GENDER)?.message} setValue={setValue} />
</div>
<SecondaryBtn type="submit" className="w-full"> {t("signUp.title")}</SecondaryBtn>
    </form>
}