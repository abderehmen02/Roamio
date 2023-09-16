

export const getCity = async (city : string)=>{
console.log("getting the city")
const query = new URLSearchParams({name : city})
console.log("query " , query )
return "data"
}