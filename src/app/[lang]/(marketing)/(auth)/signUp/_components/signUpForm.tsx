"use client"

import { useTranslation } from "@/app/i18n/client"
import { PrimaryInput } from "@/ui/input"
import { Title } from "@/ui/title"
import { P } from "@/ui/typography"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Link from "next/link"
import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"

export const SignUpForm = ()=>{
    const {t} = useTranslation()
    return <form className="bg-white px-10 shadow-lg gap-10 py-5 signUpForm  h-fit rounded-lg items-start  flex flex-col" >
<Title title={t("signUp.title")}   descreption={<div>sign in</div>} />
<PrimaryInput  label={t("signUp.firstName")}  />
<PrimaryInput label={t("signUp.lastName")}  />
<PrimaryInput label={t("signUp.userName")}  action={<P>{t("signUp.generateUsername")}</P>}  helperText={t("signUp.helperUserName")} />
<PrimaryInput type="email"   label={t("signUp.email")}  />
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label={t("signUp.birthDate")}/>
    </LocalizationProvider>    
    <SecondaryBtn className="w-full"> Sign up </SecondaryBtn>
    </form>
}