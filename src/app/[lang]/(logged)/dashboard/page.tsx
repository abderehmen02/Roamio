"use client"

import { logout } from "@/functions/api/auth"
import ActionCreators from "@/state/actionCreators/action"
import { PrimaryBtn, SecondaryBtn } from "@/ui/buttons"
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
import { InfoCard, cardsColors } from "@/components/marketing/cards"
import { appConfig } from "@/config"
import FindCitiesPage from "../../findCities/page"
export default function   (){
return <FindCitiesPage/>
}