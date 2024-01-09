import { BlogPostCard, RecommendedBlogPostCard } from "@/components/blog/cards";
import { BlogFilterCard } from "@/components/blog/filter";
import { BlogHero } from "@/components/blog/hero";
import { appConfig } from "@/config";
import { blogPageDescreptions } from "@/config/blog";
import { blogPosts } from "@/constants/blog/blog";
import { DisplayAnimation } from "@/providers/animation";
import { Page, PageBody } from "@/ui/containers";
import { Title } from "@/ui/title";
import { getSanityPosts } from "@/utils/blogPosts";
import { RecommendedForYou } from "./_components/recomanded";
import { useSearchParams } from "next/navigation";
import { BlogPosts } from "./_components/posts";



// export const revalidate = 1

export default async  function BLogPage (){
    const sanityPosts = await getSanityPosts() || []
     let allPosts = [...blogPosts  , ...sanityPosts ]

    // if(category)allPosts =    allPosts.filter(post=>post.category === category)
return     <Page className="flex items-center  flex-col"  >
        <Title  titleClassName="text-primaryDark"  title="Roamio Blog" descreption={blogPageDescreptions[ Math.floor( Math.random() * 6 )]} />
        <PageBody className="flex  flex-col" >
        <BlogHero/>
        <DisplayAnimation className="w-full " delay={0.3} >
        <div className="flex flex-col laptop:flex-row w-full  justify-between  gap-4 " ><BlogFilterCard category={ undefined} />
        <BlogPosts blogPosts={allPosts} />
        </div>
        </DisplayAnimation>
        <RecommendedForYou/>
        </PageBody>
    </Page>
}