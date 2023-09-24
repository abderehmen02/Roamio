enum modes {
    DEVELOPMENT ,
    PRODUCTION
}


const mode= process.env.NODE_ENV   == "development"  ? modes.DEVELOPMENT : modes.PRODUCTION  
const developmentUrl = "http://localhost:3000/"
const productionUrl = "http://roamio.fr/"
export const appConfig = {
    dateFormate : 'MM/dd/yyyy' ,
    name : 'Roamio' ,
        emailPassword : process.env.GMAIL_PASSWORD ,
    email: process.env.GMAIL_NAME , 
    unknownPersonImg: '/unknownProfile.webp' ,
    cityCashingTime : 86400000 , //one day 
    sendGridMail : process.env.GMAIL_NAME ,
    mode  ,
    links : {
        savedCities : '/savedCities' ,
        
    } ,
    url : mode  === modes.DEVELOPMENT ? developmentUrl : productionUrl
}