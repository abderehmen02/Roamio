import { appConfig } from "@/config"
import { BlogPost } from "@/constants/blog/blog"
import { ButtonsSizes, TextButton } from "@/ui/buttons"
import { Title } from "@/ui/title"
import { sanityImageUrl } from "@/utils/blogPosts"
import Link from "next/link"
import { H2, H3, P } from "@/ui/typography"
import React from "react"
import { DisplayAnimation } from "@/providers/animation"
import { cn } from "@/lib/tailwind"
import { TypeAnimationProvider } from "@/providers/animation/typing"






export const BlogPostCard : React.FC<BlogPost> = (postInfo)=>{
    const imageSrc : string  = typeof postInfo.image === "string" ? postInfo.image :( typeof postInfo.image === "object" ?  sanityImageUrl(postInfo.image) : appConfig.imageNotFound   )
    return <div style={{height : '385px'}}  className="flex  min-h-fit rounded-2xl  flex-col w-[270px]   bg-white shadow-lg"  >
<img src={imageSrc} className="rounded-t-2xl" style={{width : '100%' , height : '200px'}} />
<div className="flex flex-col py-5 gap-2 px-4 h-full justify-between"  >
<Title descreptionClassName="text-start text-sm"  className="gap-1 w-full" titleClassName="text-lg text-start w-full leading-6  " title={postInfo.title} descreption={postInfo.descreption} />
{/* <P>
{postInfo.overviewArticles}
</P> */}
<Link href={appConfig.links.blog + '/'  + postInfo.title}  ><TextButton size={ButtonsSizes.medium} className="w-full"  >See More</TextButton></Link>
</div>
    </div>
}




export const BlogHeroCard : React.FC<{title :string, descreption : string , className?: string , titleClassName?: string , descreptionClassName? : string}> = ({title , className , descreption, titleClassName , descreptionClassName })=>{
    return     <div className={cn("flex flex-col  gap-5 py-8 w-full bg-stone-900 px-7  rounded-lg text-white" , className )} >
        <H3 className={titleClassName} >{title}</H3>
        <P className={descreptionClassName} >{descreption}</P>
    </div>
    }  