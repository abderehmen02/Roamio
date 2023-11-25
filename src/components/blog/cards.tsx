import { appConfig } from "@/config"
import { BlogPost } from "@/constants/blog/blog"
import { ButtonsSizes, TextButton } from "@/ui/buttons"
import { Title } from "@/ui/title"
import { P } from "@/ui/typography"
import { sanityImageUrl } from "@/utils/blogPosts"
import Link from "next/link"

export const BlogPostCard : React.FC<BlogPost> = (postInfo)=>{
    const imageSrc : string  = typeof postInfo.image === "string" ? postInfo.image :( typeof postInfo.image === "object" ?  sanityImageUrl(postInfo.image) : appConfig.imageNotFound   )
    return <div style={{height : '385px'}}  className="flex min-h-fit rounded-2xl  flex-col w-[350px]   bg-white shadow-lg"  >
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