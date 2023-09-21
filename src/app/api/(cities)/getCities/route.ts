import { CategoryDb, CityDb, cityModal } from "@/db/models/city"
import { Categories, Category, Price } from "@/types/prefrences"
import { isCityDb } from "@/types/state/cities"
import { apiResponse } from "@/utils/api/nextResponse"
import { asyncWrapperApi } from "@/utils/asyncWrapper"
import { QueryObjParams } from "@/utils/queryCities"





export type getCitiesQueryType =  {categories: Category[] , prices:Price[] , page?: number , name?: string }




function orgnizeCitiesByPosition(cities : CityDb[]  , query : getCitiesQueryType )  {
      let mapCities : CityDb[][] = [] 
      cities.forEach(city=>{
      let categoriesSum = 1
      const possitionSum = city.categories.reduce((acc , category )=>{
          if(!category.name) return acc
          if(query.categories.includes(category?.name))    {
              categoriesSum++
              return acc+category.position }
          return acc
          }, 0)
      if(categoriesSum === 0) return 
      const positionAverage = Math.round( possitionSum / categoriesSum)
      if(!mapCities[positionAverage]) mapCities[positionAverage] = []
      mapCities[positionAverage].push(city)
      })
      return mapCities.reduce((acc  , currArr)=>[...acc , ...currArr]  , [])
        }
  








const sortCities = (cities : CityDb[] , queries : getCitiesQueryType) : CityDb[]=>{
      console.log("cities length"  , cities.length)
      const categories = queries.categories 

      const citiesWithAllCategories = cities.filter(city=>{
return categories.every(category=>city.categories.some(categoryObj=>categoryObj.name === category  ))
      })
      
      const citiesWithAllCategoriesAndNoOtherCategory = citiesWithAllCategories.filter(city=>{
            return city.categories.every(caterogy=>categories.includes(caterogy.name))
      })
      const organizedCitiesWithAllCategoriesAndNoOtherCategory : CityDb[] = orgnizeCitiesByPosition(citiesWithAllCategoriesAndNoOtherCategory , queries )
      const orgnizedCitiesWithAllCategories : CityDb[] = orgnizeCitiesByPosition(citiesWithAllCategories , queries )      // console.log(citiesWithAllCategoriesAndNoOtherCategory.map(city=>[city.name , city.categories.map(category=>category.name) ]))
      const orgnizedCities : CityDb[] = orgnizeCitiesByPosition(cities , queries )
const orgnizedArray : CityDb[] = organizedCitiesWithAllCategoriesAndNoOtherCategory  
orgnizedCitiesWithAllCategories.forEach(item=>{
      if(!orgnizedArray.some(orgnizedArrayItem=>item.name === orgnizedArrayItem.name   )) orgnizedArray.push(item) 
})
orgnizedCities.forEach(item=>{
      if(!orgnizedArray.some(orgnizedArrayItem=>item.name === orgnizedArrayItem.name   )) orgnizedArray.push(item) 
})
console.log("orgnized with all and no other" , organizedCitiesWithAllCategoriesAndNoOtherCategory.length )
console.log("orgnized cities" , orgnizedCities.length )
console.log("orgnized with all " , orgnizedCitiesWithAllCategories.length )

return orgnizedArray
}



export const  getCities  = async ( queries : getCitiesQueryType  ) : Promise<CityDb[]>  =>{
const { categories , prices , page= 1 , name } = queries
  const queryArray = []
  if(!queries.page)queries.page = 1 
  if(Object.keys(queries).length === 0  ) queryArray.push({$or: [{ categories: [Categories.MostVisited] }]})
  if(categories.length) queryArray.push({$or: categories.map(category => ({ "categories.name" : category }))})
  if(prices.length) queryArray.push({$or: prices.map(price => ({ price:  price  })) })
  if(name) queryArray.push({name})
 let cities : CityDb[] = await cityModal().find( {$and: queryArray}).limit( 50)
console.log("cities db length" , cities.length)
const sortedCities = sortCities(cities  , queries)


 return sortedCities
}



export const GET = asyncWrapperApi(async (req )=>{
      const {searchParams} = new URL(req.url)
      const categories  : Category[]  =   JSON.parse(searchParams.get(QueryObjParams.categories) || '[]' )
      const price : Price[]  = JSON.parse(searchParams.get(QueryObjParams.price) || '[]' )
      const page : number = Number(searchParams.get(QueryObjParams.page) || 1)
      const name : string = searchParams.get(QueryObjParams.name) || ""
      let cities : CityDb[] = await  getCities({categories , prices : price  ,page , name } )
      return  apiResponse(200 , cities)
})



































