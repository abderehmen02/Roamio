import { BlogPostCard } from "@/components/blog/cards";
import { BlogFilterCard } from "@/components/blog/filter";
import { BlogHero } from "@/components/blog/hero";
import { appConfig } from "@/config";
import { blogPageDescreptions } from "@/config/blog";
import { blogPosts } from "@/constants/blog/blog";
import { DisplayAnimation } from "@/providers/animation";
import { Page, PageBody } from "@/ui/containers";
import { Title } from "@/ui/title";
import { getSanityPosts } from "@/utils/blogPosts";



// export const revalidate = 1

export default async  function BLogPage ({
    params,
    searchParams,
  }: {
    params: { slug: string },
    searchParams?: { [key: string]: string | string[] | undefined },
  }){
    const sanityPosts = await getSanityPosts() || []
    const allPosts = [...sanityPosts , ...blogPosts]
    console.log("query" ,searchParams)
return     <Page className="flex items-center  flex-col"  >
        <Title titleClassName="text-primaryDark" title="Roamio Blog" descreption={blogPageDescreptions[ Math.floor( Math.random() * 6 )]} />
        <PageBody className="flex flex-col" >
        <BlogHero/>
        <DisplayAnimation delay={0.3} >
        <div className="flex  w-full  justify-center  gap-4 " ><BlogFilterCard/>
             <div className="flex gap-2 flex-row w-fit flex-wrap" >{allPosts.map((post , index )=><DisplayAnimation delay={(index  + 2) * 0.2} ><BlogPostCard  key={post.title} {...post} /></DisplayAnimation>)}</div>
        </div>
        </DisplayAnimation>
        </PageBody>
    </Page>
}