"use client"

import { appConfig } from "@/config"
import { PrimaryBtn } from "@/ui/buttons"
import { Page } from "@/ui/containers"
import { PrimaryInput } from "@/ui/input"
import { Title } from "@/ui/title"
import { H3 } from "@/ui/typography"
import { ResetPasswordData } from "@/utils/validators/auth"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"





export default function ResetPasswordPage  ({params : {token} } : {params : {token  : string}} ){
const {register , handleSubmit }  = useForm<{newPassword : string}>()
const router = useRouter()
const { isLoading ,isError , mutate } = useMutation({
    mutationFn : async (data : ResetPasswordData )=>{
        const response = await axios.post("/api/resetPassword" , data)
        return response.data
    } ,
    onSuccess : ()=>{
        toast.success("password has been reset succussfully! you can log in with the new password")
        router.push(appConfig.links.login)
    }
})


return <Page >
<form onSubmit={handleSubmit((data)=>mutate({...data , token}))}  className="flex flex-col gap-10 items-center" >
<Title title="Reset Your Password"  descreption="Please enter a new password to use it the next time you login" />
<PrimaryInput label="New password" type="password" placeholder="Type a new password" {...register("newPassword")} />
<PrimaryBtn  type="submit" loading={isLoading} >Submit</PrimaryBtn>
</form>
    </Page>
}