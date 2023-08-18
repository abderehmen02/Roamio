"use client"

import { logout } from "@/functions/api/auth"
import ActionCreators from "@/state/actionCreators/action"
import { PrimaryBtn } from "@/ui/buttons"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { useRouter } from 'next/navigation'
export default function Dashboard  (){
    const dispatch = useDispatch()
    const pushUrlFn = useRouter().push
    const {dispatchAction} = bindActionCreators( ActionCreators , dispatch )
    return <PrimaryBtn onClick={()=>logout(dispatch , pushUrlFn )} >Logout</PrimaryBtn>
}