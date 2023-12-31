import {z} from "zod"




export const likesRequestValidator = z.object({
    city : z.string()   ,
})
export const saveCityValidator  = z.object({
    city : z.string()
})
export const getCityValidator = z.object({
    city : z.string()
})
export const cityReviewRequestValidator  = z.object({
    review : z.string().min(1) , 
    city : z.string() 
})


export const deleteReviewValidator = z.object({
    reveiwId: z.string()  ,
    city : z.string()
})