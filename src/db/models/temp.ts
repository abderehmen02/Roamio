import mongoose , {model , mongo, Schema} from "mongoose";




const appUsers = new mongoose.Schema({
    IpAdress: String ,
    searchUsers  : [String] , 
    profile : [{
        name : String ,
        reels : [String]  ,
        posts: [String] ,
        heightLights: [String]  ,
        stories: [String]
     }],
     media : [String]
});
  
