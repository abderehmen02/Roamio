import { BlogPostCard, RecommendedBlogPostCard } from "@/components/blog/cards";
import { BlogFilterCard } from "@/components/blog/filter";
import { BlogHero } from "@/components/blog/hero";
import { appConfig } from "@/config";
import { blogPageDescreptions } from "@/config/blog";
import { blogPosts } from "@/constants/blog/blog";
import { DisplayAnimation } from "@/providers/animation";
import { Page, PageBody } from "@/ui/containers";
import { Title } from "@/ui/title";
// import { getSanityPosts } from "@/utils/blogPosts";
import { RecommendedForYou } from "./_components/recomanded";



// export const revalidate = 1

export default async  function BLogPage ({
    // params,
    // searchParams,
  }: {
    // params: { slug: string },
    // searchParams?: { [key: string]: string | string[] | undefined },
  }){
    // const sanityPosts = await getSanityPosts() || []
    let allPosts = blogPosts
    // const category = searchParams && searchParams[appConfig.blog.blogCategoryQueryName]
    // if(category)allPosts =    allPosts.filter(post=>post.category === category)
return     <Page className="flex items-center  flex-col"  >
        <Title  titleClassName="text-primaryDark"  title="Roamio Blog" descreption={blogPageDescreptions[ Math.floor( Math.random() * 6 )]} />
        <PageBody className="flex  flex-col" >
        <BlogHero/>
        <DisplayAnimation className="w-full " delay={0.3} >
        <div className="flex flex-col laptop:flex-row w-full  justify-between  gap-4 " ><BlogFilterCard category={ undefined} />
             <div key="bostsArrayInTheBlogPage" className="flex gap-2  flex-row items-center justify-center w-fit laptop:w-full flex-wrap" >{allPosts.map((post , index )=><DisplayAnimation className="w-fit" key={post.title} delay={(index  + 2) * 0.2} ><BlogPostCard  key={post.title} {...post} /></DisplayAnimation>)}</div>
        </div>
        </DisplayAnimation>
        {/* <RecommendedForYou/> */}
        </PageBody>
    </Page>
}