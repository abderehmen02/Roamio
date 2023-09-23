import { Category, Prefrence, PrefrencesOptions, Price } from "@/types/prefrences";
import { CitiesQueryState } from "@/types/state/citiesQuery";
import { ReadonlyURLSearchParams } from "next/navigation";
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



export const tagglePrefrenceAndGenerateQueryCitiesSearchParams = ( option : PrefrencesOptions ,   prefrence :  string , searchParams : ReadonlyURLSearchParams )=>{
    let queryObj : QueryObj = {} ;
        // queryObj.page = query.page ? String(query.page) : "1" 
    if(option === PrefrencesOptions.CATEGORIES){
        const currentCategories : string[] = searchParams.get(QueryObjParams.categories) ?  JSON.parse(searchParams.get(QueryObjParams.categories) as string ) : []
        queryObj.categoriesType = "ANY " ; 
        if(currentCategories.includes(prefrence) && currentCategories.length === 1 ) {alert("you should at least select one category") ; return searchParams.toString()   } 
        else if(currentCategories.includes(prefrence)) queryObj.categories = JSON.stringify( currentCategories.filter(item=>item !== prefrence))
         else         queryObj.categories = JSON.stringify( [...currentCategories ,  prefrence])
    // }
    // if(query.continent?.value.length){
    //     queryObj.continentType = query.continent.type ,
    //     queryObj.continent = JSON.stringify( query.continent.value)
    // }
    // if(query.country?.value.length){
    //     queryObj.countryType = query.country.type , 
    //     queryObj.country = JSON.stringify(query.country.value)
    // }
    // if(query.languages?.value.length){
    //     queryObj.languagesType = query.languages.type ,
    //     queryObj.languages = JSON.stringify(query.languages.value)
    // }
    // if(query.price?.value.length){
    //     queryObj.priceType =  query.price.type ,
    //     queryObj.price = JSON.stringify( query.price.value)
    // }
    // if(query.weathers?.value.length){
    //     queryObj.weathersType = query.weathers.type ,
    //     queryObj.weathers = JSON.stringify(query.weathers.value)
    // }
    // if(query.name)queryObj.name = query.name
    // if(query.population) queryObj.population = queryObj.population 
    }


    const newSearchParams = new URLSearchParams(queryObj)
    return newSearchParams.toString()
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