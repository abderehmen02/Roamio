import { cityModal } from "@/db/models/city";
import { errorMessage } from "@/utils/api/error";
import { apiResponse } from "@/utils/api/nextResponse";
import { asyncWrapperApi, asyncWrapperAuthorisedApi } from "@/utils/asyncWrapper";
import { deleteReviewValidator } from "@/utils/validators/cities";
import { StatusCodes } from "http-status-codes";
import { NextApiRequest } from "next";

export const DELETE =  asyncWrapperAuthorisedApi( async (req , userInfo )=>{
const {searchParams} = new URL(req?.url)
const city = searchParams.get("city")
const reviewId = searchParams.get("reviewId")
if(!city || !reviewId) return apiResponse(StatusCodes.BAD_REQUEST  , "the delete review api should receive the city name and the review id")
const newCity = await  cityModal().findOneAndUpdate({name : city} , { $pull: { reviews : { _id: reviewId , userId: userInfo.userId  } } } , {new : true} )
return apiResponse(StatusCodes.OK , newCity )
})