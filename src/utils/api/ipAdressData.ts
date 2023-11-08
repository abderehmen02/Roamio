import axios from "axios"
import countryLookUp from 'country-code-lookup'

export const getIpAdressData = async (ipAdress : string)=>{
    const apiData = await axios.get(`https://ipinfo.io/${ipAdress}/json`)
    return apiData.data
}