

export const getCity = async (city : string)=>{
const query = new URLSearchParams({name : city})
console.log("query " , query )
return "data"
}