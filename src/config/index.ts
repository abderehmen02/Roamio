enum modes {
    DEVELOPMENT ,
    PRODUCTION
}


const mode= process.env.NODE_ENV   == "development"  ? modes.DEVELOPMENT : modes.PRODUCTION  
const developmentUrl = "http://localhost:3000/"
const productionUrl =   process.env.APP_URL
export const appConfig = {
    dateFormate : 'MM/dd/yyyy' ,
    name : 'Roamio' ,
    logoImage : "/logo.png" ,
        emailPassword : process.env.GMAIL_PASSWORD ,
    email: process.env.GMAIL_EMAIL ,
    personalEmail : process.env.PERSONAL_EMAIL , 
    unknownPersonImg: '/unknownProfile.webp' ,
    cityCashingTime : 86400000 , //one day 
    sendGridMail : process.env.GMAIL_NAME ,
    mode  ,
    unknownPersonImage : "/unknown-person.jpg" ,
    links : {
        savedCities : '/savedCities' ,
        blog: '/blog' ,
        notes: '/notes' ,
        login : "/login" ,
        signUp : "/signUp" ,
        findCities : '/findCities'  , 
        termsOfUse : '/termsOfUse'  ,
        primacyPolicy : '/privacyPolicy' ,
        resetPasswordEmailSent : "/resetPasswordEmailSent" ,
        contact: '/contact' ,
        home: '/' ,
        messages : {
            tokenExpired: "/tokenExpire"
        } ,
           } ,
           storage : {
            findCitiesUserGuided : "findCitiesUserGuided"
        } ,
    url : process.env.APP_URL
} as const