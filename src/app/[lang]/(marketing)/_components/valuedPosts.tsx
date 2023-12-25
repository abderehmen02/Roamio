"use client"
import { ValuedPostsCard } from "@/components/marketing/cards"
import { appConfig } from "@/config"
import { cn } from "@/lib/tailwind"
import { H2 } from "@/ui/typography"
import { getSanityValuedPosts, sanityImageUrl } from "@/utils/blogPosts"
import { useMutation, useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { toast } from "sonner"

export const ValuedPosts = ()=>{
    const {data , error , isLoading} = useQuery({queryFn : async ()=>{
        const valuedPosts = await  getSanityValuedPosts()
        console.log("valued posts" , valuedPosts)

        return valuedPosts
    }, 
    onError : (err)=>{
        console.log("sanity errro!" , err )
        toast.error("Something wrong! can not get the posts from the server!")
    } ,
})
if(isLoading) return <div>loading ...</div>
    return <div className="flex items-star flex-col  gap-20 justify-center py-28 w-full " >
        <div className="flex flex-col" >
        <H2 className="font-bold" >Discover City Chronicles</H2>
        <H2 className="font-bold" >Unveiling the Best Stories from Around the Globe</H2>
        </div>
        <div className="w-full flex  relative flex-col items-center justify-center gap-9" >
{data?.map((doc , index)=><div   className={cn("flex w-full relative items-center " , {"justify-end" : index % 2 ===0 , "justify-start" : index % 2  === 1 } ) } ><ValuedPostsCard  title={doc.valuedPost.title} descreption={doc.valuedPost.overviewArticles || "" } imgSrc={sanityImageUrl(doc.valuedPost.image as object)} /></div>)}
        </div>
    </div>
}