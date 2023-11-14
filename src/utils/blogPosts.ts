import { BlogPost, BlogPosts } from '@/constants/blog/blog'
import {createClient} from '@sanity/client'
import { toast } from 'sonner'
import imageUrlBuilder from "@sanity/image-url"
export const client = createClient({
  projectId: '8egvcp45',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getSanityPosts()  : Promise<BlogPosts | void> {
  const posts = await client.fetch('*[_type == "post"]' )
  if(!posts) return console.log("can not get posts from sanity!!")
  return posts
}

const builder = imageUrlBuilder(client)


export const sanityImageUrl = (SanityImage : object)=>{
return builder.image(SanityImage).url()
}



export const getSanityPostByTitle = async (title : string) : Promise<BlogPost |undefined> =>{
  
  const post = await client.fetch(`*[_type == "post" && title == "${title}"][0]` )
  if(!post) { console.log("can not get the post from sanity!!") 
return 
}
  return post

}