import { appConfig } from "@/config";
import { Title } from "@/ui/title";
import { H2, H3, P } from "@/ui/typography";

export default function PrivacyPolicy(){
    return <div className="min-h-screen w-full flex flex-col items-center" >
        <Title title="Privacy Policy" className="px-3" descreption="Please read our Privacy Policy to understand how we protect your personal information and data" />
        <div className="w-full laptop:w-[1000px] px-3  my-7 flex flex-col gap-2" >

<H3>        Last Updated: </H3>

<P> Thank you for choosing to use [Your App Name]! Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our web app.</P>


<H2>1. Information We Collect</H2>

<P>1.1. Personal Information: When you create an account, we may collect personal information such as your name, email address, and other account details.</P>

<P>1.2. User-Generated Content: If you use our app&apos;s features, such as liking, disliking, commenting, and saving cities, we may collect and store the content you provide.</P>

<P>1.3. Usage Information: We may collect data about how you use our app, including your interactions with the app&apos;s features, the cities you search for, and your preferences.</P>

<P>1.4. Log Data: When you access our app, we may automatically collect log data, including your device&apos;s IP address, browser type, and operating system.</P>

<H2>2. How We Use Your Information</H2>

<P>2.1. Personalization: We use your information to personalize your experience on the app, such as recommending cities that match your preferences.</P>

<P>2.2. Communication: We may send you notifications and updates related to the app, including account-related information and news about our services.</P>

<P>2.3. User-Generated Content: Your user-generated content, such as comments and city preferences, may be displayed on the app to enhance the user experience.</P>

<H2>3. Sharing Your Information</H2>

<P>3.1. Third-Party Services: We may use third-party services to support our app, and these services may have access to your information for purposes such as analytics and customer support.</P>

<P>3.2. Legal Requirements: We may disclose your information if required by law or to protect our rights, privacy, safety, or the safety of others.</P>

<H2>4. Security</H2>

<P>4.1. We take reasonable measures to protect your information from unauthorized access and maintain its confidentiality.</P>

<H2>5. Your Choices</H2>

<P>5.1. You have the right to access, update, or delete your personal information. You can do so by accessing your account settings or contacting us.</P>

<P>5.2. You can choose not to receive communications from us by adjusting your notification preferences.</P>

<H2>6. Cookies and Tracking Technologies</H2>

<P>6.1. We use cookies and similar tracking technologies to collect data about your use of our app. You can manage your cookie preferences through your browser settings.</P>

<H2>7. Children&apos;s Privacy</H2>

<P>7.1. Our app is not intended for children under the age of 13, and we do not knowingly collect personal information from children.</P>

<H2>8. Changes to the Privacy Policy</H2>

<P>8.1. We may update this Privacy Policy to reflect changes in our data practices. Any changes will be effective immediately upon posting the updated policy on the app.</P>

<H2>9. Contact Information</H2>

<P>If you have any questions or concerns regarding this Privacy Policy, please contact us at [contact email].</P>

<P>By using [Your App Name], you consent to the terms outlined in this Privacy Policy. We are dedicated to safeguarding your privacy and ensuring a secure and enjoyable experience while using our app.</P>

<P>Thank you for choosing [Your App Name]!</P>
</div>
    </div>
}