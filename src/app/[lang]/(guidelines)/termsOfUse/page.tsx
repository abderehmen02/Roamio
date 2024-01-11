import { appConfig } from "@/config";
import { Page } from "@/ui/containers";
import { Title } from "@/ui/title";
import { H2, H3, P } from "@/ui/typography";

export default function TermsOfUse(){
    return <Page style={{maxWidth :"1200px"}} >
<Title title="Terms of use" descreption={`Please read our Terms of Use to understand the rules and guidelines for using ${appConfig.name}`} />
<div className="w-full  laptop:my-7 flex flex-col gap-2" >
<H3>Last Updated: 1st October 2022</H3>
<H2  >Welcome to {appConfig.name}!</H2>

<P>Please read these Terms of Use carefully before using our web app. By accessing or using our app, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our app.</P>
<H2>1. Acceptance of Terms</H2>

<P>1.1. By using our web app, you confirm that you have read, understood, and agreed to be bound by these Terms of Use.</P>

<P>1.2. If you are using our app on behalf of a business or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms of Use.</P>

<H2>2. User Accounts</H2>

<P>2.1. You may create an account on our app to access additional features, such as liking, disliking, commenting, and saving cities.</P>

<P>2.2. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</P>

<P>2.3. You must provide accurate and complete information when creating your account.</P>

<P>2.4. If you choose to create an account, you agree to receive notifications and updates related to our app.</P>

<H2>3. Use of the App</H2>

<P>3.1. You may use our app to search for cities based on your preferences, view blog posts, and access other features provided by the app.</P>

<P>3.2. You may not use our app for any unlawful or prohibited purposes, including but not limited to:</P>

<P>Posting or transmitting any content that is harmful, offensive, or violates any applicable laws.
Attempting to gain unauthorized access to our app&apos;s systems or user accounts.
Interfering with the proper functioning of the app or its services.</P>
<H2>4. Liking, Disliking, Commenting, and Saving Cities</H2>

<P>4.1. If you have an account, you may like, dislike, comment on, and save cities.</P>

<P>4.2. Your use of these features must comply with our content guidelines and should be respectful and relevant.</P>

<P>4.3. We reserve the right to remove or restrict access to content that violates our guidelines or these Terms of Use.</P>

<H2>5. Content Ownership</H2>

<P>5.1. You retain ownership of any content you post on the app, including comments and user-generated content.</P>

<P>5.2. By posting content on the app, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display your content for the purpose of operating and promoting the app.</P>

<H2>6. Blog Posts</H2>

<P>6.1. Our app may contain blog posts or articles about cities, places, and experiences. These blog posts are for informational purposes only.</P>

<P>6.2. We do not endorse or guarantee the accuracy of the information provided in blog posts.</P>

<H2>7. Privacy Policy</H2>

<P>7.1. Your use of the app is also governed by our Privacy Policy, which can be found [link to privacy policy]. Please review the Privacy Policy to understand how we collect, use, and protect your personal information.</P>

<H2>8. Termination</H2>

<P>8.1. We reserve the right to terminate or suspend your account and access to our app at our discretion, without notice, if you violate these Terms of Use or engage in any behavior that we deem to be harmful to other users or the app.</P>

<H2>9. Changes to Terms of Use</H2>

<P>9.1. We may update these Terms of Use from time to time. Any changes will be effective immediately upon posting the updated terms on the app.</P>

<H2>10. Contact Information</H2>

<P>If you have any questions or concerns regarding these Terms of Use, please contact us at [contact email].</P>

<P>Thank you for using [Your App Name]! We hope you enjoy exploring cities and sharing your experiences with us.</P>
</div>
</Page>
}