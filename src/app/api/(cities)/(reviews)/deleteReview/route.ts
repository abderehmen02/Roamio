import { cityModal } from "@/db/models/city";
import { errorMessage } from "@/utils/api/error";
import { apiResponse } from "@/utils/api/nextResponse";
import { asyncWrapperApi, asyncWrapperAuthorisedApi } from "@/utils/asyncWrapper";
import { deleteReviewValidator } from "@/utils/validators/cities";
import { StatusCodes } from "http-status-codes";
import { NextApiRequest } from "next";

export const DELETE =  asyncWrapperAuthorisedApi( async (req )=>{
    console.log("getting a delete request")
const {searchParams} = new URL(req?.url)
const parsedSearchParams  = deleteReviewValidator.safeParse(searchParams)
if(!parsedSearchParams.success){ 
    console.log(parsedSearchParams.error)
    return apiResponse(StatusCodes.BAD_REQUEST , errorMessage('delete review api should accept a city name and a review id as a raquest') )
}
console.log("parsed searhc params" , parsedSearchParams)
const newCity = await  cityModal().findOneAndUpdate({name : parsedSearchParams.data.city} , { $pull: { reviews : { _id: parsedSearchParams.data.reveiwId } } } , {new : true} )
console.log("new city" , newCity)
return apiResponse(StatusCodes.OK , {succuss : true} )
})