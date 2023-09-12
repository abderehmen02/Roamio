"use client"

import { logout } from "@/functions/api/auth"
import ActionCreators from "@/state/actionCreators/action"
import { PrimaryBtn } from "@/ui/buttons"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { useRouter } from 'next/navigation'
import { PrefrenceField, PrefrencesRow } from "./_components/prefrences"
import { PageBody } from "@/ui/containers"
import { Cities } from "./_components/cities"
import { Title } from "@/ui/title"
export default function Dashboard  (){
    return <div className="flex flex-col gap-2 py-4 px-2" >
<Title title="Find Your Next Distination" descreption="Select your prefrences and start reading about diffrent cities"  />
<PageBody className="" >
<PrefrencesRow/>
<Cities/>
</PageBody>
    </div>
}