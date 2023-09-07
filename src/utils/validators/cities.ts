import {z} from "zod"




export const likesRequestValidator = z.object({
    userName: z.string() ,
    city : z.string()
})