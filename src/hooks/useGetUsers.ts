import { GoogleUserDb } from "@/db/models/googleUser"
import { UserDb } from "@/db/models/user"
import { UseMutationResult, useMutation } from "@tanstack/react-query"
import axios from "axios"

export const useUsersInfo = (users : string[]):  UseMutationResult<UserDb[] | GoogleUserDb[], unknown, void, unknown>=>{
    const mutationOutputs = useMutation({
        mutationFn : async  ()=>{
            const responce = await  axios.post("/api/getUsers" , {
                users
            } )
            return responce.data  as UserDb[] | GoogleUserDb[]
        }
    })
  return mutationOutputs
}