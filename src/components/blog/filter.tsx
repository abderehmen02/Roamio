"use client"
import { appConfig } from "@/config";
import { blogPostCategoriesArray } from "@/constants/blog/blog";
import { cn } from "@/lib/tailwind";
import {  PrimaryBtn } from "@/ui/buttons";
import { H3, H4 } from "@/ui/typography";
import Link from "next/link";
import React from "react";

export const BlogFilterCard : React.FC<{category?: string  }> = ({category})=>{
  
return <div className="flex itesm-center bg-secondary text-primary gap-4  justify-start rounded-md h-fit flex-col px-12 py-6 " >
<H3 className="font-bold "  >Filters</H3>
<div className="gap-4 flex flex-col"  >
{
    blogPostCategoriesArray.map(filter=>{
      const searchParams = new URLSearchParams()
      searchParams.set(appConfig.blog.blogCategoryQueryName , filter )
      // console.log("href" , `${appConfig.links.blog}?${appConfig.blog.blogCategoryQueryName}=${filter}`)
      return <Link  key={filter} href={`/en/blog?${searchParams.toString()}` } scroll={false}  > <PrimaryBtn   className={ cn( "w-full  capitalize rounded-lg px-11   text-start bg-white border-primary border-2 text-primary" , {"bg-primary   text-white" : category === filter} )} >{filter}  </PrimaryBtn></Link>
    })
}
</div>
</div>
}