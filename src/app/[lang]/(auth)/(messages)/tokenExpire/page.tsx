"use client"

import { Page } from "@/ui/containers"
import { Title } from "@/ui/title"
import { H3 } from "@/ui/typography"
import React, { useEffect } from "react"
import { toast } from "sonner"


export default function VerifiedEmailPage  (): JSX.Element{
    useEffect(()=>{
        toast.error("Token Expired!")
    })
    return <Page>
        <Title title="Token Expired!" descreption="Your token has been expired! please try again " />
    </Page>
}