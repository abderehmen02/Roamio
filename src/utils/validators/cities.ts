import {z} from "zod"




export const likesRequestValidator = z.object({
    user: z.string()
})