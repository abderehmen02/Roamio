import {z} from 'zod'


export const contactValidator = z.object({
    name : z.string() ,
    email : z.string().email()  ,
    message:  z.string()
})