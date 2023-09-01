"use client"

import { logout } from "@/functions/api/auth"
import ActionCreators from "@/state/actionCreators/action"
import { PrimaryBtn } from "@/ui/buttons"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { useRouter } from 'next/navigation'
import { PrefrenceField, PrefrencesRow } from "./_components/prefrences"
import { Page } from "@/ui/containers"
import { Cities } from "./_components/cities"
export default function Dashboard  (){
    return <Page className="bg-grayLight" >
<PrefrencesRow/>
<Cities/>
</Page>}