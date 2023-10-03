import { BlogPost } from "@/constants/blog/blog"
import { Title } from "@/ui/title"
import { P } from "@/ui/typography"

export const BlogPostCard : React.FC<BlogPost> = (postInfo)=>{
    return <div className="flex flex-col w-[350px]"  >
<img src={postInfo.image} style={{width : '100px' , height : '200px'}} />
<div className="flex flex-col" >
<Title descreptionClassName="text-md text-start" titleClassName="text-xl leading-6 text-start " title={postInfo.title} descreption={postInfo.descreption} />
<P>
{postInfo.descreption}
</P>
</div>
    </div>
}