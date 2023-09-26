export enum PrefrencesOptions {
CATEGORIES  = "CATEGORIES" ,
PRICES = "PRICES" ,
WEATHERS = "WEATHERS" ,
LANGUAGES = "LANGUAGES" ,
YEAR_TIMES = "YEAR_TIMES", 
MEALS = "MEALS" 
}

export type PrefrencesArray = { option : PrefrencesOptions ,   prefrence : PrefrenceObject }[]

export const  Categories  = {
Historical:     "Historical",
MostVisited: "Most-Visited" ,
Modern :     "Modern",
Nature :     "Nature",
Religious :     "Religious",
Cultural :    "Cultural",
Culinary :    "Culinary",
Football : "Football" ,
Adventure :    "Adventure",
Romantic :    "Romantic",
Beach :    "Beach",
FamilyFriendly:    "Family-Friendly",
Nightlife :    "Nightlife",
Wellness :    "Wellness",
Shopping :    "Shopping",
Festivals :    "Festivals",
Sports :    "Sports",
EcoFriendly :    "Eco Friendly",
Educational :    "Educational",
HiddenGems :    "HiddenGems",
Artistic :    "Artistic",
Music :    "Music",
TechHub :    "TechHub",
Architecture :    "Architecture",
Literary :    "Literary",
Film :    "Film",
Gaming :    "Gaming",
Wildlife :    "Wildlife",
Mountains :    "Mountains",
Desert :    "Desert",
Island :    "Island",
Scenic :    "Scenic",
Photography :    "Photography",
Diving :    "Diving",
Hiking :    "Hiking",
Skiing :    "Skiing",
WaterSports :    "Water Sports",
HistoricLandmarks :    "Historic Landmarks",
Gardens :    "Gardens",
SpaRelaxation :    "Spa Relaxation",
CraftsArtisans :     "Crafts Artisans",
StreetFood :    "Street Food",
Luxury : "Luxury" ,
LocalFestivities :    "Local Festivities",
FashionDesign :    "Fashion Design",
SustainableLiving :    "SustainableLiving",
VolunteeringOpportunities :    "Volunteering Opportunities",
DarkSkyWatching :    "Dark Sky Watching",
AstroTourism :    "Astro Tourism",
} as const 

export const CategoriesArray  =  Object.values(Categories)


export type Category = typeof CategoriesArray[number]


export const Prices = {
    cheap : "CHATP" ,
    inExpensive : "INEXPENSIVE"  ,
    medium : "MEDIUM" ,
    expensive : "EXPENSIVE" ,
    costly : "COSTLY"
} as const

export const PricesArray  = Object.values(Prices)

export type  Price = typeof PricesArray[number]


export const Weathers = {
    hot: "Hot",
    cold: "Cold",
    mild: "Mild",
    tropical: "Tropical",
    desert: "Desert",
    mediterranean: "Mediterranean",
    rainy: "Rainy",
    temperate: "Temperate",
    mountainous: "Mountainous",
    sunny: "Sunny",
    monsoon: "Monsoon",
    subtropical: "Subtropical",
    continental: "Continental",
  } as const;



export   const WeathersArray = Object.values(Weathers)
export   type Weather  = typeof WeathersArray[number]



export const Languages = {
    english: "English",
    french: "French",
    spanish: "Spanish",
    german: "German",
    italian: "Italian",
    mandarin: "Mandarin",
    japanese: "Japanese",
    korean: "Korean",
    arabic: "Arabic",
    russian: "Russian",
    portuguese: "Portuguese",
    dutch: "Dutch",
    swedish: "Swedish",
    chinese: "Chinese",
    hindi: "Hindi",
    turkish: "Turkish",
    urdu: "Urdu",
    persian: "Persian",
    vietnamese: "Vietnamese",
    polish: "Polish",
    romanian: "Romanian",
    greek: "Greek",
    thai: "Thai",
    indonesian: "Indonesian",
    filipino: "Filipino",
    malay: "Malay",
    tamil: "Tamil",
    bengali: "Bengali",
    punjabi: "Punjabi",
    pashto: "Pashto",
    ukrainian: "Ukrainian",
    czech: "Czech",
    hungarian: "Hungarian",
    serbian: "Serbian",
    slovak: "Slovak",
    slovenian: "Slovenian",
    croatian: "Croatian",
    bosnian: "Bosnian",
    albanian: "Albanian",
    georgian: "Georgian",
    armenian: "Armenian",
    hebrew: "Hebrew",
    yiddish: "Yiddish",
    marathi: "Marathi",
    gujarati: "Gujarati",
    kannada: "Kannada",
    telugu: "Telugu",
    malayalam: "Malayalam",
    nepali: "Nepali",
    sinhalese: "Sinhalese",
    burmese: "Burmese",
    khmer: "Khmer",
    lao: "Lao",
    tibetan: "Tibetan",
    uighur: "Uighur",
    kazakh: "Kazakh",
    kyrgyz: "Kyrgyz",
    turkmen: "Turkmen",
    mongolian: "Mongolian",
    tajik: "Tajik",
    dari: "Dari",
    tatar: "Tatar",
    chechen: "Chechen",
    ossetian: "Ossetian",
    abkhaz: "Abkhaz",
    ingush: "Ingush",
    kurdish: "Kurdish",
  } as const;



