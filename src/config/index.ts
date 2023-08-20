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
    mode  ,
    url : mode  === modes.DEVELOPMENT ? developmentUrl : productionUrl
}