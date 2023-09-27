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
import { useSelector } from "react-redux"
import { stateType } from "@/state/reducers"
import { H3 } from "@/ui/typography"
export default function Dashboard  (){
    const cities = useSelector((state : stateType)=>state.cities)
    
    if(cities.error?.message) return <LoggedPage> <Title title="Error !" descreption={"Some error hapened on the cities state! please try again later." + cities.error.message }  /></LoggedPage>
    return <LoggedPage >
{ (!cities.loading &&   cities.cities.length  === 0 ) ?  <Title title="No city found" descreption="Can not find any city! please select some other prefrences "  /> : <Title title="Find Your Next Distination" descreption="Select your prefrences and start reading about diffrent cities"  /> }
<PageBody className="relative" >
<PrefrencesRow/>
<Cities/>
</PageBody>
    </LoggedPage>
}