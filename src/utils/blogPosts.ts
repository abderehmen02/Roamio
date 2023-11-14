import { BlogPosts } from '@/constants/blog/blog'
import {createClient} from '@sanity/client'
import { toast } from 'sonner'

export const client = createClient({
  projectId: '8egvcp45',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getSanityPosts()  : Promise<BlogPosts | void> {
  const posts = await client.fetch('*')
  if(!posts) return console.log("can not get posts from sanity!!")
  return posts
}

