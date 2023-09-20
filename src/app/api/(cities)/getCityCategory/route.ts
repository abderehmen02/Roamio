import { CityDb, cityModal } from "@/db/models/city"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { Categories } from "@/types/prefrences"
import { StatusCodes } from "http-status-codes"

const mostVisitedCities =     [
        "Paris",
        "New York City",
        "Tokyo",
        "Bangkok",
        "Dubai",
        "London",
        "Los Angeles",
        "Las Vegas",
        "San Francisco",
        "São Paulo",
        "Rio de Janeiro",
        "Amsterdam",
        "Barcelona",
        "Toronto",
        "Mumbai",
        "Sydney",
        "Singapore",
        "Hong Kong",
        "Shanghai",
        "Mexico City",
        "Moscow",
        "Chicago",
        "Miami",
        "Berlin",
        "New Orleans",
        "Montreal",
        "Cancún",
        "Bogotá",
        "Sao Paulo",
        "Bogota",
        "San Diego",
        "Jakarta",
        "Manila",
        "Hanoi",
        "Kuala Lumpur",
        "Lima",
        "Vancouver",
        "San Jose",
        "Buenos Aires",
        "Melbourne",
        "Auckland",
        "Madrid",
        "Osaka",
        "Helsinki",
        "Zurich",
        "Copenhagen",
        "Stockholm",
        "Oslo",
        "Prague",
        "Warsaw",
        "Vienna",
        "Brussels",
        "Dublin",
        "Edinburgh",
        "Athens",
        "Rome",
        "Lisbon",
        "Istanbul",
        "Cairo",
        "Cape Town",
        "Johannesburg",
        "Nairobi",
        "Marrakech",
        "Casablanca",
        "Tunis",
        "Lagos",
        "Accra",
        "Seoul",
        "Munich",
        "San Paulo",
        "Riyadh",
        "Taipei",
        "Bangalore",
        "Kraków",
        "New York_City",
        "St. Petersburg"
    ]
export const GET = asyncWrapperApi(async ()=>{
const cities = []
for(let i =  0 ; i< mostVisitedCities.length ; i++){
const city = await  cityModal().findOneAndUpdate({name : mostVisitedCities[i]} , {$push : {categories :{ name : Categories.MostVisited , position : i  }}} , {new : true } )
console.log("city "   , city )
cities.push(city)
}

         return apiResponse(StatusCodes.CREATED , JSON.stringify({  cities} ))      
   })