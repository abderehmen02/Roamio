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
    const urlSearchParams = new URLSearchParams(searchParams.toString())
    if(option === PrefrencesOptions.CATEGORIES){
        const currentCategories : string[] = searchParams.get(QueryObjParams.categories) ?  JSON.parse(searchParams.get(QueryObjParams.categories) as string ) : []
        urlSearchParams.set( QueryObjParams.categoriesType ,  "ANY" ) ; 
        if(currentCategories.includes(prefrence) && currentCategories.length === 1 ) {alert("you should at least select one category") ; return searchParams.toString()   } 
        else if(currentCategories.includes(prefrence)){ 
            urlSearchParams.set (QueryObjParams.categories ,  JSON.stringify( currentCategories.filter(item=>item !== prefrence))   )
        }
            else         urlSearchParams.set( QueryObjParams.categories , JSON.stringify( [...currentCategories ,  prefrence]) )
    }
    if(option === PrefrencesOptions.PRICES){
       const currentPrices : string[]=   searchParams.get(QueryObjParams.price)  ?  JSON.parse( searchParams.get(QueryObjParams.price)  as string  ) : []
       if(currentPrices.includes(prefrence)) urlSearchParams.set(QueryObjParams.price , JSON.stringify(currentPrices.filter(price =>price !== prefrence)))
       else urlSearchParams.set(QueryObjParams.price , JSON.stringify([...currentPrices , prefrence]) )
    }
    if(option === PrefrencesOptions.LANGUAGES){
        const currentLanguages  : string[] = JSON.parse(searchParams.get(QueryObjParams.languages) ||"[]" )
        if(currentLanguages.includes(prefrence)) urlSearchParams.set(QueryObjParams.languages , JSON.stringify(currentLanguages.filter(lan=>lan !== prefrence)))
        else urlSearchParams.set(QueryObjParams.languages , JSON.stringify([...currentLanguages , prefrence]) )
    }
    else if(option === PrefrencesOptions.WEATHERS){
        const currentWeathers : string[] = JSON.parse(searchParams.get(QueryObjParams.weathers) || '[]' )
        if(currentWeathers.includes(prefrence)) urlSearchParams.set(QueryObjParams.languages ,JSON.stringify(currentWeathers.filter(weather=>weather !== prefrence)) )
        else urlSearchParams.set(QueryObjParams.weathers , JSON.stringify([...currentWeathers , prefrence]))
    }
    urlSearchParams.set(QueryObjParams.page , "1")

    return urlSearchParams.toString()
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