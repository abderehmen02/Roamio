import { GoogleUserDb } from "@/db/models/googleUser"
import { UserDb } from "@/db/models/user"
import { UseMutationResult, useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useEffect } from "react"

export const useUsersInfo = (users : string[] , keys : any[] = [] ):  UseMutationResult<UserDb[] | GoogleUserDb[], unknown, void, unknown>=>{

    const mutationOutputs = useMutation({
        retry : 0 ,
        mutationKey : keys , 
        mutationFn : async  ()=>{
            const responce = await  axios.post("/api/getUsers" , {
                users
            } )
            return responce.data  as UserDb[] | GoogleUserDb[]
        } ,
        onSuccess : async (data)=>{
        } , 
        onError : (err)=>{
            console.error("error :" + err)
        }
    })

    useEffect(()=>{
        mutationOutputs.mutate()
        } , [])
        
    
  return mutationOutputs
}