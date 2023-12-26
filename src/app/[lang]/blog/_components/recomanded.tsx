"use client"
import { RecommendedBlogPostCard } from "@/components/blog/cards"
import { appConfig } from "@/config"
import { Title } from "@/ui/title"
import { H2, P } from "@/ui/typography"
import { getRecommendedPosts, sanityImageUrl } from "@/utils/blogPosts"
import { useQuery } from "@tanstack/react-query"
import { toast } from "sonner"

export const RecommendedForYou = ()=>{
    const {data : recommendedPosts , isLoading , isError  } = useQuery({
        queryFn :async  ()=>{
        const recommendedPosts = await  getRecommendedPosts()
        console.log("posts"  , recommendedPosts)
        return recommendedPosts
        },
        onError : ()=>{
            toast.error("Can not get the Recommended blog posts from sanity")
        }
    })
    
    if(isLoading) return  <div>...loading</div>
    return <div className="flex flex-col items-center justify-center py-20" >
    { recommendedPosts?.length && <div className="w-full flex gap-6">
    <div className="flex w-3/12 gap-10 flex-col" >
    <RecommendedBlogPostCard {...recommendedPosts[0]} />
    <RecommendedBlogPostCard {...recommendedPosts[1]} />
    </div>
    <div className="w-1/2 flex flex-col gap-10 items-center" >
    <Title title="Recommended For You" descreption="Explore curated blog posts tailored to your interests and preferences." />

    <div className="w-full h-[500px] flex flex-col relative items-center justify-center text-white gap-8 rounded-4xl" >
        <img  src={ sanityImageUrl(recommendedPosts[2].image as object) || appConfig.imageNotFound}  className="w-full h-full absolute top-0 left-0 -z-10 rounded-2xl"  />
        <div className="absolute w-full h-full top-0 left-0 darkOverlay rounded-2xl  " ></div>
        <Title style={{maxWidth : "400px"}}  titleClassName="text-white " descreptionClassName="text-white" className="relative z-10 gap-4" title={recommendedPosts[2].title}  />
        <P style={{maxWidth : "400px"}} className="relative z-20 text-center" >{recommendedPosts[2].overviewArticles}</P>
    </div>
    <div className="flex gap-9" >
    <RecommendedBlogPostCard {...recommendedPosts[3]} ></RecommendedBlogPostCard>
    <RecommendedBlogPostCard {...recommendedPosts[4]} />
    </div>
     </div>
     <div className="flex w-3/12 gap-10 flex-col" >
    <RecommendedBlogPostCard {...recommendedPosts[5]} />
    <RecommendedBlogPostCard {...recommendedPosts[6]} />
    </div>

    </div>     }
    </div>
}