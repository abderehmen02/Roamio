"use client"

import { appConfig } from "@/config"
import { PrimaryBtn } from "@/ui/buttons"
import { Page } from "@/ui/containers"
import { PrimaryInput } from "@/ui/input"
import { Title } from "@/ui/title"
import { H3 } from "@/ui/typography"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"





export default function ResetPasswordPage  ({params : {token} } : {params : {token  : string}} ){
const {register , handleSubmit }  = useForm<{newPassword : string}>()
const router = useRouter()
const { isLoading ,isError , mutate } = useMutation({
    mutationFn : async (data : {newPassword: string} )=>{
        const response = await axios.post("/api/sendResetPasswordEmail" , data)
        return response.data
    } ,
    onSuccess : ()=>{
        toast.success("password has been reset succussfully! you can log in with the new password")
        router.push(appConfig.links.login)
    }
})


return <Page >
<form onSubmit={handleSubmit((data)=>mutate)}  className="flex flex-col gap-10 items-center" >
<Title title="Reset Your Password"  descreption="Please enter your email or username" />
<PrimaryInput label="Your email or username" type="text" placeholder="Type a new password" {...register("newPassword")} />
<PrimaryBtn  type="submit" loading={isLoading} >Send Email</PrimaryBtn>
</form>
    </Page>
}

