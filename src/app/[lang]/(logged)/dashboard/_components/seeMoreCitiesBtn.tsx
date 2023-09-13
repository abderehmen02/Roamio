import ActionCreators from "@/state/actionCreators/action";
import { stateType } from "@/state/reducers";
import { CitiesQueryActionTypes } from "@/types/state/citiesQuery";
import { PrimaryBtn } from "@/ui/buttons";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";

export const SeeMoreCities : React.FC = ()=>{
    const queryCities = useSelector((state: stateType)=>state.citiesQuery)
    const dispatch = useDispatch()
    console.log("page" , queryCities.page)
    const {dispatchAction} = bindActionCreators(ActionCreators , dispatch )
    return <PrimaryBtn onClick={()=>dispatchAction({type : CitiesQueryActionTypes.EDIT_CITIES_QUERY , payload : {...queryCities , page : queryCities.page? queryCities.page + 1  : 1 } })} >See More</PrimaryBtn>
}