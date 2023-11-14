import { osakaPost } from "./posts/osaka"

export type Article ={
    title: string ,
    paragraphs: string[]
}

export type BlogPost = {
    title : string ,
    date : Date ,
    HomeDesktop : boolean ,
    HomeMobile : boolean ,
    overviewArticles : string , 
    descreption? : string ,
    image : string |object ,
    articles : Article[]
}

export type  BlogPosts = BlogPost[] 


export const  blogPosts = [osakaPost]