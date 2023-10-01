import { apiResponse } from "@/utils/api/nextResponse";
import { asyncWrapperApi } from "@/utils/asyncWrapper";
import { NextRequest } from "next/server";

const sendGridApi = process.env.SEND_GRID_API_KEY

export const POST = asyncWrapperApi(async (req)=>{
    if(!sendGridApi) throw new Error("can not get the send grid api key . please check your envirement variables")
return apiResponse()
})