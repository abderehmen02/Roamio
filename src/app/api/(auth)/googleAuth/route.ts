
export const GET = (req: Request)=>{
    console.log("getting google auth request")
    const {searchParams} = new URL(req.url)
    const code = searchParams.get("code")
    console.log("code" ,code)
}