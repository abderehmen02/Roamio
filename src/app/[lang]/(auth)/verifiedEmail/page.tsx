"use client"

import { Page } from "@/ui/containers"
import { Title } from "@/ui/title"
import { H3 } from "@/ui/typography"
import React, { useEffect } from "react"
import { toast } from "sonner"


export default function VerifiedEmailPage  (): JSX.Element{
    useEffect(()=>{
        toast.success("Email verified!")
    })
    return <Page>
        <Title title="email verified!" descreption="Your email has been succussfully verified! go back , refresh the page and start exploring." />
    </Page>
}