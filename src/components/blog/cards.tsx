import { BlogPost } from "@/constants/blog/blog"
import { Title } from "@/ui/title"
import { P } from "@/ui/typography"

export const BlogPostCard : React.FC<BlogPost> = (postInfo)=>{
    return <div className="flex flex-col"  >
<img src={postInfo.image} style={{width : '100px' , height : '200px'}} />
<div className="flex flex-col" >
<Title title={postInfo.title} descreption={postInfo.descreption} />
<P>
{postInfo.descreption}
</P>
</div>
    </div>
}