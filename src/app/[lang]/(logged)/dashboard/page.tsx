"use client"

import { logout } from "@/functions/api/auth"
import ActionCreators from "@/state/actionCreators/action"
import { PrimaryBtn } from "@/ui/buttons"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { useRouter } from 'next/navigation'
import { PrefrenceField, PrefrencesRow } from "./_components/prefrences"
import { LoggedPage, PageBody } from "@/ui/containers"
import { Cities } from "./_components/cities"
import { Title } from "@/ui/title"
export default function Dashboard  (){
    return <LoggedPage >
<Title title="Find Your Next Distination" descreption="Select your prefrences and start reading about diffrent cities"  />
<PageBody className="" >
<PrefrencesRow/>
<Cities/>
</PageBody>
    </LoggedPage>
}