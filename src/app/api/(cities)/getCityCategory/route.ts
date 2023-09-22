import { CityDb, cityModal } from "@/db/models/city"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { Categories } from "@/types/prefrences"
import { StatusCodes } from "http-status-codes"





const modernCities = [
    'Tokyo', 'Seoul', 'Shanghai', 'Beijing', 'Hong Kong', 'Singapore', 'Dubai', 'Sydney', 'Mumbai', 'Bangalore',
    'San Francisco', 'Los Angeles', 'Chicago', 'Toronto', 'New York City', 'London', 'Paris', 'Amsterdam', 'Berlin',
    'Munich', 'Copenhagen', 'Stockholm', 'Helsinki', 'Oslo', 'Zurich', 'Melbourne', 'Brisbane', 'Toronto', 'Montreal',
    'Amman', 'Santiago', 'Buenos Aires', 'São Paulo', 'Manila', 'Kuala Lumpur', 'Istanbul', 'Cologne', 'Dubrovnik',
    'Budapest', 'Vienna', 'Lisbon', 'Prague', 'Moscow', 'Bangkok', 'Rome', 'Barcelona', 'Warsaw', 'Brussels', 'Ljubljana',
    'Tallinn', 'Kraków', 'Nairobi', 'Auckland', 'Reykjavik', 'Cape Town'
  ]
  
  
  
  
export const GET = asyncWrapperApi(async ()=>{

const cities = await cityModal().find({categories: {$in : [Categories.Nature]}})

// const cities = []
// for(let i =  0 ; i< modernCities.length ; i++){
// const city = await cityModal().findOne({name : modernCities[i]})
// const city = await cityModal().findOneAndUpdate({name : restCities[i]} , {$pull : {categories: Categories.Modern}} , {new : true} ) 
// const city = await  cityModal().findOneAndUpdate({name : modernCities[i]} , {$push : {categories :{ name : Categories.Modern , position : i  }}} , {new : true } )
// cities.push([city.name , city.categories] )
// }
console.log(cities.map(city=>city.name) )
// console.log(cities)
return apiResponse(StatusCodes.CREATED , JSON.stringify({ cities } ))      
   })













 // const mostVisitedCities =     [
//         "Paris",
//         "New York City",
//         "Tokyo",
//         "Bangkok",
//         "Dubai",
//         "London",
//         "Los Angeles",
//         "Las Vegas",
//         "San Francisco",
//         "São Paulo",
//         "Rio de Janeiro",
//         "Amsterdam",
//         "Barcelona",
//         "Toronto",
//         "Mumbai",
//         "Sydney",
//         "Singapore",
//         "Hong Kong",
//         "Shanghai",
//         "Mexico City",
//         "Moscow",
//         "Chicago",
//         "Miami",
//         "Berlin",
//         "New Orleans",
//         "Montreal",
//         "Cancún",
//         "Bogotá",
//         "Sao Paulo",
//         "Bogota",
//         "San Diego",
//         "Jakarta",
//         "Manila",
//         "Hanoi",
//         "Kuala Lumpur",
//         "Lima",
//         "Vancouver",
//         "San Jose",
//         "Buenos Aires",
//         "Melbourne",
//         "Auckland",
//         "Madrid",
//         "Osaka",
//         "Helsinki",
//         "Zurich",
//         "Copenhagen",
//         "Stockholm",
//         "Oslo",
//         "Prague",
//         "Warsaw",
//         "Vienna",
//         "Brussels",
//         "Dublin",
//         "Edinburgh",
//         "Athens",
//         "Rome",
//         "Lisbon",
//         "Istanbul",
//         "Cairo",
//         "Cape Town",
//         "Johannesburg",
//         "Nairobi",
//         "Marrakech",
//         "Casablanca",
//         "Tunis",
//         "Lagos",
//         "Accra",
//         "Seoul",
//         "Munich",
//         "San Paulo",
//         "Riyadh",
//         "Taipei",
//         "Bangalore",
//         "Kraków",
//         "New York_City",
//         "St. Petersburg"
//     ]
  




// const historicalCities = [
//     'Rome', 'Cairo', 'Athens', 'Kyoto', 'Machu Picchu', 'Jerusalem',
//     'Istanbul', 'Baghdad', 'Beijing', 'Varanasi', 'Cusco', 'Jerash',
//     'Luxor', 'Marrakech', 'Venice', 'Cologne', 'Dubrovnik', 'Salzburg',
//     'Seville', 'Krakow', 'Budapest', 'Fez', 'Salamanca', 'Antwerp',
//     'Toledo', 'Granada', 'Segovia', 'Dublin', 'Bruges', 'Agra',
//     'Vienna', 'Florence', 'Ravenna', 'Avignon', 'Oxford', 'Troy',
//     'Pisa', 'Ephesus', 'Verona', 'Cambridge', 'Suzhou', 'Nara',
//     'Sintra', 'Eger', 'Aix-en-Provence', 'Plovdiv', 'Split', 'Mostar',
//     'Strasbourg', 'Bologna', 'Lübeck', 'Heidelberg', 'Porto', 'Lviv',
//     'York', 'Sarajevo', 'Pécs', 'Leiden', 'Delft'
//   ]
