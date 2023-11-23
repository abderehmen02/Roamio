import zod from "zod"


export const updateProfileImageValidator = zod.object({
    imageUrl : zod.string()
})