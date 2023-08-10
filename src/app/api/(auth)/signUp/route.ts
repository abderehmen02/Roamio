
import clientPromise from "@/db/connect"
import { NextApiRequest } from "next"
import { NextRequest } from "next/server"





export const GET  = async (req : NextApiRequest  ) =>{
    await clientPromise
return new Response("welcome")
}