export const LanguagesArray = Object.values(Languages)

export type Language = typeof LanguagesArray[number]




export const YearTimes = {
    winter: "Winter",
    summer: "Summer",
    autumn: "Autumn",
    spring: "Spring",
    christmas: "Christmas",
    newYear: "New Year",
    easter: "Easter",
    halloween: "Halloween",
    thanksgiving: "Thanksgiving",
    valentine: "Valentine",
    hanukkah: "Hanukkah",
    diwali: "Diwali",
    lunarNewYear: "LunarNewYear",
    etc: "Etc", // Add more times as needed
  } as const;

export const YearTimesArray = Object.values(YearTimes)
export type YearTime = typeof YearTimesArray[number]

export const Meals = {
    pizza: "Pizza",
    pasta: "Pasta",
    tacos: "Tacos",
    sushi: "Sushi",
    burger: "Burger",
    curry: "Curry",
    ramen: "Ramen",
    croissant: "Croissant",
    steak: "Steak",
    friedChicken: "FriedChicken",
    salad: "Salad",
    omelette: "Omelette",
    nachos: "Nachos",
    iceCream: "IceCream",
    waffles: "Waffles",
    pancakes: "Pancakes",
    hotDog: "HotDog",
    burrito: "Burrito",
    dumplings: "Dumplings",
    barbecue: "Barbecue",
    friedRice: "Fried Rice",
    quiche: "Quiche",
    gyros: "Gyros",
    kebab: "Kebab",
    paella: "Paella",
    crepe: "Crepe",
    enchiladas: "Enchiladas",
    falafel: "Falafel",
    fajitas: "Fajitas",
    lobster: "Lobster",
    crab: "Crab",
    clamChowder: "Clam Chowder",
    moussaka: "Moussaka",
    padThai: "Pad Thai",
    macaroniCheese: "Macaroni and Cheese",
    poutine: "Poutine",
    haggis: "Haggis",
    gazpacho: "Gazpacho",
    bouillabaisse: "Bouillabaisse",
    tempura: "Tempura",
    dimSum: "DimSum",
    etc: "Etc", // Add more meals as needed
  } as const;


export const MealsArray = Object.values(Meals)

export type Meal = typeof MealsArray[number]




export type City = {
  name: string,
  country: string,
  continent: string,
  price :  "CHEAP" | "INEXPENSIVE" | "MEDIUM" | "EXPENSIVE" | "COSTLY" ,
  weathers : ("Desert" | "Snow" | "Hot" | "Cold" | "Mild" | "Tropical" | "Arctic" | "Mediterranean" | "Rainy" | "Temperate" | "Mountainous" | "Coastal" | "Cloudy" | "Sunny" | "Monsoon" | "Subtropical" | "Continental")[] ,
  yearTimes : ( "Winter" | "Summer" | "Autumn" | "Spring" | "Christmas" | "New Year" | "Easter" | "Halloween" | "Thanksgiving" | "Valentine" | "Hanukkah" | "Diwali" | "LunarNewYear")[] ,
  languages : ("English" | "French" | "Spanish" | "German" | "Italian" | "Mandarin" | "Japanese" | "Korean" | "Arabic" | "Russian" | "Portuguese" | "Dutch" | "Swedish" | "Chinese" | "Hindi" | "Turkish" | "Urdu" | "Persian" | "Vietnamese" | "Polish" | "Romanian" | "Greek" | "Thai" | "Indonesian" | "Filipino" | "Malay" | "Tamil" | "Bengali" | "Punjabi" | "Pashto" | "Ukrainian" | "Czech" | "Hungarian" | "Serbian" | "Slovak" | "Slovenian" | "Croatian" | "Bosnian" | "Albanian" | "Georgian" | "Armenian" | "Hebrew" | "Yiddish" | "Marathi" | "Gujarati" | "Kannada" | "Telugu" | "Malayalam" | "Nepali" | "Sinhalese" | "Burmese" | "Khmer" | "Lao" | "Tibetan" | "Uighur" | "Kazakh" | "Kyrgyz" | "Turkmen" | "Mongolian" | "Tajik" | "Dari" | "Tatar" | "Chechen" | "Ossetian" | "Abkhaz" | "Ingush" | "Kurdish")[]
}


