import { BlogPost, BlogPosts } from '@/constants/blog/blog'
import Picosanity from 'picosanity'
import { toast } from 'sonner'
import imageUrlBuilder from "@sanity/image-url"
export const client = new Picosanity({
  projectId: '8egvcp45',
  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache
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
return builder.image(SanityImage)?.url()
}



export const getSanityPostByTitle = async (title : string) : Promise<BlogPost |undefined> =>{
  
  const post = await client.fetch(`*[_type == "post" && title == "${title}"][0]` )
  if(!post) { console.log("can not get the post from sanity!!") 
return 
}
  return post

}

export const getSanityValuedPosts = async () : Promise<{valuedPost: BlogPost}[] |undefined> =>{
  
  const valuedPosts = await client.fetch('*[_type == "valuedPost"]{valuedPost->}' )
  if(!valuedPosts) { console.log("can not get the valued posts  from sanity!!") 
return 
}
  return valuedPosts

}

export const getRecommendedPosts = async () : Promise<BlogPost[] |undefined> =>{
  
  const recommendedPosts = await client.fetch('*[_type == "recommendedPost"]{recommendedPost->}' )
  if(!recommendedPosts) { console.log("can not get the recomanded posts  from sanity!!") 
return 
}
  return recommendedPosts.length &&  recommendedPosts.map((item : any ) => item && item.recommendedPost)

}