import Link from "next/link";

export default function ErrorPage (){
    return <div>
        Your email is not verified ! please try another account or sign up in our app <Link href="/signUp" > sign up </Link>
    </div>
}