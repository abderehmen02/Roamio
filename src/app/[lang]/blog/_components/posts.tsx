"use client"
import { BlogPostCard } from "@/components/blog/cards"
import { appConfig } from "@/config"
import { BlogPost } from "@/constants/blog/blog"
import { DisplayAnimation } from "@/providers/animation"
import { useSearchParams } from "next/navigation"
import React from "react"

export const BlogPosts: React.FC<{blogPosts : BlogPost[]}> = ({blogPosts})=>{
    const searchParams = useSearchParams()
    const category = searchParams?.get(appConfig.blog.blogCategoryQueryName)
    
    return              <div key="bostsArrayInTheBlogPage" className="flex gap-2  flex-row items-center justify-center w-fit laptop:w-full flex-wrap" >{blogPosts.filter(post=>{if(!category) return true ;
    else {return category === post.category} }).map((post , index )=><DisplayAnimation className="w-fit" key={post.title} delay={(index  + 2) * 0.2} ><BlogPostCard  key={post.title} {...post} /></DisplayAnimation>)}</div>

}