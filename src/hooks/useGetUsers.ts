import { GoogleUserDb } from "@/db/models/googleUser"
import { UserDb } from "@/db/models/user"
import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect } from "react"

export const useUsersInfo = (users : string[] , keys : any[] = [] ):  UseQueryResult<UserDb[] | GoogleUserDb[]>=>{

    const mutationOutputs = useQuery({
        queryKey: keys, 
        keepPreviousData : true ,
        queryFn: async  ()=>{
        // making a post request inside a useQuery hook instead of useMutation just to make transfering data between api and client easier with the post request
            const responce = await  axios.post("/api/getUsers" , {
                users
            } )
            return responce.data  as UserDb[] | GoogleUserDb[]
        } ,
    })

        
    
  return mutationOutputs
}