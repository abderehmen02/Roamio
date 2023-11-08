import { getIpAdressData } from "@/utils/api/ipAdressData"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { sendVisitingEmail } from "@/utils/auth/email"
import { StatusCodes } from "http-status-codes"
import { NextApiRequest } from "next"
import CountryLookUp from "country-code-lookup"



export const GET = asyncWrapperApi( async (req )=>{
   const ipAdress =   req.headers.get("x-forwarded-for") || ""
   const ipAdressData = await  getIpAdressData(ipAdress)
   const country = CountryLookUp.byInternet(  ipAdressData?.country)?.country || ipAdressData?.country || "unknown"   
   const emailSent = await  sendVisitingEmail(country + " | " +  ipAdressData.city) ;
   return apiResponse(emailSent ? StatusCodes.OK  : StatusCodes.INTERNAL_SERVER_ERROR, {send : emailSent} )
} )