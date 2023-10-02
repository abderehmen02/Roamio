import { CategoryDb, cityModal } from "@/db/models/city"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { festivalCities } from "./static"
import { Categories } from "@/types/prefrences"
import { StatusCodes } from "http-status-codes"




export const GET = asyncWrapperApi(async ()=>{
      let addedCities = 0 ;
         for(let i  = 0 ; i < festivalCities.length ; i++){
         const existCity = await cityModal().findOne({name : festivalCities[i].name})
         if(existCity && existCity.categories?.some((category : CategoryDb )=>category.name === Categories.Festivals ) ) continue ;
         if(existCity  ){ await cityModal().findOneAndUpdate({name : festivalCities[i].name} , { $push: { categories: {name : Categories.Festivals, position : i  }   } , $set: {
            activities: festivalCities[i].activities , 
          }, } ,{new: true})
         }
         else{ await cityModal().create({...festivalCities[i] , landmarks : festivalCities[i].landMarks.map(landmark=>({name :landmark , likes: [] , dislikes: []  , reviews: [] }) ) , categories: [{name : Categories.Festivals, position : i}]  , reviews: [] , likes: [] , dislikes : [] , activities : festivalCities[i].activities  })
         addedCities++ 
      }
         }
         return apiResponse(StatusCodes.CREATED , JSON.stringify({ number : addedCities } ))      
   })



