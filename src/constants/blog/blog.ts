import { osakaPost } from "./posts/osaka"

export type Article ={
    title: string ,
    paragraphs: string[]
}

export type BlogPost = {
    title : string ,
    descreption? : string ,
    image? : string 
    articles : Article[]
}

export type  BlogPosts = BlogPost[] 


export const  blogPosts = [osakaPost]