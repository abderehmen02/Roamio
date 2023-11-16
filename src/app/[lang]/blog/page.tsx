import { BlogPostCard } from "@/components/blog/cards";
import { blogPageDescreptions } from "@/config/blog";
import { blogPosts } from "@/constants/blog/blog";
import { Page, PageBody } from "@/ui/containers";
import { Title } from "@/ui/title";
import { getSanityPosts } from "@/utils/blogPosts";



export const revalidate = 1

export default async  function BLogPage (){
    const sanityPosts = await getSanityPosts() || []
    const allPosts = [...sanityPosts , ...blogPosts]
return     <Page className="flex items-center  flex-col"  >
        <Title titleClassName="text-primaryDark" title="Roamio Blog" descreption={blogPageDescreptions[ Math.floor( Math.random() * 6 )]} />
        <PageBody className="flex-wrap" >
         {allPosts.map(post=><BlogPostCard key={post.title} {...post} />)}
        </PageBody>
    </Page>
}