const citiesSample = [
      {
          "_id": "64f9b0bdee91cca1ad7e0583",
          "name": "Rome",
          "price": "EXPENSIVE",
          "country": "Italy",
          "weathers": [
              "Mediterranean",
              "Temperate"
          ],
          "categories": [
              {
                  "0": "F",
                  "1": "o",
                  "2": "o",
                  "3": "t",
                  "4": "b",
                  "5": "a",
                  "6": "l",
                  "7": "l",
                  "_id": "650c428d82489a5e1be53b6f"
              },
              {
                  "0": "R",
                  "1": "o",
                  "2": "m",
                  "3": "a",
                  "4": "n",
                  "5": "t",
                  "6": "i",
                  "7": "c",
                  "_id": "650c428d82489a5e1be53b70"
              },
              {
                  "name": "Most-Visited",
                  "position": 55,
                  "_id": "650b2ed405a7b27b02d030ae"
              },
              {
                  "name": "Historical",
                  "position": 0,
                  "_id": "650c09b2f5b41226c5597c11"
              },
              {
                  "name": "Modern",
                  "position": 44,
                  "_id": "650c1f9e411d42b145280150"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Italian",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Colosseum",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba39053f8531e29e92e"
              },
              {
                  "name": "Roman_Forum",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba39053f8531e29e92f"
              },
              {
                  "name": "Vatican_City",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba39053f8531e29e930"
              }
          ],
          "reviews": [
              {
                  "userId": "64fad6c73dcad6e52bf7573b",
                  "review": "rome , the most historical  city",
                  "_id": "65018d5d9053f8531e29f19d"
              },
              {
                  "userId": "64fad6c73dcad6e52bf7573b",
                  "review": "great experience there",
                  "_id": "6501d27689ca41b92008f59f"
              }
          ],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [
              "64e9dc0ffd3d08c63106705d"
          ],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0bdee91cca1ad7e058a",
          "name": "Cairo",
          "price": "INEXPENSIVE",
          "country": "Egypt",
          "weathers": [
              "Desert",
              "Hot"
          ],
          "categories": [
              {
                  "0": "N",
                  "1": "a",
                  "2": "t",
                  "3": "u",
                  "4": "r",
                  "5": "e",
                  "_id": "650c428d82489a5e1be53b79"
              },
              {
                  "name": "Most-Visited",
                  "position": 58,
                  "_id": "650b2ed405a7b27b02d030ca"
              },
              {
                  "name": "Historical",
                  "position": 1,
                  "_id": "650c09b3f5b41226c5597c1f"
              }
          ],
          "continent": "Africa",
          "languages": [
              "Arabic",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Pyramids_of_Giza",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba39053f8531e29e945"
              },
              {
                  "name": "The_Sphinx",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba39053f8531e29e946"
              },
              {
                  "name": "Khan_el-Khalili",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba39053f8531e29e947"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Winter",
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0bdee91cca1ad7e0591",
          "name": "Athens",
          "price": "MEDIUM",
          "country": "Greece",
          "weathers": [
              "Mediterranean",
              "Temperate"
          ],
          "categories": [
              {
                  "name": "Most-Visited",
                  "position": 54,
                  "_id": "650b2ed405a7b27b02d030a6"
              },
              {
                  "name": "Historical",
                  "position": 2,
                  "_id": "650c09b3f5b41226c5597c27"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Greek",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Acropolis_of_Athens",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba59053f8531e29e98d"
              },
              {
                  "name": "Parthenon",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba59053f8531e29e98e"
              },
              {
                  "name": "Plaka",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba59053f8531e29e98f"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn",
              "Summer"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0bdee91cca1ad7e0598",
          "name": "Kyoto",
          "price": "EXPENSIVE",
          "country": "Japan",
          "weathers": [
              "Temperate",
              "Mild"
          ],
          "categories": [
              {
                  "0": "N",
                  "1": "a",
                  "2": "t",
                  "3": "u",
                  "4": "r",
                  "5": "e",
                  "_id": "650c428d82489a5e1be53b84"
              },
              {
                  "0": "R",
                  "1": "o",
                  "2": "m",
                  "3": "a",
                  "4": "n",
                  "5": "t",
                  "6": "i",
                  "7": "c",
                  "_id": "650c428d82489a5e1be53b85"
              },
              {
                  "name": "Historical",
                  "position": 3,
                  "_id": "650c09b3f5b41226c5597c2f"
              }
          ],
          "continent": "Asia",
          "languages": [
              "Japanese",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Kinkaku-ji",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba79053f8531e29e9d1"
              },
              {
                  "name": "Fushimi_Inari-Taisha",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba79053f8531e29e9d2"
              },
              {
                  "name": "Kiyomizu-dera",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba79053f8531e29e9d3"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn",
              "Cherry_Blossom"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0beee91cca1ad7e059f",
          "name": "Machu Picchu",
          "price": "EXPENSIVE",
          "country": "Peru",
          "weathers": [
              "Tropical",
              "Mountainous"
          ],
          "categories": [
              {
                  "0": "N",
                  "1": "a",
                  "2": "t",
                  "3": "u",
                  "4": "r",
                  "5": "e",
                  "_id": "650c428d82489a5e1be53b8a"
              },
              {
                  "name": "Historical",
                  "position": 4,
                  "_id": "650c09b3f5b41226c5597c37"
              }
          ],
          "continent": "South America",
          "languages": [
              "Spanish",
              "Quechua"
          ],
          "landmarks": [
              {
                  "name": "Machu Picchu",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0beee91cca1ad7e05a0"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Dry Season"
          ],
          "likes": [
              "64fad6c73dcad6e52bf7573b"
          ],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0beee91cca1ad7e05a3",
          "name": "Jerusalem",
          "price": "EXPENSIVE",
          "country": "Israel",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "0": "R",
                  "1": "e",
                  "2": "l",
                  "3": "i",
                  "4": "g",
                  "5": "i",
                  "6": "o",
                  "7": "u",
                  "8": "s",
                  "_id": "650c428d82489a5e1be53b8d"
              },
              {
                  "name": "Historical",
                  "position": 5,
                  "_id": "650c09b3f5b41226c5597c3c"
              }
          ],
          "continent": "Asia",
          "languages": [
              "Hebrew",
              "Arabic",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Western_Wall",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0beee91cca1ad7e05a4"
              },
              {
                  "name": "Dome_of_the_Rock",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0beee91cca1ad7e05a5"
              },
              {
                  "name": "Church_of_the_Holy_Sepulchre",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0beee91cca1ad7e05a6"
              },
              {
                  "name": "Mount_of_Olives",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0beee91cca1ad7e05a7"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [
              "64fad6c73dcad6e52bf7573b"
          ],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0beee91cca1ad7e05aa",
          "name": "Istanbul",
          "price": "MEDIUM",
          "country": "Turkey",
          "weathers": [
              "Temperate",
              "Hot"
          ],
          "categories": [
              {
                  "name": "Most-Visited",
                  "position": 57,
                  "_id": "650b2ed405a7b27b02d030c2"
              },
              {
                  "name": "Historical",
                  "position": 6,
                  "_id": "650c09b3f5b41226c5597c44"
              },
              {
                  "name": "Modern",
                  "position": 35,
                  "_id": "650c1f9d411d42b145280103"
              }
          ],
          "continent": "Asia",
          "languages": [
              "Turkish",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Hagia_Sophia",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba49053f8531e29e961"
              },
              {
                  "name": "Blue_Mosque",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba49053f8531e29e962"
              },
              {
                  "name": "Topkapi_Palace",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba49053f8531e29e963"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn",
              "Summer"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0beee91cca1ad7e05b1",
          "name": "Baghdad",
          "price": "INEXPENSIVE",
          "country": "Iraq",
          "weathers": [
              "Desert"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 7,
                  "_id": "650c09b3f5b41226c5597c4c"
              }
          ],
          "continent": "Asia",
          "languages": [
              "Arabic",
              "Kurdish"
          ],
          "landmarks": [
              {
                  "name": "Al-Mustansiriya_University",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0beee91cca1ad7e05b2"
              },
              {
                  "name": "Al-Mutanabbi_Street",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0beee91cca1ad7e05b3"
              },
              {
                  "name": "Baghdad_Zoo",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0beee91cca1ad7e05b4"
              },
              {
                  "name": "Abbasid_Palace",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0beee91cca1ad7e05b5"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn",
              "Winter"
          ],
          "likes": [],
          "dislikes": [
              "64fad6c73dcad6e52bf7573b"
          ],
          "__v": 0
      },
      {
          "_id": "64f9b0bfee91cca1ad7e05b8",
          "name": "Beijing",
          "price": "MEDIUM",
          "country": "China",
          "weathers": [
              "Temperate",
              "Hot"
          ],
          "categories": [
              {
                  "0": "F",
                  "1": "o",
                  "2": "o",
                  "3": "t",
                  "4": "b",
                  "5": "a",
                  "6": "l",
                  "7": "l",
                  "_id": "650c428d82489a5e1be53b9e"
              },
              {
                  "name": "Historical",
                  "position": 8,
                  "_id": "650c09b4f5b41226c5597c53"
              },
              {
                  "name": "Modern",
                  "position": 3,
                  "_id": "650c1f99411d42b145280000"
              }
          ],
          "continent": "Asia",
          "languages": [
              "Mandarin",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Great_Wall_of_China",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba99053f8531e29ea0d"
              },
              {
                  "name": "Forbidden_City",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba99053f8531e29ea0e"
              },
              {
                  "name": "Temple_of_Heaven",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba99053f8531e29ea0f"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn",
              "Summer"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0bfee91cca1ad7e05bf",
          "name": "Varanasi",
          "price": "INEXPENSIVE",
          "country": "India",
          "weathers": [
              "Tropical"
          ],
          "categories": [
              {
                  "0": "R",
                  "1": "e",
                  "2": "l",
                  "3": "i",
                  "4": "g",
                  "5": "i",
                  "6": "o",
                  "7": "u",
                  "8": "s",
                  "_id": "650c428d82489a5e1be53ba4"
              },
              {
                  "name": "Historical",
                  "position": 9,
                  "_id": "650c09b4f5b41226c5597c5b"
              }
          ],
          "continent": "Asia",
          "languages": [
              "Hindi",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Kashi_Vishwanath_Temple",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0bfee91cca1ad7e05c0"
              },
              {
                  "name": "Sarnath",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0bfee91cca1ad7e05c1"
              },
              {
                  "name": "Ghats_of_Varanasi",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0bfee91cca1ad7e05c2"
              },
              {
                  "name": "Banaras_Hindu_University",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0bfee91cca1ad7e05c3"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Winter",
              "Spring"
          ],
          "likes": [
              "64fad6c73dcad6e52bf7573b"
          ],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0bfee91cca1ad7e05c6",
          "name": "Cusco",
          "price": "MEDIUM",
          "country": "Peru",
          "weathers": [
              "Mountainous"
          ],
          "categories": [
              {
                  "0": "N",
                  "1": "a",
                  "2": "t",
                  "3": "u",
                  "4": "r",
                  "5": "e",
                  "_id": "650c428d82489a5e1be53baa"
              },
              {
                  "name": "Historical",
                  "position": 10,
                  "_id": "650c09b4f5b41226c5597c63"
              }
          ],
          "continent": "South America",
          "languages": [
              "Spanish",
              "Quechua"
          ],
          "landmarks": [
              {
                  "name": "Saksaywaman",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0bfee91cca1ad7e05c7"
              },
              {
                  "name": "Qorikancha",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0bfee91cca1ad7e05c8"
              },
              {
                  "name": "San_Pedro_Market,_Cusco",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0bfee91cca1ad7e05c9"
              },
              {
                  "name": "Cathedral_of_Santo_Domingo,_Cusco",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0bfee91cca1ad7e05ca"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Dry Season"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0bfee91cca1ad7e05cd",
          "name": "Jerash",
          "price": "MEDIUM",
          "country": "Jordan",
          "weathers": [
              "Desert"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 11,
                  "_id": "650c09b4f5b41226c5597c6b"
              }
          ],
          "continent": "Asia",
          "languages": [
              "Arabic",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Jerash_Archaeological_Museum",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0bfee91cca1ad7e05ce"
              },
              {
                  "name": "Hadrian's_Arch,_Jerash",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0bfee91cca1ad7e05cf"
              },
              {
                  "name": "Hippodrome,_Jerash",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0bfee91cca1ad7e05d0"
              },
              {
                  "name": "Oval_Plaza,_Jerash",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0bfee91cca1ad7e05d1"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c0ee91cca1ad7e05d4",
          "name": "Luxor",
          "price": "MEDIUM",
          "country": "Egypt",
          "weathers": [
              "Desert"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 12,
                  "_id": "650c09b4f5b41226c5597c72"
              }
          ],
          "continent": "Africa",
          "languages": [
              "Arabic",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Luxor_Temple",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c0ee91cca1ad7e05d5"
              },
              {
                  "name": "Valley_of_the_Kings",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c0ee91cca1ad7e05d6"
              },
              {
                  "name": "Karnak_Temple",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c0ee91cca1ad7e05d7"
              },
              {
                  "name": "Luxor_Museum",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c0ee91cca1ad7e05d8"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn",
              "Winter"
          ],
          "likes": [
              "64fad6c73dcad6e52bf7573b"
          ],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c0ee91cca1ad7e05db",
          "name": "Marrakech",
          "price": "MEDIUM",
          "country": "Morocco",
          "weathers": [
              "Desert",
              "Hot"
          ],
          "categories": [
              {
                  "0": "N",
                  "1": "a",
                  "2": "t",
                  "3": "u",
                  "4": "r",
                  "5": "e",
                  "_id": "650c428d82489a5e1be53bba"
              },
              {
                  "name": "Most-Visited",
                  "position": 62,
                  "_id": "650b2ed505a7b27b02d030e8"
              },
              {
                  "name": "Historical",
                  "position": 13,
                  "_id": "650c09b4f5b41226c5597c79"
              }
          ],
          "continent": "Africa",
          "languages": [
              "Arabic",
              "French"
          ],
          "landmarks": [
              {
                  "name": "Jardin_Majorelle",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018bac9053f8531e29ea81"
              },
              {
                  "name": "Medina_of_Marrakech",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018bac9053f8531e29ea82"
              },
              {
                  "name": "Bahia_Palace",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018bac9053f8531e29ea83"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn",
              "Winter"
          ],
          "likes": [
              "64e9dc0ffd3d08c63106705d"
          ],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c0ee91cca1ad7e05e2",
          "name": "Venice",
          "price": "EXPENSIVE",
          "country": "Italy",
          "weathers": [
              "Mediterranean",
              "Temperate"
          ],
          "categories": [
              {
                  "0": "F",
                  "1": "o",
                  "2": "o",
                  "3": "t",
                  "4": "b",
                  "5": "a",
                  "6": "l",
                  "7": "l",
                  "_id": "650c428d82489a5e1be53bc0"
              },
              {
                  "0": "R",
                  "1": "o",
                  "2": "m",
                  "3": "a",
                  "4": "n",
                  "5": "t",
                  "6": "i",
                  "7": "c",
                  "_id": "650c428d82489a5e1be53bc1"
              },
              {
                  "name": "Historical",
                  "position": 14,
                  "_id": "650c09b4f5b41226c5597c82"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Italian",
              "English"
          ],
          "landmarks": [
              {
                  "name": "St_Mark’s_Square",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018bac9053f8531e29ea75"
              },
              {
                  "name": "Rialto_Bridge",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018bac9053f8531e29ea76"
              },
              {
                  "name": "Doge’s_Palace",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018bac9053f8531e29ea77"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn",
              "Summer"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c0ee91cca1ad7e05e9",
          "name": "Cologne",
          "price": "MEDIUM",
          "country": "Germany",
          "weathers": [
              "Temperate"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 15,
                  "_id": "650c09b4f5b41226c5597c8a"
              },
              {
                  "name": "Modern",
                  "position": 36,
                  "_id": "650c1f9d411d42b14528010b"
              }
          ],
          "continent": "Europe",
          "languages": [
              "German",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Cologne_Cathedral",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c0ee91cca1ad7e05ea"
              },
              {
                  "name": "Hohenzollern_Bridge",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c0ee91cca1ad7e05eb"
              },
              {
                  "name": "Cologne_Zoo",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c0ee91cca1ad7e05ec"
              },
              {
                  "name": "Ludwig_Museum",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c0ee91cca1ad7e05ed"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [
              "64fad6c73dcad6e52bf7573b"
          ],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c1ee91cca1ad7e05f0",
          "name": "Dubrovnik",
          "price": "EXPENSIVE",
          "country": "Croatia",
          "weathers": [
              "Mediterranean",
              "Hot"
          ],
          "categories": [
              {
                  "0": "N",
                  "1": "a",
                  "2": "t",
                  "3": "u",
                  "4": "r",
                  "5": "e",
                  "_id": "650c428d82489a5e1be53bcc"
              },
              {
                  "name": "Historical",
                  "position": 16,
                  "_id": "650c09b5f5b41226c5597c92"
              },
              {
                  "name": "Modern",
                  "position": 37,
                  "_id": "650c1f9d411d42b145280113"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Croatian",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Dubrovnik_City_Walls",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018bad9053f8531e29eaa5"
              },
              {
                  "name": "Old_Town",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018bad9053f8531e29eaa6"
              },
              {
                  "name": "Sponza_Palace",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018bad9053f8531e29eaa7"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn",
              "Summer"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c1ee91cca1ad7e05f7",
          "name": "Salzburg",
          "price": "EXPENSIVE",
          "country": "Austria",
          "weathers": [
              "Temperate",
              "Alpine"
          ],
          "categories": [
              {
                  "0": "N",
                  "1": "a",
                  "2": "t",
                  "3": "u",
                  "4": "r",
                  "5": "e",
                  "_id": "650c428d82489a5e1be53bd2"
              },
              {
                  "name": "Historical",
                  "position": 17,
                  "_id": "650c09b5f5b41226c5597c9a"
              }
          ],
          "continent": "Europe",
          "languages": [
              "German",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Hohensalzburg_Castle",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c1ee91cca1ad7e05f8"
              },
              {
                  "name": "Mirabell_Palace",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c1ee91cca1ad7e05f9"
              },
              {
                  "name": "Salzburg_Cathedral",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c1ee91cca1ad7e05fa"
              },
              {
                  "name": "Mozart's_Birthplace",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c1ee91cca1ad7e05fb"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Summer",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c1ee91cca1ad7e05fe",
          "name": "Seville",
          "price": "EXPENSIVE",
          "country": "Spain",
          "weathers": [
              "Mediterranean",
              "Hot"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 18,
                  "_id": "650c09b5f5b41226c5597ca2"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Spanish",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Seville_Cathedral",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018baa9053f8531e29ea41"
              },
              {
                  "name": "Alcázar_of_Seville",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018baa9053f8531e29ea42"
              },
              {
                  "name": "Plaza_de_España",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018baa9053f8531e29ea43"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn",
              "Summer"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c1ee91cca1ad7e0605",
          "name": "Krakow",
          "price": "MEDIUM",
          "country": "Poland",
          "weathers": [
              "Temperate",
              "Cold"
          ],
          "categories": [
              {
                  "0": "N",
                  "1": "a",
                  "2": "t",
                  "3": "u",
                  "4": "r",
                  "5": "e",
                  "_id": "650c428d82489a5e1be53bdc"
              },
              {
                  "name": "Historical",
                  "position": 19,
                  "_id": "650c09b5f5b41226c5597ca8"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Polish",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Wawel_Castle",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba99053f8531e29ea01"
              },
              {
                  "name": "Auschwitz-Birkenau_Memorial",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba99053f8531e29ea02"
              },
              {
                  "name": "Main_Market_Square",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba99053f8531e29ea03"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Summer",
              "Christmas"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c2ee91cca1ad7e060c",
          "name": "Budapest",
          "price": "MEDIUM",
          "country": "Hungary",
          "weathers": [
              "Temperate",
              "Mild"
          ],
          "categories": [
              {
                  "0": "N",
                  "1": "a",
                  "2": "t",
                  "3": "u",
                  "4": "r",
                  "5": "e",
                  "_id": "650c428d82489a5e1be53be1"
              },
              {
                  "0": "F",
                  "1": "o",
                  "2": "o",
                  "3": "t",
                  "4": "b",
                  "5": "a",
                  "6": "l",
                  "7": "l",
                  "_id": "650c428d82489a5e1be53be2"
              },
              {
                  "name": "Historical",
                  "position": 20,
                  "_id": "650c09b5f5b41226c5597caf"
              },
              {
                  "name": "Modern",
                  "position": 38,
                  "_id": "650c1f9d411d42b14528011b"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Hungarian",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Fisherman’s_Bastion",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba89053f8531e29e9e5"
              },
              {
                  "name": "Buda_Castle",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba89053f8531e29e9e6"
              },
              {
                  "name": "Parliament_Building",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba89053f8531e29e9e7"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Summer",
              "Christmas"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c2ee91cca1ad7e0613",
          "name": "Fez",
          "price": "INEXPENSIVE",
          "country": "Morocco",
          "weathers": [
              "Desert"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 21,
                  "_id": "650c09b5f5b41226c5597cb8"
              }
          ],
          "continent": "Africa",
          "languages": [
              "Arabic",
              "French",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Fes_El_Bali",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c2ee91cca1ad7e0614"
              },
              {
                  "name": "Bou_Inania_Madrasa",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c2ee91cca1ad7e0615"
              },
              {
                  "name": "Chouara_Tannery",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c2ee91cca1ad7e0616"
              },
              {
                  "name": "Merenid_Tombs",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c2ee91cca1ad7e0617"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c2ee91cca1ad7e061a",
          "name": "Salamanca",
          "price": "MEDIUM",
          "country": "Spain",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 22,
                  "_id": "650c09b5f5b41226c5597cbf"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Spanish",
              "English"
          ],
          "landmarks": [
              {
                  "name": "University_of_Salamanca",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c2ee91cca1ad7e061b"
              },
              {
                  "name": "Salamanca_Cathedral",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c2ee91cca1ad7e061c"
              },
              {
                  "name": "Plaza_Mayor,_Salamanca",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c2ee91cca1ad7e061d"
              },
              {
                  "name": "Convento_de_San_Esteban,_Salamanca",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c2ee91cca1ad7e061e"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c2ee91cca1ad7e0621",
          "name": "Antwerp",
          "price": "MEDIUM",
          "country": "Belgium",
          "weathers": [
              "Temperate"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 23,
                  "_id": "650c09b5f5b41226c5597cc6"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Dutch",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Cathedral_of_Our_Lady",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c2ee91cca1ad7e0622"
              },
              {
                  "name": "Antwerp_Zoo",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c2ee91cca1ad7e0623"
              },
              {
                  "name": "Antwerp_Central_Station",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c2ee91cca1ad7e0624"
              },
              {
                  "name": "MAS_Museum_Aan_de_Stroom",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c2ee91cca1ad7e0625"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Summer",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c3ee91cca1ad7e0628",
          "name": "Toledo",
          "price": "MEDIUM",
          "country": "Spain",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 24,
                  "_id": "650c09b6f5b41226c5597ccd"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Spanish",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Alcázar_of_Toledo",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c3ee91cca1ad7e0629"
              },
              {
                  "name": "Toledo_Cathedral",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c3ee91cca1ad7e062a"
              },
              {
                  "name": "Synagogue_of_El_Transito",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c3ee91cca1ad7e062b"
              },
              {
                  "name": "Plaza_de_Zocodover",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c3ee91cca1ad7e062c"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c3ee91cca1ad7e062f",
          "name": "Granada",
          "price": "MEDIUM",
          "country": "Spain",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "0": "N",
                  "1": "a",
                  "2": "t",
                  "3": "u",
                  "4": "r",
                  "5": "e",
                  "_id": "650c428d82489a5e1be53bfc"
              },
              {
                  "name": "Historical",
                  "position": 25,
                  "_id": "650c09b6f5b41226c5597cd4"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Spanish",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Alhambra",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c3ee91cca1ad7e0630"
              },
              {
                  "name": "Generalife",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c3ee91cca1ad7e0631"
              },
              {
                  "name": "Royal_Chapel_of_Granada",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c3ee91cca1ad7e0632"
              },
              {
                  "name": "Granada_Cathedral",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c3ee91cca1ad7e0633"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c3ee91cca1ad7e0636",
          "name": "Segovia",
          "price": "MEDIUM",
          "country": "Spain",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 26,
                  "_id": "650c09b6f5b41226c5597cdc"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Spanish",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Segovia_Aqueduct",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c3ee91cca1ad7e0637"
              },
              {
                  "name": "Alcázar_of_Segovia",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c3ee91cca1ad7e0638"
              },
              {
                  "name": "Segovia_Cathedral",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c3ee91cca1ad7e0639"
              },
              {
                  "name": "Plaza_Mayor,_Segovia",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c3ee91cca1ad7e063a"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c3ee91cca1ad7e063d",
          "name": "Dublin",
          "price": "MEDIUM",
          "country": "Ireland",
          "weathers": [
              "Temperate",
              "Mild"
          ],
          "categories": [
              {
                  "0": "N",
                  "1": "a",
                  "2": "t",
                  "3": "u",
                  "4": "r",
                  "5": "e",
                  "_id": "650c428d82489a5e1be53c07"
              },
              {
                  "0": "F",
                  "1": "o",
                  "2": "o",
                  "3": "t",
                  "4": "b",
                  "5": "a",
                  "6": "l",
                  "7": "l",
                  "_id": "650c428d82489a5e1be53c08"
              },
              {
                  "name": "Most-Visited",
                  "position": 52,
                  "_id": "650b2ed405a7b27b02d03093"
              },
              {
                  "name": "Historical",
                  "position": 27,
                  "_id": "650c09b6f5b41226c5597ce3"
              }
          ],
          "continent": "Europe",
          "languages": [
              "English",
              "Irish"
          ],
          "landmarks": [
              {
                  "name": "Dublin_Castle",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba69053f8531e29e9ad"
              },
              {
                  "name": "Guinness_Storehouse",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba69053f8531e29e9ae"
              },
              {
                  "name": "Trinity_College_Dublin",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba69053f8531e29e9af"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Summer",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c4ee91cca1ad7e0644",
          "name": "Bruges",
          "price": "EXPENSIVE",
          "country": "Belgium",
          "weathers": [
              "Temperate"
          ],
          "categories": [
              {
                  "0": "N",
                  "1": "a",
                  "2": "t",
                  "3": "u",
                  "4": "r",
                  "5": "e",
                  "_id": "650c428d82489a5e1be53c0e"
              },
              {
                  "0": "R",
                  "1": "o",
                  "2": "m",
                  "3": "a",
                  "4": "n",
                  "5": "t",
                  "6": "i",
                  "7": "c",
                  "_id": "650c428d82489a5e1be53c0f"
              },
              {
                  "name": "Historical",
                  "position": 28,
                  "_id": "650c09b6f5b41226c5597ced"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Dutch",
              "English",
              "French"
          ],
          "landmarks": [
              {
                  "name": "Belfry_of_Bruges",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c4ee91cca1ad7e0645"
              },
              {
                  "name": "Bruges_City_Hall",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c4ee91cca1ad7e0646"
              },
              {
                  "name": "Church_of_Our_Lady,_Bruges",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c4ee91cca1ad7e0647"
              },
              {
                  "name": "Groeningemuseum",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c4ee91cca1ad7e0648"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Summer",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c4ee91cca1ad7e064b",
          "name": "Agra",
          "price": "INEXPENSIVE",
          "country": "India",
          "weathers": [
              "Tropical"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 29,
                  "_id": "650c09b6f5b41226c5597cf6"
              }
          ],
          "continent": "Asia",
          "languages": [
              "Hindi",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Taj_Mahal",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c4ee91cca1ad7e064c"
              },
              {
                  "name": "Agra_Fort",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c4ee91cca1ad7e064d"
              },
              {
                  "name": "Fatehpur_Sikri",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c4ee91cca1ad7e064e"
              },
              {
                  "name": "Itimad-ud-Daulah's_Tomb",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c4ee91cca1ad7e064f"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Winter",
              "Spring"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c4ee91cca1ad7e0652",
          "name": "Vienna",
          "price": "EXPENSIVE",
          "country": "Austria",
          "weathers": [
              "Temperate",
              "Mild"
          ],
          "categories": [
              {
                  "0": "R",
                  "1": "o",
                  "2": "m",
                  "3": "a",
                  "4": "n",
                  "5": "t",
                  "6": "i",
                  "7": "c",
                  "_id": "650c428d82489a5e1be53c1a"
              },
              {
                  "name": "Most-Visited",
                  "position": 50,
                  "_id": "650b2ed305a7b27b02d03082"
              },
              {
                  "name": "Historical",
                  "position": 30,
                  "_id": "650c09b6f5b41226c5597cfd"
              },
              {
                  "name": "Modern",
                  "position": 39,
                  "_id": "650c1f9d411d42b145280124"
              }
          ],
          "continent": "Europe",
          "languages": [
              "German",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Schönbrunn_Palace",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba69053f8531e29e9a1"
              },
              {
                  "name": "St._Stephen’s_Cathedral",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba69053f8531e29e9a2"
              },
              {
                  "name": "Belvedere_Palace",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018ba69053f8531e29e9a3"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Summer",
              "Christmas"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c5ee91cca1ad7e0659",
          "name": "Florence",
          "price": "EXPENSIVE",
          "country": "Italy",
          "weathers": [
              "Mediterranean",
              "Temperate"
          ],
          "categories": [
              {
                  "0": "N",
                  "1": "a",
                  "2": "t",
                  "3": "u",
                  "4": "r",
                  "5": "e",
                  "_id": "650c428d82489a5e1be53c21"
              },
              {
                  "0": "F",
                  "1": "o",
                  "2": "o",
                  "3": "t",
                  "4": "b",
                  "5": "a",
                  "6": "l",
                  "7": "l",
                  "_id": "650c428d82489a5e1be53c22"
              },
              {
                  "0": "R",
                  "1": "o",
                  "2": "m",
                  "3": "a",
                  "4": "n",
                  "5": "t",
                  "6": "i",
                  "7": "c",
                  "_id": "650c428d82489a5e1be53c23"
              },
              {
                  "name": "Historical",
                  "position": 31,
                  "_id": "650c09b6f5b41226c5597d06"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Italian",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Uffizi_Gallery",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018bb19053f8531e29eb29"
              },
              {
                  "name": "Ponte_Vecchio",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018bb19053f8531e29eb2a"
              },
              {
                  "name": "Florence_Cathedral",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "65018bb19053f8531e29eb2b"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Summer",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c5ee91cca1ad7e0660",
          "name": "Ravenna",
          "price": "MEDIUM",
          "country": "Italy",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 32,
                  "_id": "650c09b7f5b41226c5597d0f"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Italian",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Mausoleum_of_Galla_Placidia",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c5ee91cca1ad7e0661"
              },
              {
                  "name": "Basilica_of_San_Vitale",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c5ee91cca1ad7e0662"
              },
              {
                  "name": "Basilica_of_Sant'Apollinare_Nuovo",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c5ee91cca1ad7e0663"
              },
              {
                  "name": "Dante's_Tomb",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c5ee91cca1ad7e0664"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c5ee91cca1ad7e0667",
          "name": "Avignon",
          "price": "MEDIUM",
          "country": "France",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 33,
                  "_id": "650c09b7f5b41226c5597d16"
              }
          ],
          "continent": "Europe",
          "languages": [
              "French",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Palace_of_the_Popes",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c5ee91cca1ad7e0668"
              },
              {
                  "name": "Pont_Saint-Bénézet",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c5ee91cca1ad7e0669"
              },
              {
                  "name": "Avignon_Cathedral",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c5ee91cca1ad7e066a"
              },
              {
                  "name": "Rocher_des_Doms",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c5ee91cca1ad7e066b"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c6ee91cca1ad7e066e",
          "name": "Oxford",
          "price": "MEDIUM",
          "country": "United Kingdom",
          "weathers": [
              "Temperate"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 34,
                  "_id": "650c09b7f5b41226c5597d1d"
              }
          ],
          "continent": "Europe",
          "languages": [
              "English"
          ],
          "landmarks": [
              {
                  "name": "University_of_Oxford",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e066f"
              },
              {
                  "name": "Bodleian_Library",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e0670"
              },
              {
                  "name": "Christ_Church,_Oxford",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e0671"
              },
              {
                  "name": "Radcliffe_Camera",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e0672"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Summer",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c6ee91cca1ad7e0675",
          "name": "Troy",
          "price": "MEDIUM",
          "country": "Turkey",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 35,
                  "_id": "650c09b7f5b41226c5597d24"
              }
          ],
          "continent": "Asia",
          "languages": [
              "Turkish",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Troy",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e0676"
              },
              {
                  "name": "The_Walls_of_Troy",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e0677"
              },
              {
                  "name": "The_House_of_the_Tridents",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e0678"
              },
              {
                  "name": "Priam's_Treasure",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e0679"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c6ee91cca1ad7e067c",
          "name": "Pisa",
          "price": "MEDIUM",
          "country": "Italy",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 36,
                  "_id": "650c09b7f5b41226c5597d2b"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Italian",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Leaning_Tower_of_Pisa",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e067d"
              },
              {
                  "name": "Pisa_Baptistry",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e067e"
              },
              {
                  "name": "Pisa_Cathedral",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e067f"
              },
              {
                  "name": "Campo_dei_Miracoli",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e0680"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c6ee91cca1ad7e0683",
          "name": "Ephesus",
          "price": "MEDIUM",
          "country": "Turkey",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 37,
                  "_id": "650c09b7f5b41226c5597d32"
              }
          ],
          "continent": "Asia",
          "languages": [
              "Turkish",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Ephesus",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e0684"
              },
              {
                  "name": "Celsus_Library",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e0685"
              },
              {
                  "name": "Terrace_Houses,_Ephesus",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e0686"
              },
              {
                  "name": "Temple_of_Artemis",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c6ee91cca1ad7e0687"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c7ee91cca1ad7e068a",
          "name": "Verona",
          "price": "MEDIUM",
          "country": "Italy",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 38,
                  "_id": "650c09b7f5b41226c5597d39"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Italian",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Arena_di_Verona",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e068b"
              },
              {
                  "name": "Juliet's_House",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e068c"
              },
              {
                  "name": "Piazza_delle_Erbe",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e068d"
              },
              {
                  "name": "Castelvecchio_Bridge",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e068e"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c7ee91cca1ad7e0691",
          "name": "Cambridge",
          "price": "MEDIUM",
          "country": "United Kingdom",
          "weathers": [
              "Temperate"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 39,
                  "_id": "650c09b7f5b41226c5597d40"
              }
          ],
          "continent": "Europe",
          "languages": [
              "English"
          ],
          "landmarks": [
              {
                  "name": "University_of_Cambridge",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e0692"
              },
              {
                  "name": "King's_College,_Cambridge",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e0693"
              },
              {
                  "name": "Fitzwilliam_Museum",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e0694"
              },
              {
                  "name": "Cambridge_University_Botanic_Garden",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e0695"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Summer",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c7ee91cca1ad7e0698",
          "name": "Suzhou",
          "price": "MEDIUM",
          "country": "China",
          "weathers": [
              "Temperate",
              "Humid"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 40,
                  "_id": "650c09b8f5b41226c5597d47"
              }
          ],
          "continent": "Asia",
          "languages": [
              "Mandarin",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Humble_Administrator's_Garden",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e0699"
              },
              {
                  "name": "Suzhou_Museum",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e069a"
              },
              {
                  "name": "Tiger_Hill,_Suzhou",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e069b"
              },
              {
                  "name": "Lingering_Garden",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e069c"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c7ee91cca1ad7e069f",
          "name": "Nara",
          "price": "MEDIUM",
          "country": "Japan",
          "weathers": [
              "Temperate"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 41,
                  "_id": "650c09b8f5b41226c5597d4e"
              }
          ],
          "continent": "Asia",
          "languages": [
              "Japanese",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Tōdai-ji",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e06a0"
              },
              {
                  "name": "Nara_Park",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e06a1"
              },
              {
                  "name": "Kasuga_Taisha",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e06a2"
              },
              {
                  "name": "Nara_National_Museum",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c7ee91cca1ad7e06a3"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c8ee91cca1ad7e06a6",
          "name": "Sintra",
          "price": "MEDIUM",
          "country": "Portugal",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 42,
                  "_id": "650c09b8f5b41226c5597d55"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Portuguese",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Pena_Palace",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06a7"
              },
              {
                  "name": "Moorish_Castle",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06a8"
              },
              {
                  "name": "Quinta_da_Regaleira",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06a9"
              },
              {
                  "name": "Sintra_National_Palace",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06aa"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c8ee91cca1ad7e06ad",
          "name": "Eger",
          "price": "INEXPENSIVE",
          "country": "Hungary",
          "weathers": [
              "Temperate"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 43,
                  "_id": "650c09b8f5b41226c5597d5c"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Hungarian",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Eger_Castle",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06ae"
              },
              {
                  "name": "Eger_Minaret",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06af"
              },
              {
                  "name": "Dobo_Square",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06b0"
              },
              {
                  "name": "Eger_Cathedral",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06b1"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c8ee91cca1ad7e06b4",
          "name": "Aix-en-Provence",
          "price": "MEDIUM",
          "country": "France",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 44,
                  "_id": "650c09b8f5b41226c5597d63"
              }
          ],
          "continent": "Europe",
          "languages": [
              "French",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Cours_Mirabeau",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06b5"
              },
              {
                  "name": "Aix-en-Provence_Cathedral",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06b6"
              },
              {
                  "name": "Pavillon_de_Vendôme",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06b7"
              },
              {
                  "name": "Saint-Sauveur_Cathedral",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06b8"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c8ee91cca1ad7e06bb",
          "name": "Plovdiv",
          "price": "INEXPENSIVE",
          "country": "Bulgaria",
          "weathers": [
              "Temperate"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 45,
                  "_id": "650c09b8f5b41226c5597d6a"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Bulgarian",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Plovdiv_Roman_Theatre",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06bc"
              },
              {
                  "name": "Ancient_Theatre_of_Philipoppol",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06bd"
              },
              {
                  "name": "Dzhumaya_Mosque",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06be"
              },
              {
                  "name": "Plovdiv_Regional_Historical_Museum",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c8ee91cca1ad7e06bf"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c9ee91cca1ad7e06c2",
          "name": "Split",
          "price": "MEDIUM",
          "country": "Croatia",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 46,
                  "_id": "650c09b8f5b41226c5597d71"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Croatian",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Diocletian's_Palace",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06c3"
              },
              {
                  "name": "Cathedral_of_Saint_Domnius",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06c4"
              },
              {
                  "name": "Marjan_Hill",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06c5"
              },
              {
                  "name": "Riva_(Split)",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06c6"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c9ee91cca1ad7e06c9",
          "name": "Mostar",
          "price": "INEXPENSIVE",
          "country": "Bosnia and Herzegovina",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 47,
                  "_id": "650c09b8f5b41226c5597d78"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Bosnian",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Old_Bridge,_Mostar",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06ca"
              },
              {
                  "name": "Koski_Mehmed_Pasha_Mosque",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06cb"
              },
              {
                  "name": "Stari_Most",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06cc"
              },
              {
                  "name": "Old_Bazaar,_Mostar",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06cd"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c9ee91cca1ad7e06d0",
          "name": "Strasbourg",
          "price": "MEDIUM",
          "country": "France",
          "weathers": [
              "Temperate"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 48,
                  "_id": "650c09b8f5b41226c5597d7f"
              }
          ],
          "continent": "Europe",
          "languages": [
              "French",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Strasbourg_Cathedral",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06d1"
              },
              {
                  "name": "Palais_Rohans",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06d2"
              },
              {
                  "name": "La_Petite_France",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06d3"
              },
              {
                  "name": "Strasbourg_Museum_of_Fine_Arts",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06d4"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      },
      {
          "_id": "64f9b0c9ee91cca1ad7e06d7",
          "name": "Bologna",
          "price": "MEDIUM",
          "country": "Italy",
          "weathers": [
              "Mediterranean"
          ],
          "categories": [
              {
                  "name": "Historical",
                  "position": 49,
                  "_id": "650c09b9f5b41226c5597d86"
              }
          ],
          "continent": "Europe",
          "languages": [
              "Italian",
              "English"
          ],
          "landmarks": [
              {
                  "name": "Basilica_of_San_Petronio",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06d8"
              },
              {
                  "name": "Two_Towers_of_Bologna",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06d9"
              },
              {
                  "name": "Archiginnasio_of_Bologna",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06da"
              },
              {
                  "name": "Museo_Civico_Medievale",
                  "likes": [],
                  "dislikes": [],
                  "reviews": [],
                  "_id": "64f9b0c9ee91cca1ad7e06db"
              }
          ],
          "reviews": [],
          "yearTimes": [
              "Spring",
              "Autumn"
          ],
          "likes": [],
          "dislikes": [],
          "__v": 0
      }
  ]



