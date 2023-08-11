"use client"

import { useTranslation } from "@/app/i18n/client"
import { PrimaryInput } from "@/ui/input"
import { Title } from "@/ui/title"
import { P } from "@/ui/typography"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Link from "next/link"
import { SecondaryBtn } from "@/ui/buttons"
import {useForm} from "react-hook-form"
import { submitSignUp } from "@/functions/api/auth"
import { signUpDataType } from "@/utils/validators/auth"

export const SignUpForm = ()=>{
    const {t} = useTranslation()
    const { register, handleSubmit,  formState: { errors },  } = useForm<signUpDataType>();

// creating this function to handle the date picker change to our useForm hook
    const handleDateChange = (value : Date | null ) => {
// Call the onChange function returned by register
        register('birthDate').onChange({target : value});
      };


return <form onSubmit={handleSubmit((data)=>submitSignUp(data ))} className="bg-white px-10 shadow-lg gap-10 py-5 signUpForm  h-fit rounded-lg items-start  flex flex-col" >
<Title title={t("signUp.title")}  descreption={<div>{t("signUp.dontHaveAccount")} <Link href="/login" className="font-semibold underline" >{t("login.title")}</Link> </div>} />
<PrimaryInput {...register("firstName")} label={t("signUp.firstName")}  />
<PrimaryInput {...register("lastName")} label={t("signUp.lastName")}  />
<PrimaryInput {...register("userName")} label={t("signUp.userName")}  action={<P>{t("signUp.generateUsername")}</P>}  helperText={t("signUp.helperUserName")} />
<PrimaryInput {...register("email")} type="email"   label={t("signUp.email")}  />
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker  onChange={handleDateChange} label={t("signUp.birthDate")}/>
    </LocalizationProvider>    
    <SecondaryBtn type="submit" className="w-full"> Sign up </SecondaryBtn>
    </form>
}