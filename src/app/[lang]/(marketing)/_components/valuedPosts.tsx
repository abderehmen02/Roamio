"use client"
import { ValuedPostsCard } from "@/components/marketing/cards"
import { ValuedPostsCardSkeleton } from "@/components/skeletons/home/cards"
import { appConfig } from "@/config"
import { cn } from "@/lib/tailwind"
import { H2 } from "@/ui/typography"
import { getSanityValuedPosts, sanityImageUrl } from "@/utils/blogPosts"
import { useMutation, useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { toast } from "sonner"

export const ValuedPosts = ()=>{
    const {data , error , isLoading} = useQuery({queryFn : async ()=>{
        // await new Promise((res )=>{setTimeout(()=>res("continue") , 5000)})
        const valuedPosts = await  getSanityValuedPosts()
        return valuedPosts
    }, 
    onError : (err)=>{
        toast.error("Something wrong! can not get the posts from the server!")
    } ,
})
if(error) return <div>
    Somme Error Happend! please try refreshing the page
</div>
    return <div className="flex  items-start px-6 flex-col  gap-20 justify-center py-28 w-full " >
        <div className="flex flex-col" >
        <H2 className="font-semibold laptpo:font-bold" >Discover City Chronicles</H2>
        <H2 className="font-semibold laptop:font-bold" >Unveiling the Best Stories from Around the Globe</H2>
        </div>
    { isLoading ?<div className="w-full flex  relative flex-col items-center gap-9 justify-center ">
        {[1,2,3].map((item , index)=><div key={item}   className={cn("flex w-full relative items-center " , {"justify-end" : index % 2 ===0 , "justify-start" : index % 2  === 1 } ) } ><ValuedPostsCardSkeleton/></div>)}
        </div> :     <div className="w-full flex   relative flex-col items-center justify-center gap-9" >
{data?.map((doc , index)=><div key={doc.valuedPost.title}  className={cn("flex w-full justify-center relative items-center " , {"laptop:justify-end" : index % 2 ===0 , "laptop:justify-start" : index % 2  === 1 } ) } ><ValuedPostsCard  title={doc.valuedPost?.title} descreption={doc.valuedPost?.overviewArticles || "" } imgSrc={sanityImageUrl(doc.valuedPost?.image as object) || appConfig.imageNotFound } /></div>)}

        </div>}
    </div>
}