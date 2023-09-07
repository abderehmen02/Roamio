import {z} from "zod"




export const likesRequestValidator = z.object({
    city : z.string()
})