export type  Prefrence = Category | Price | YearTime | Meal | Language | Weather
export type PrefrenceObject = typeof Categories | typeof Prices | typeof YearTimes | typeof Meals | typeof Languages | typeof Weathers




 const citiesData = [
  { name: "Rome", country: "Italy", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Italian", "English"] },
  { name: "Cairo", country: "Egypt", continent: "Africa", price: "INEXPENSIVE", weathers: ["Desert"], yearTimes: ["Spring", "Autumn", "Winter"], languages: ["Arabic", "English"] },
  { name: "Athens", country: "Greece", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Greek", "English"] },
  { name: "Kyoto", country: "Japan", continent: "Asia", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Spring", "Autumn", "Cherry Blossom"], languages: ["Japanese", "English"] },
  { name: "Machu Picchu", country: "Peru", continent: "South America", price: "EXPENSIVE", weathers: ["Tropical", "Mountainous"], yearTimes: ["Dry Season"], languages: ["Spanish", "Quechua"] },
  { name: "Jerusalem", country: "Israel", continent: "Asia", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Hebrew", "Arabic", "English"] },
  { name: "Istanbul", country: "Turkey", continent: "Asia", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Turkish", "English"] },
  { name: "Baghdad", country: "Iraq", continent: "Asia", price: "INEXPENSIVE", weathers: ["Desert"], yearTimes: ["Spring", "Autumn", "Winter"], languages: ["Arabic", "Kurdish"] },
  { name: "Beijing", country: "China", continent: "Asia", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Spring", "Autumn"], languages: ["Mandarin", "English"] },
  { name: "Varanasi", country: "India", continent: "Asia", price: "INEXPENSIVE", weathers: ["Tropical"], yearTimes: ["Winter", "Spring"], languages: ["Hindi", "English"] },
  { name: "Cusco", country: "Peru", continent: "South America", price: "MEDIUM", weathers: ["Mountainous"], yearTimes: ["Dry Season"], languages: ["Spanish", "Quechua"] },
  { name: "Jerash", country: "Jordan", continent: "Asia", price: "MEDIUM", weathers: ["Desert"], yearTimes: ["Spring", "Autumn"], languages: ["Arabic", "English"] },
  { name: "Luxor", country: "Egypt", continent: "Africa", price: "MEDIUM", weathers: ["Desert"], yearTimes: ["Spring", "Autumn", "Winter"], languages: ["Arabic", "English"] },
  { name: "Marrakech", country: "Morocco", continent: "Africa", price: "INEXPENSIVE", weathers: ["Desert"], yearTimes: ["Spring", "Autumn"], languages: ["Arabic", "French", "English"] },
  { name: "Venice", country: "Italy", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Italian", "English"] } ,
  { name: "Cologne", country: "Germany", continent: "Europe", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Spring", "Autumn"], languages: ["German", "English"] },
  { name: "Dubrovnik", country: "Croatia", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Croatian", "English"] },
  { name: "Salzburg", country: "Austria", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate", "Alpine"], yearTimes: ["Spring", "Summer", "Autumn"], languages: ["German", "English"] },
  { name: "Seville", country: "Spain", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Spanish", "English"] },
  { name: "Krakow", country: "Poland", continent: "Europe", price: "INEXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Autumn"], languages: ["Polish", "English"] },
  { name: "Budapest", country: "Hungary", continent: "Europe", price: "INEXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Autumn"], languages: ["Hungarian", "English"] },
  { name: "Granada", country: "Spain", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Spanish", "English"] },
  { name: "Fez", country: "Morocco", continent: "Africa", price: "INEXPENSIVE", weathers: ["Desert"], yearTimes: ["Spring", "Autumn"], languages: ["Arabic", "French", "English"] },
  { name: "Dubrovnik", country: "Croatia", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Croatian", "English"] },
  { name: "Salzburg", country: "Austria", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate", "Alpine"], yearTimes: ["Spring", "Summer", "Autumn"], languages: ["German", "English"] } ,
  { name: "Toledo", country: "Spain", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Spanish", "English"] },
  { name: "Seville", country: "Spain", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Spanish", "English"] },
  { name: "Krakow", country: "Poland", continent: "Europe", price: "INEXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Autumn"], languages: ["Polish", "English"] },
  { name: "Budapest", country: "Hungary", continent: "Europe", price: "INEXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Autumn"], languages: ["Hungarian", "English"] },
  { name: "Salamanca", country: "Spain", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Spanish", "English"] },
  { name: "Antwerp", country: "Belgium", continent: "Europe", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], languages: ["Dutch", "English"] },
  { name: "Toledo", country: "Spain", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Spanish", "English"] },
  { name: "Granada", country: "Spain", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Spanish", "English"] },
  { name: "Segovia", country: "Spain", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Spanish", "English"] },
  { name: "Dublin", country: "Ireland", continent: "Europe", price: "MEDIUM", weathers: ["Temperate", "Rainy"], yearTimes: ["Spring", "Summer", "Autumn"], languages: ["English", "Irish"] },
  { name: "Bruges", country: "Belgium", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], languages: ["Dutch", "English", "French"] },
  { name: "Siena", country: "Italy", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Italian", "English"] },
  { name: "Ephesus", country: "Turkey", continent: "Asia", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Turkish", "English"] },
  { name: "Cordoba", country: "Spain", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Spanish", "English"] },
  { name: "Agra", country: "India", continent: "Asia", price: "INEXPENSIVE", weathers: ["Tropical"], yearTimes: ["Winter", "Spring"], languages: ["Hindi", "English"] },
  { name: "Bath", country: "United Kingdom", continent: "Europe", price: "EXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], languages: ["English"] },
  { name: "Florence", country: "Italy", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Italian", "English"] },
  { name: "Munich", country: "Germany", continent: "Europe", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Spring", "Autumn"], languages: ["German", "English"] },
  { name: "Edinburgh", country: "United Kingdom", continent: "Europe", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Summer", "Autumn"], languages: ["English"] },
  { name: "St. Petersburg", country: "Russia", continent: "Europe", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Summer", "Autumn"], languages: ["Russian", "English"] } ,
  { name: "Vienna", country: "Austria", continent: "Europe", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Spring", "Autumn"], languages: ["German", "English"] },
  { name: "Florence", country: "Italy", continent: "Europe", price: "EXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Italian", "English"] },
  { name: "Ravenna", country: "Italy", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Italian", "English"] },
  { name: "Avignon", country: "France", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["French", "English"] },
  { name: "Oxford", country: "United Kingdom", continent: "Europe", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Summer", "Autumn"], languages: ["English"] },
  { name: "Troy", country: "Turkey", continent: "Asia", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Turkish", "English"] },
  { name: "Pisa", country: "Italy", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Italian", "English"] },
  { name: "Ephesus", country: "Turkey", continent: "Asia", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Turkish", "English"] },
  { name: "Verona", country: "Italy", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Italian", "English"] },
  { name: "Cambridge", country: "United Kingdom", continent: "Europe", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Summer", "Autumn"], languages: ["English"] },
  { name: "Suzhou", country: "China", continent: "Asia", price: "MEDIUM", weathers: ["Temperate", "Humid"], yearTimes: ["Spring", "Autumn"], languages: ["Mandarin", "English"] },
  { name: "Nara", country: "Japan", continent: "Asia", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Spring", "Autumn"], languages: ["Japanese", "English"] },
  { name: "Sintra", country: "Portugal", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Portuguese", "English"] },
  { name: "Eger", country: "Hungary", continent: "Europe", price: "INEXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Autumn"], languages: ["Hungarian", "English"] },
  { name: "Aix-en-Provence", country: "France", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["French", "English"] },
  { name: "Plovdiv", country: "Bulgaria", continent: "Europe", price: "INEXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Autumn"], languages: ["Bulgarian", "English"] },
  { name: "Split", country: "Croatia", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Croatian", "English"] },
  { name: "Mostar", country: "Bosnia and Herzegovina", continent: "Europe", price: "INEXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Bosnian", "English"] },
  { name: "Strasbourg", country: "France", continent: "Europe", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Spring", "Autumn"], languages: ["French", "English"] },
  { name: "Bologna", country: "Italy", continent: "Europe", price: "MEDIUM", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Italian", "English"] } ,
  { name: "Lübeck", country: "Germany", continent: "Europe", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], languages: ["German", "English"] },
  { name: "Heidelberg", country: "Germany", continent: "Europe", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], languages: ["German", "English"] },
  { name: "Porto", country: "Portugal", continent: "Europe", price: "INEXPENSIVE", weathers: ["Mediterranean"], yearTimes: ["Spring", "Autumn"], languages: ["Portuguese", "English"] },
  { name: "Lviv", country: "Ukraine", continent: "Europe", price: "INEXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], languages: ["Ukrainian", "English"] },
  { name: "York", country: "United Kingdom", continent: "Europe", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Summer", "Autumn"], languages: ["English"] },
  { name: "Sarajevo", country: "Bosnia and Herzegovina", continent: "Europe", price: "INEXPENSIVE", weathers: ["Continental"], yearTimes: ["Spring", "Autumn"], languages: ["Bosnian", "English"] },
  { name: "Pécs", country: "Hungary", continent: "Europe", price: "INEXPENSIVE", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], languages: ["Hungarian", "English"] },
  { name: "Leiden", country: "Netherlands", continent: "Europe", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], languages: ["Dutch", "English"] },
  { name: "Delft", country: "Netherlands", continent: "Europe", price: "MEDIUM", weathers: ["Temperate"], yearTimes: ["Spring", "Summer", "Autumn"], languages: ["Dutch", "English"] },
];















































































[
  {
      "name": "Rome",
      "reviews": [],
      "landmarks": [
          {
              "name": "Colosseum",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Roman Forum",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Pantheon, Rome",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Trevi Fountain",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Cairo",
      "reviews": [],
      "landmarks": [
          {
              "name": "Pyramids of Giza",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Egyptian Museum",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Saladin Citadel of Cairo",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Khan el-Khalili",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Athens",
      "reviews": [],
      "landmarks": [
          {
              "name": "Acropolis of Athens",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Parthenon",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Ancient Agora of Athens",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Erechtheion",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Kyoto",
      "reviews": [],
      "landmarks": [
          {
              "name": "Kinkaku-ji (Golden Pavilion)",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Fushimi Inari-taisha",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Kyoto Imperial Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Kiyomizu-dera",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Machu Picchu",
      "reviews": [],
      "landmarks": [
          {
              "name": "Machu Picchu",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Jerusalem",
      "reviews": [],
      "landmarks": [
          {
              "name": "Western_Wall",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Dome_of_the_Rock",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Church_of_the_Holy_Sepulchre",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Mount_of_Olives",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Istanbul",
      "reviews": [],
      "landmarks": [
          {
              "name": "Hagia_Sophia",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Topkapi_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Blue_Mosque",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Grand_Bazaar,_Istanbul",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Baghdad",
      "reviews": [],
      "landmarks": [
          {
              "name": "Al-Mustansiriya_University",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Al-Mutanabbi_Street",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Baghdad_Zoo",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Abbasid_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Beijing",
      "reviews": [],
      "landmarks": [
          {
              "name": "Forbidden_City",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Great_Wall_of_China",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Temple_of_Heaven",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Summer_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Varanasi",
      "reviews": [],
      "landmarks": [
          {
              "name": "Kashi_Vishwanath_Temple",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Sarnath",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Ghats_of_Varanasi",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Banaras_Hindu_University",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Cusco",
      "reviews": [],
      "landmarks": [
          {
              "name": "Saksaywaman",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Qorikancha",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "San_Pedro_Market,_Cusco",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Cathedral_of_Santo_Domingo,_Cusco",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Jerash",
      "reviews": [],
      "landmarks": [
          {
              "name": "Jerash_Archaeological_Museum",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Hadrian's_Arch,_Jerash",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Hippodrome,_Jerash",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Oval_Plaza,_Jerash",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Luxor",
      "reviews": [],
      "landmarks": [
          {
              "name": "Luxor_Temple",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Valley_of_the_Kings",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Karnak_Temple",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Luxor_Museum",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Marrakech",
      "reviews": [],
      "landmarks": [
          {
              "name": "Jardin_Majorelle",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Koutoubia_Mosque",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Saadian_Tombs",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Marrakech_Museum",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Venice",
      "reviews": [],
      "landmarks": [
          {
              "name": "St._Mark's_Basilica",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Doge's_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Rialto_Bridge",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Grand_Canal",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Cologne",
      "reviews": [],
      "landmarks": [
          {
              "name": "Cologne_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Hohenzollern_Bridge",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Cologne_Zoo",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Ludwig_Museum",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Dubrovnik",
      "reviews": [],
      "landmarks": [
          {
              "name": "Walls_of_Dubrovnik",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Dubrovnik_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Sponza_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Old_Town,_Dubrovnik",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Salzburg",
      "reviews": [],
      "landmarks": [
          {
              "name": "Hohensalzburg_Castle",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Mirabell_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Salzburg_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Mozart's_Birthplace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Seville",
      "reviews": [],
      "landmarks": [
          {
              "name": "Alcázar_of_Seville",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Seville_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Plaza_de_España",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Metropol_Parasol",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Krakow",
      "reviews": [],
      "landmarks": [
          {
              "name": "Wawel_Royal_Castle",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Main_Market_Square,_Kraków",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "St._Mary's_Basilica,_Kraków",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Auschwitz_concentration_camp",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Budapest",
      "reviews": [],
      "landmarks": [
          {
              "name": "Buda_Castle",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Fisherman's_Bastion",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Hungarian_Parliament_Building",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Chain_Bridge,_Budapest",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Granada ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Alhambra",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Generalife",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Royal_Chapel_of_Granada",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Granada_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Fez",
      "reviews": [],
      "landmarks": [
          {
              "name": "Fes_El_Bali",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Bou_Inania_Madrasa",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Chouara_Tannery",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Merenid_Tombs",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Dubrovnik ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Walls_of_Dubrovnik",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Dubrovnik_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Sponza_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Old_Town,_Dubrovnik",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Salzburg ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Hohensalzburg_Castle",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Mirabell_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Salzburg_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Mozart's_Birthplace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Toledo ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Alcázar_of_Toledo",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Toledo_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Synagogue_of_El_Transito",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Plaza_de_Zocodover",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Seville ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Alcázar_of_Seville",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Seville_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Plaza_de_España",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Metropol_Parasol",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Krakow ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Wawel_Royal_Castle",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Main_Market_Square,_Kraków",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "St._Mary's_Basilica,_Kraków",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Auschwitz_concentration_camp",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Budapest ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Buda_Castle",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Fisherman's_Bastion",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Hungarian_Parliament_Building",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Chain_Bridge,_Budapest",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Salamanca",
      "reviews": [],
      "landmarks": [
          {
              "name": "University_of_Salamanca",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Salamanca_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Plaza_Mayor,_Salamanca",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Convento_de_San_Esteban,_Salamanca",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Antwerp",
      "reviews": [],
      "landmarks": [
          {
              "name": "Cathedral_of_Our_Lady",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Antwerp_Zoo",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Antwerp_Central_Station",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "MAS_Museum_Aan_de_Stroom",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Toledo",
      "reviews": [],
      "landmarks": [
          {
              "name": "Alcázar_of_Toledo",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Toledo_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Synagogue_of_El_Transito",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Plaza_de_Zocodover",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Granada",
      "reviews": [],
      "landmarks": [
          {
              "name": "Alhambra",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Generalife",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Royal_Chapel_of_Granada",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Granada_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Segovia",
      "reviews": [],
      "landmarks": [
          {
              "name": "Segovia_Aqueduct",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Alcázar_of_Segovia",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Segovia_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Plaza_Mayor,_Segovia",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Dublin",
      "reviews": [],
      "landmarks": [
          {
              "name": "Trinity_College,_Dublin",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Dublin_Castle",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Guinness_Storehouse",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Christ_Church_Cathedral,_Dublin",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Bruges",
      "reviews": [],
      "landmarks": [
          {
              "name": "Belfry_of_Bruges",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Bruges_City_Hall",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Church_of_Our_Lady,_Bruges",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Groeningemuseum",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Siena ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Siena_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Piazza_del_Campo",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Palazzo_Pubblico",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Torre_del_Mangia",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Ephesus ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Ephesus",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Celsus_Library",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Terrace_Houses,_Ephesus",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Temple_of_Artemis",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Cordoba ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Great_Mosque_of_Cordoba",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Alcázar_of_the_Christians",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Roman_Bridge,_Cordoba",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Medina_Azahara",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Agra ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Taj_Mahal",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Agra_Fort",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Fatehpur_Sikri",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Itimad-ud-Daulah's_Tomb",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Bath ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Roman_Baths,_Bath",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Bath_Abbey",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Pulteney_Bridge",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "The_Circus,_Bath",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Florence ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Florence_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Uffizi_Gallery",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Ponte_Vecchio",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Palazzo_Pitti",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Munich ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Nymphenburg_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Marienplatz",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Munich_Residenz",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Viktualienmarkt",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Edinburgh ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Edinburgh_Castle",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Royal_Mile",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Holyrood_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Arthur's_Seat",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "St. Petersburg ",
      "reviews": [],
      "landmarks": [
          {
              "name": "Hermitage_Museum",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Peter_and_Paul_Fortress",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Catherine_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Church_of_the_Savior_on_Blood",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Agra",
      "reviews": [],
      "landmarks": [
          {
              "name": "Taj_Mahal",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Agra_Fort",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Fatehpur_Sikri",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Itimad-ud-Daulah's_Tomb",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Vienna",
      "reviews": [],
      "landmarks": [
          {
              "name": "Vienna_State_Opera",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Belvedere_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Schönbrunn_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "St._Stephen's_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Florence",
      "reviews": [],
      "landmarks": [
          {
              "name": "Florence_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Uffizi_Gallery",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Ponte_Vecchio",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Palazzo_Pitti",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Ravenna",
      "reviews": [],
      "landmarks": [
          {
              "name": "Mausoleum_of_Galla_Placidia",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Basilica_of_San_Vitale",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Basilica_of_Sant'Apollinare_Nuovo",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Dante's_Tomb",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Avignon",
      "reviews": [],
      "landmarks": [
          {
              "name": "Palace_of_the_Popes",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Pont_Saint-Bénézet",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Avignon_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Rocher_des_Doms",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Oxford",
      "reviews": [],
      "landmarks": [
          {
              "name": "University_of_Oxford",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Bodleian_Library",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Christ_Church,_Oxford",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Radcliffe_Camera",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Troy",
      "reviews": [],
      "landmarks": [
          {
              "name": "Troy",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "The_Walls_of_Troy",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "The_House_of_the_Tridents",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Priam's_Treasure",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Pisa",
      "reviews": [],
      "landmarks": [
          {
              "name": "Leaning_Tower_of_Pisa",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Pisa_Baptistry",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Pisa_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Campo_dei_Miracoli",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Ephesus",
      "reviews": [],
      "landmarks": [
          {
              "name": "Ephesus",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Celsus_Library",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Terrace_Houses,_Ephesus",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Temple_of_Artemis",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Verona",
      "reviews": [],
      "landmarks": [
          {
              "name": "Arena_di_Verona",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Juliet's_House",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Piazza_delle_Erbe",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Castelvecchio_Bridge",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Cambridge",
      "reviews": [],
      "landmarks": [
          {
              "name": "University_of_Cambridge",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "King's_College,_Cambridge",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Fitzwilliam_Museum",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Cambridge_University_Botanic_Garden",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Suzhou",
      "reviews": [],
      "landmarks": [
          {
              "name": "Humble_Administrator's_Garden",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Suzhou_Museum",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Tiger_Hill,_Suzhou",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Lingering_Garden",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Nara",
      "reviews": [],
      "landmarks": [
          {
              "name": "Tōdai-ji",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Nara_Park",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Kasuga_Taisha",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Nara_National_Museum",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Sintra",
      "reviews": [],
      "landmarks": [
          {
              "name": "Pena_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Moorish_Castle",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Quinta_da_Regaleira",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Sintra_National_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Eger",
      "reviews": [],
      "landmarks": [
          {
              "name": "Eger_Castle",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Eger_Minaret",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Dobo_Square",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Eger_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Aix-en-Provence",
      "reviews": [],
      "landmarks": [
          {
              "name": "Cours_Mirabeau",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Aix-en-Provence_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Pavillon_de_Vendôme",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Saint-Sauveur_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Plovdiv",
      "reviews": [],
      "landmarks": [
          {
              "name": "Plovdiv_Roman_Theatre",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Ancient_Theatre_of_Philipoppol",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Dzhumaya_Mosque",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Plovdiv_Regional_Historical_Museum",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Split",
      "reviews": [],
      "landmarks": [
          {
              "name": "Diocletian's_Palace",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Cathedral_of_Saint_Domnius",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Marjan_Hill",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Riva_(Split)",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Mostar",
      "reviews": [],
      "landmarks": [
          {
              "name": "Old_Bridge,_Mostar",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Koski_Mehmed_Pasha_Mosque",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Stari_Most",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Old_Bazaar,_Mostar",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Strasbourg",
      "reviews": [],
      "landmarks": [
          {
              "name": "Strasbourg_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Palais_Rohans",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "La_Petite_France",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Strasbourg_Museum_of_Fine_Arts",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Bologna",
      "reviews": [],
      "landmarks": [
          {
              "name": "Basilica_of_San_Petronio",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Two_Towers_of_Bologna",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Archiginnasio_of_Bologna",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Museo_Civico_Medievale",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Lübeck",
      "reviews": [],
      "landmarks": [
          {
              "name": "Lübeck_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Holstentor",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Marienkirche",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Buddenbrook_House",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Heidelberg",
      "reviews": [],
      "landmarks": [
          {
              "name": "Heidelberg_Castle",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Old_Bridge,_Heidelberg",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Karl_Theodor_Bridge",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Heidelberg_University",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Porto",
      "reviews": [],
      "landmarks": [
          {
              "name": "Ribeira_(Porto)",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Porto_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Clerigos_Tower",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Palácio_da_Bolsa",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Lviv",
      "reviews": [],
      "landmarks": [
          {
              "name": "Lviv_City_Hall",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Lviv_Opera",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "High_Castle_(Lviv)",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Lychakiv_Cemetery",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "York",
      "reviews": [],
      "landmarks": [
          {
              "name": "York_Minster",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "York_City_Walls",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Clifford's_Tower",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "National_Railway_Museum",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Sarajevo",
      "reviews": [],
      "landmarks": [
          {
              "name": "Baščaršija",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Sarajevo_City_Hall",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Gazi_Husrev-beg's_Medresa",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Yellow_Fortress",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Pécs",
      "reviews": [],
      "landmarks": [
          {
              "name": "Early_Christian_Mausoleum",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Pécs_Cathedral",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Zsolnay_Cultural_Quarter",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Pécs_National_Theatre",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Leiden",
      "reviews": [],
      "landmarks": [
          {
              "name": "Leiden_University",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Leiden_Observatory",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Pieterskerk",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Molen_de_Valk",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Delft",
      "reviews": [],
      "landmarks": [
          {
              "name": "Nieuwe_Kerk,_Delft",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Royal_Delft",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Oude_Kerk,_Delft",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Prinsenhof",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  },
  {
      "name": "Ghent",
      "reviews": [],
      "landmarks": [
          {
              "name": "Gravensteen",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Saint_Bavo_Cathedral,_Ghent",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Belfry_of_Ghent",
              "likes": [],
              "dislikes": [],
              "reviews": []
          },
          {
              "name": "Museum_of_Fine_Arts,_Ghent",
              "likes": [],
              "dislikes": [],
              "reviews": []
          }
      ],
      "likes": [],
      "dislikes": []
  }
].map(item=>{let itemData = citiesData.find(cityDataItem=>cityDataItem.name === item.name)    ;
  if(itemData)   return ({...item , country : itemData.country  , continent : itemData.continent , yearTimes : itemData.yearTimes , price : itemData.price , weathers : itemData.weathers , languages : itemData.languages }) })