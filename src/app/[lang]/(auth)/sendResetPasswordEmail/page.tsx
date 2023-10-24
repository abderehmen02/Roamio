"use client"

import { appConfig } from "@/config"
import { PrimaryBtn } from "@/ui/buttons"
import { Page } from "@/ui/containers"
import { PrimaryInput } from "@/ui/input"
import { Title } from "@/ui/title"
import { H3 } from "@/ui/typography"
import { SendResetPasswordEmailData } from "@/utils/validators/auth"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"





export default function ResetPasswordPage  ({params : {token} } : {params : {token  : string}} ){
const [firstEmailSent, setFirstEmailSent] = useState(false)
const {register , handleSubmit }  = useForm<SendResetPasswordEmailData>()
const router = useRouter()
const { isLoading ,isError , mutate } = useMutation({
    mutationFn : async (data : SendResetPasswordEmailData )=>{
        const response = await axios.post("/api/sendResetPasswordEmail" , data)
        return response.data
    } ,
    onSuccess : ()=>{
        toast.success("email sent!")
        setFirstEmailSent(true)
    },
    onError : ()=>{
        toast.error("something went wrong! please try again")
    }
})


return <Page >
<form onSubmit={handleSubmit((data)=>mutate(data))}  className="flex flex-col gap-10 items-center" >
<Title title="Your Email Or Username"  descreption={ firstEmailSent ? "Email has been sent! please go to your email and follow the link that we sent to create a new passowrd"  :  "Plase type your email or username to send you a reset password email"} />
<PrimaryInput label="Your email or username" type="text" placeholder="Type a new password" {...register("userIdentifier")} />
<PrimaryBtn  type="submit" loading={isLoading} > { firstEmailSent ? "Resend Email" :  "Send Email" }</PrimaryBtn>
</form>
    </Page>
}

