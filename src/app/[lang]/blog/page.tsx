import { BlogPostCard } from "@/components/blog/cards";
import { blogPageDescreptions } from "@/config/blog";
import { blogPosts } from "@/constants/blog/blog";
import { Page, PageBody } from "@/ui/containers";
import { Title } from "@/ui/title";

export default function BLogPage (){
return     <Page className="bg-red-600" >
        <Title title="Roamio Blog" descreption={blogPageDescreptions[ Math.floor( Math.random() * 6 )]} />
        <PageBody className="flex-wrap" >
         {blogPosts.map(post=><BlogPostCard {...post} />)}
        </PageBody>
    </Page>
}