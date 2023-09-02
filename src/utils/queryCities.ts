import { CitiesQueryState } from "@/types/state/citiesQuery";


export type  QueryObj =  {
categoriesType? : string , 
categories? : string ,
continentType? : string ,
continent? : string , 
countryType?: string ,
country? :string , 
languagesType?: string ,
languages? :string , 
name? : string , 
population? : string ,
priceType? : string , 
price? : string ,
weathersType? : string ,
weathers? : string ,
yearTimesType? : string ,
yearTimes? : string 
}

export const generateQueryCitiesSearchParam = (query : CitiesQueryState)=>{
    let queryObj : QueryObj = {} ;
    if(query.categories.value.length){
        queryObj.categoriesType = query.categories.type ,
        queryObj.categories = JSON.stringify( query.categories.value)
    }
    if(query.continent.value.length){
        queryObj.continentType = query.continent.type ,
        queryObj.continent = JSON.stringify( query.continent.value)
    }
    if(query.country.value.length){
        queryObj.countryType = query.country.type , 
        queryObj.country = JSON.stringify(query.country.value)
    }
    if(query.languages.value.length){
        queryObj.languagesType = query.languages.type ,
        queryObj.languages = JSON.stringify(query.languages.value)
    }
    if(query.price.value.length){
        queryObj.priceType =  query.price.type ,
        queryObj.price = JSON.stringify( query.price.value)
    }
    if(query.weathers.value.length){
        queryObj.weathersType = query.weathers.type ,
        queryObj.weathers = JSON.stringify(query.weathers.value)
    }
    if(query.name)queryObj.name = query.name
    if(query.population) queryObj.population = queryObj.population 



    const searchParams = new URLSearchParams(queryObj)
    return searchParams.toString()
}