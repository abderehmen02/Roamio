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

return <Page >
    </Page>
}