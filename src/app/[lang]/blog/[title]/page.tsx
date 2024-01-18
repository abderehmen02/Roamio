import { BlogPost, blogPosts } from "@/constants/blog/blog"
import { Title } from "@/ui/title"
import { H2, H3, P } from "@/ui/typography"
import { ErrorContainer } from "@/ui/errors"
import { Page } from "@/ui/containers"
import { getSanityPostByTitle, sanityImageUrl } from "@/utils/blogPosts"
import { appConfig } from "@/config"







 const BlogPage = async  ({params: {title}} : {params :{title: string}})=>{

    const decodedTitle = decodeURIComponent(title)
    let blogPostInfo = blogPosts.find(post=>post.title === decodedTitle)
     if(!blogPostInfo) blogPostInfo = await getSanityPostByTitle(decodedTitle)
if(!blogPostInfo) return    <Page className="items-center justify-center" >
 <ErrorContainer title="Sorry!" descreption="can not find a post with the specified title" />
 </Page>

const imageSrc = typeof blogPostInfo.image === "string" ? blogPostInfo.image : (typeof blogPostInfo.image === "object" ? sanityImageUrl(blogPostInfo.image) : appConfig.imageNotFound )


return <Page  >
    <Title title={blogPostInfo?.title} descreption={blogPostInfo.descreption} />
    <img alt={blogPostInfo.title} style={{height : '500px', width : '90%'  }} src={imageSrc} />
<div style={{width : '90%'}} className="flex flex-col gap-5" >    {
       blogPostInfo.articles.map(blogPost=><div key={blogPost.title} >
            <H2>{blogPost.title}</H2>
            {
                blogPost.paragraphs.map(paragraph=>{
             return        <P key={paragraph} >
                        {paragraph}
                    </P>
                })
            }
        </div>)
    }</div>
</Page>
}


export default BlogPage