import { blogPosts } from "@/constants/blog/blog"
import { Title } from "@/ui/title"
import { H2, H3, P } from "@/ui/typography"
import { ErrorContainer } from "@/ui/errors"
import { Page } from "@/ui/containers"



 const BlogPage = ({params: {title}} : {params :{title: string}})=>{

    const decodedTitle = decodeURIComponent(title)
    const blogPostInfo = blogPosts.find(post=>post.title === decodedTitle)

if(!blogPostInfo) return    <Page className="items-center justify-center" >
 <ErrorContainer title="Sorry!" descreption="can not find a post with the specified title" />
 </Page>
return <Page  >
    <Title title={blogPostInfo?.title} descreption={blogPostInfo.descreption} />
    <img style={{height : '500px', width : '90%'  }} src={blogPostInfo.image} />
<div style={{width : '90%'}} className="flex flex-col gap-5" >    {
       blogPostInfo.articles.map(blogPost=><div >
            <H2>{blogPost.title}</H2>
            {
                blogPost.paragraphs.map(paragraph=>{
             return        <P>
                        {paragraph}
                    </P>
                })
            }
        </div>)
    }</div>
</Page>
}


export default BlogPage