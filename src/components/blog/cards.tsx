import { BlogPost } from "@/constants/blog/blog"
import { TextButton } from "@/ui/buttons"
import { Title } from "@/ui/title"
import { P } from "@/ui/typography"
import Link from "next/link"

export const BlogPostCard : React.FC<BlogPost> = (postInfo)=>{
    return <div className="flex flex-col w-[350px] bg-white shadow-lg"  >
<img src={postInfo.image} style={{width : '100%' , height : '200px'}} />
<div className="flex flex-col py-5 gap-4 px-4" >
<Title descreptionClassName="text-md "  className="gap-1 w-full" titleClassName="text-xl leading-6 text-start " title={postInfo.title} descreption={postInfo.descreption} />
<P>
{postInfo.overviewArticles}
</P>
<Link href={"/"  + postInfo.title}  ><TextButton className="w-full"  >See More</TextButton></Link>
</div>
    </div>
}