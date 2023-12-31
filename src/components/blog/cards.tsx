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
    const imageSrc : string  = typeof postInfo.image === "string" ? postInfo.image :( typeof postInfo.image === "object" ?  (sanityImageUrl(postInfo.image)  || appConfig.imageNotFound) : appConfig.imageNotFound   )
    return <div   className="flex w-full min-h-fit rounded-2xl laptop:h-[385px] flex-col laptop:w-[270px]   bg-white shadow-lg"  >
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

export const RecommendedBlogPostCard : React.FC <BlogPost> = (blogPostInfo) =>{
    return <Link href={`${appConfig.links.blog}/${blogPostInfo.title}`} className="flex w-[300px] h-[300px] shadow-xl text-white cursor-pointer px-9 py-4 flex-col items-center justify-center gap-5  relative rounded-2xl" >
        <img src={ (blogPostInfo?.image && sanityImageUrl(blogPostInfo.image as object ) )  || appConfig.imageNotFound } className="absolute -z-10 w-full  top-0 left-0 h-full rounded-2xl" />
        <div className="w-full z-0 h-full  rounded-3xl top-0 left-0 absolute darkOverlay" ></div>
        <H3 className="relative z-10 text-center font-semibold" >{blogPostInfo?.title}</H3>
        <P className="relative z-10 text-center"  >{blogPostInfo?.descreption}</P>
    </Link>
}