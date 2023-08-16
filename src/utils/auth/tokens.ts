import { appConfig } from '@/config';
import { authConfig } from '@/config/auth'
import { refreshTokenModel } from '@/db/models/refreshToken'
import { addDays, format } from 'date-fns'
import jwt from 'jsonwebtoken'
const { v4: uuidv4 } = require("uuid");




const JwtSignature = process.env.JWT_SECRET_KEY

export const generateToken : (data : string | object) =>string =(data)=>{
if(!JwtSignature) throw new Error("No jwt signature in the envirement variables")
return jwt.sign(data   ,  JwtSignature  , {expiresIn : authConfig.tokenExpiresIn} )
}

export const generateRefreshToken : (userId  : string)=>Promise<string> = async (userId) =>{
const expirationDate =  format( addDays( new Date() , authConfig.jwtRefreshDays ), appConfig.dateFormate)
let token = uuidv4();
const dbRefreshToken = await  refreshTokenModel().create({userId  , token   , expireIn : expirationDate })   
if(dbRefreshToken?.token) return dbRefreshToken
throw new Error("Can not get the refresh token from the database") 
}