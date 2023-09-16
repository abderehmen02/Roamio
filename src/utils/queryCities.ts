import { Category, Prefrence, PrefrencesOptions, Price } from "@/types/prefrences";
import { CitiesQueryState } from "@/types/state/citiesQuery";
import { boolean } from "zod";



export type QueryObj = {
    page?: string,
    categoriesType?: string;
    categories?: string;
    continentType?: string;
    continent?: string;
    countryType?: string;
    country?: string;
    languagesType?: string;
    languages?: string;
    name?: string;
    population?: string;
    priceType?: string;
    price?: string;
    weathersType?: string;
    weathers?: string;
    yearTimesType?: string;
    yearTimes?: string;
  };
    
export const   QueryObjParams =  {
    page: "page"  ,
    categoriesType : "categoriesType" , 
    categories : "categories" ,
    continentType : "continentType" ,
    continent : "continent" , 
    countryType: "countryType" ,
    country : "country" , 
    languagesType: "languagesType" ,
    languages : "languages" , 
    name : "name" , 
    population : 'population',
    priceType : "priceType", 
    price : "price" ,
    weathersType : "weathersType" ,
    weathers : "weathers" ,
    yearTimesType : "yearTimesType" ,
    yearTimes : "yearTimes" 
    } as const 



export const generateQueryCitiesSearchParam = (query :  Partial<CitiesQueryState>)=>{
    let queryObj : QueryObj = {} ;
        queryObj.page = query.page ? String(query.page) : "1" 
    if(query?.categories?.value.length){
        queryObj.categoriesType = query.categories.type ,
        queryObj.categories = JSON.stringify( query.categories.value)
    }
    if(query.continent?.value.length){
        queryObj.continentType = query.continent.type ,
        queryObj.continent = JSON.stringify( query.continent.value)
    }
    if(query.country?.value.length){
        queryObj.countryType = query.country.type , 
        queryObj.country = JSON.stringify(query.country.value)
    }
    if(query.languages?.value.length){
        queryObj.languagesType = query.languages.type ,
        queryObj.languages = JSON.stringify(query.languages.value)
    }
    if(query.price?.value.length){
        queryObj.priceType =  query.price.type ,
        queryObj.price = JSON.stringify( query.price.value)
    }
    if(query.weathers?.value.length){
        queryObj.weathersType = query.weathers.type ,
        queryObj.weathers = JSON.stringify(query.weathers.value)
    }
    if(query.name)queryObj.name = query.name
    if(query.population) queryObj.population = queryObj.population 



    const searchParams = new URLSearchParams(queryObj)
    return searchParams.toString()
}


export const isPrefrenceIncluded  : (query : CitiesQueryState , option : PrefrencesOptions , prefrence : Prefrence)=>boolean = (query , option , prefrence)  =>{
if(option=== PrefrencesOptions.CATEGORIES){
    return query.categories.value.includes(prefrence as Category )
}
if(option === PrefrencesOptions.PRICES){
    return query.price.value.includes(prefrence as Price )
}
return false 
}