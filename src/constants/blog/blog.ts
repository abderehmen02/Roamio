import { number } from "zod"
import { osakaPost } from "./posts/osaka"

export type Article ={
    title: string ,
    paragraphs: string[]
}

const blogPostCategories = { 
    landmark : 'landmark' ,
    city : 'city' ,
    activity : 'activity' ,
    place : 'place'
}

export const blogPostCategoriesArray = Object.values(blogPostCategories)
export type BlogPostCategory = typeof blogPostCategoriesArray[number]

export type BlogPost = {
    title : string ,
    date : Date ,
    HomeDesktop : boolean ,
    category : BlogPostCategory ,
    HomeMobile : boolean ,
    overviewArticles : string , 
    descreption? : string ,
    image : string |object ,
    articles : Article[]
}

export type  BlogPosts = BlogPost[] 


export const  blogPosts = [osakaPost]