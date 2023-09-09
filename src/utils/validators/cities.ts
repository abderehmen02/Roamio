import {z} from "zod"




export const likesRequestValidator = z.object({
    city : z.string()   ,
})

export const cityReviewRequestValidator  = z.object({
    review : z.string()
})