//    const footballCities = [{ name: "Barcelona", country: "Spain", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Sagrada Família", "Park Güell", "Casa Batlló", "La Rambla", "Barri Gòtic (Gothic Quarter)"] },
//   { name: "Madrid", country: "Spain", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Royal Palace of Madrid", "Prado Museum", "Retiro Park", "Puerta del Sol", "Thyssen-Bornemisza Museum"] },
//   { name: "Manchester", country: "United Kingdom", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate", "Rainy"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Old Trafford", "Manchester Cathedral", "John Rylands Library", "Castlefield", "Science and Industry Museum"] },
//   { name: "Liverpool", country: "United Kingdom", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate", "Rainy"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["The Beatles Story", "Anfield Stadium", "Liverpool Cathedral", "Albert Dock", "Royal Liver Building"] },
//   { name: "Milan", country: "Italy", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Milan Cathedral (Duomo di Milano)", "Leonardo da Vinci's Last Supper", "Galleria Vittorio Emanuele II", "Sforza Castle", "Navigli Canals"] },
//   { name: "Turin", country: "Italy", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Mole Antonelliana", "Turin Cathedral (Cattedrale di San Giovanni Battista)", "Piazza Castello", "Egyptian Museum", "Superga Basilica"] },
//   { name: "Munich", country: "Germany", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Marienplatz", "Nymphenburg Palace", "Neuschwanstein Castle", "English Garden", "BMW Museum"] },
//   { name: "Berlin", country: "Germany", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Brandenburg Gate", "Reichstag Building", "Berlin Wall Memorial", "Museum Island", "Pergamon Museum"] },
//   { name: "Paris", country: "France", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Montmartre", "Seine River Cruise"] },
//   { name: "Lisbon", country: "Portugal", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Belém Tower", "Jerónimos Monastery", "Alfama District", "Tram 28", "Lisbon Oceanarium"] },
//   { name: "Amsterdam", country: "Netherlands", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate", "Rainy"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Rijksmuseum", "Anne Frank House", "Van Gogh Museum", "Canal Cruise", "Keukenhof Gardens"] },
//   { name: "Buenos Aires", country: "Argentina", continent: "South America", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["La Boca Neighborhood", "Recoleta Cemetery", "Teatro Colón", "Plaza de Mayo", "Obelisco"] },
//   { name: "Sao Paulo", country: "Brazil", continent: "South America", price: "EXPENSIVE", weathers: ["Tropical", "Rainy"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Avenida Paulista", "Ibirapuera Park", "São Paulo Museum of Art (MASP)", "Liberdade Neighborhood", "São Paulo Cathedral"] },
//   { name: "Rio de Janeiro", country: "Brazil", continent: "South America", price: "EXPENSIVE", weathers: ["Tropical", "Rainy"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana Beach", "Ipanema Beach", "Tijuca Forest"] },
//   { name: "Rome", country: "Italy", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Colosseum", "Roman Forum", "Pantheon", "Trevi Fountain", "Vatican City"] },
//   { name: "Naples", country: "Italy", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Pompeii", "Mount Vesuvius", "Naples National Archaeological Museum", "Castel dell'Ovo", "Spaccanapoli"] },
//   { name: "London", country: "United Kingdom", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate", "Rainy"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Big Ben", "The British Museum", "Buckingham Palace", "Tower Bridge", "Hyde Park"] },
//   { name: "Glasgow", country: "United Kingdom", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate", "Rainy"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Glasgow Cathedral", "Kelvingrove Art Gallery and Museum", "George Square", "Glasgow Science Centre", "Riverside Museum"] },
//   { name: "Porto", country: "Portugal", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Livraria Lello", "Ribeira District", "Porto Cathedral (Sé do Porto)", "Dom Luís I Bridge", "Serralves Foundation"] },
//   { name: "Dortmund", country: "Germany", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Westfalenstadion (Signal Iduna Park)", "Dortmund U-Tower", "Deutsches Fußballmuseum", "Florian Tower (Fernsehturm Dortmund)", "DASA Arbeitswelt Ausstellung"] },
//   { name: "Hamburg", country: "Germany", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Miniatur Wunderland", "Elbphilharmonie Hamburg", "Hamburg Rathaus", "St. Michael's Church (St. Michaelis Kirche)", "Speicherstadt"] },
//   { name: "Athens", country: "Greece", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Acropolis of Athens", "Parthenon", "Plaka Neighborhood", "Ancient Agora of Athens", "National Archaeological Museum"] },
//   { name: "Belgrade", country: "Serbia", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Belgrade Fortress", "St. Sava Temple", "Kalemegdan Park", "Skadarlija", "Nikola Tesla Museum"] },
//   { name: "Zagreb", country: "Croatia", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Zagreb Cathedral", "St. Mark's Church", "Ban Jelačić Square", "Mirogoj Cemetery", "Zagreb City Museum"] },
//   { name: "Warsaw", country: "Poland", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Old Town Warsaw", "Royal Castle, Warsaw", "Wilanów Palace", "Lazienki Park", "Warsaw Uprising Museum"] },
//   { name: "Moscow", country: "Russia", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Red Square", "Kremlin", "Saint Basil's Cathedral", "Bolshoi Theatre", "Gorky Park"] },
//   { name: "Saint Petersburg", country: "Russia", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Hermitage Museum", "Peterhof Palace", "Catherine Palace", "Church of the Savior on Blood", "Saint Isaac's Cathedral"] },
//   { name: "Belo Horizonte", country: "Brazil", continent: "South America", price: "EXPENSIVE", weathers: ["Tropical", "Rainy"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Pampulha Modern Ensemble", "Central Market of Belo Horizonte", "Liberty Palace (Palácio da Liberdade)", "Lourdes Basilica", "Inhotim"] },
//   { name: "Santos", country: "Brazil", continent: "South America", price: "EXPENSIVE", weathers: ["Tropical", "Rainy"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Santos Beaches", "Pelé Museum", "Monte Serrat", "Santos Municipal Orchidarium", "Coffee Museum"] },
//   { name: "Monaco", country: "Monaco", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Monte Carlo Casino", "Prince's Palace of Monaco", "Oceanographic Museum", "Cathedral of Our Lady Immaculate", "Japanese Garden"] },
//   { name: "Lyon", country: "France", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Basilica of Notre-Dame de Fourvière", "Vieux Lyon (Old Lyon)", "Lyon Cathedral", "Traboules of Lyon", "Musée des Confluences"] },
//   { name: "Marseille", country: "France", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Basilique Notre-Dame de la Garde", "Old Port of Marseille", "Marseille Cathedral", "Calanques National Park", "MuCEM (Museum of European and Mediterranean Civilisations)"] },
//   { name: "Bilbao", country: "Spain", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate", "Rainy"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Guggenheim Museum Bilbao", "Bilbao Fine Arts Museum", "San Mamés Stadium", "Casco Viejo (Old Town)", "Vizcaya Bridge"] },
//   { name: "Seville", country: "Spain", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Alcázar of Seville", "Seville Cathedral", "Plaza de España", "Giralda Tower", "Metropol Parasol"] },
//   { name: "Valencia", country: "Spain", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["City of Arts and Sciences", "Valencia Cathedral", "Oceanografic Valencia", "Malvarrosa Beach", "Central Market of Valencia"] },
//   { name: "Izmir", country: "Turkey", continent: "Asia", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Clock Tower (Saat Kulesi)", "Kemeraltı Bazaar", "Kadifekale (Mount Pagus)", "Alsancak", "Konak Square"] },
//   { name: "Thessaloniki", country: "Greece", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["White Tower of Thessaloniki", "Arch of Galerius", "Rotunda of Galerius", "Aristotelous Square", "Thessaloniki Archaeological Museum"] },
//   { name: "Bucharest", country: "Romania", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Palace of the Parliament", "Village Museum", "Arcul de Triumf", "Stavropoleos Monastery", "Herastrau Park"] },
//   { name: "Sofia", country: "Bulgaria", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Alexander Nevsky Cathedral", "Vitosha Mountain", "National Palace of Culture", "Ivan Vazov National Theatre", "Boyana Church"] },
//   { name: "Budapest", country: "Hungary", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], landmarks: ["Buda Castle", "Parliament Building", "Fisherman's Bastion", "Heroes' Square", "Széchenyi Thermal Bath"] },
// ]