import { blogPosts } from "@/constants/blog/blog"
import { Title } from "@/ui/title"
import { H2 } from "@/ui/typography"
import { ErrorContainer } from "@/ui/errors"
import { Page } from "@/ui/containers"



 const BlogPage = ({params: {title}} : {params :{title: string}})=>{
const blogPostInfo = blogPosts.find(post=>post.title === title)
if(!blogPostInfo) return <Page>
    <ErrorContainer title="Sorry!" descreption="can not find a post with the specified title" />
</Page>
return <Page>
    <Title title={blogPostInfo?.title} />
</Page>
}


export default BlogPage