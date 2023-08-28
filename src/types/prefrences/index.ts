export type Prefrence = {[key : string] : string} 
export type PrefrenceArray = string[]
export type Prefrences = Prefrence[]

export const  Categories  = {
Historical:     "Historical",
Modern :     "Modern",
Nature :     "Nature",
Religious :     "Religious",
Cultural :    "Cultural",
Culinary :    "Culinary",
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


const Weathers = {
    hot: "Hot",
    cold: "Cold",
    mild: "Mild",
    tropical: "Tropical",
    arctic: "Arctic",
    desert: "Desert",
    mediterranean: "Mediterranean",
    rainy: "Rainy",
    temperate: "Temperate",
    mountainous: "Mountainous",
    coastal: "Coastal",
    cloudy: "Cloudy",
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
  population: number,
  categorie : ("Historical" | "Modern" | "Nature" | "Religious" | "Cultural" | "Culinary" | "Adventure" | "Romantic" | "Beach" | "Family-Friendly" | "Nightlife" | "Wellness" | "Shopping" | "Festivals" | "Sports" | "Eco Friendly" | "Educational" | "HiddenGems" | "Artistic" | "Music" | "TechHub" | "Architecture" | "Literary" | "Film" | "Gaming" | "Wildlife" | "Mountains" | "Desert" | "Island" | "Scenic" | "Photography" | "Diving"  |  "Hiking" | "Skiing" | "Water Sports" | "Historic Landmarks" | "Gardens" | "Spa Relaxation" | "Crafts Artisans" | "Street Food" | "Local Festivities" | "Fashion Design" | "SustainableLiving" | "Volunteering Opportunities" | "Dark Sky Watching" | "Astro Tourism")[] ,
  price :  "CHEAP" | "INEXPENSIVE" | "MEDIUM" | "EXPENSIVE" | "COSTLY" ,
  weathers : ("Desert" | "Snow" | "Hot" | "Cold" | "Mild" | "Tropical" | "Arctic" | "Mediterranean" | "Rainy" | "Temperate" | "Mountainous" | "Coastal" | "Cloudy" | "Sunny" | "Monsoon" | "Subtropical" | "Continental")[] ,
  yearTimes : ( "Winter" | "Summer" | "Autumn" | "Spring" | "Christmas" | "New Year" | "Easter" | "Halloween" | "Thanksgiving" | "Valentine" | "Hanukkah" | "Diwali" | "LunarNewYear")[] ,
  languages : ("English" | "French" | "Spanish" | "German" | "Italian" | "Mandarin" | "Japanese" | "Korean" | "Arabic" | "Russian" | "Portuguese" | "Dutch" | "Swedish" | "Chinese" | "Hindi" | "Turkish" | "Urdu" | "Persian" | "Vietnamese" | "Polish" | "Romanian" | "Greek" | "Thai" | "Indonesian" | "Filipino" | "Malay" | "Tamil" | "Bengali" | "Punjabi" | "Pashto" | "Ukrainian" | "Czech" | "Hungarian" | "Serbian" | "Slovak" | "Slovenian" | "Croatian" | "Bosnian" | "Albanian" | "Georgian" | "Armenian" | "Hebrew" | "Yiddish" | "Marathi" | "Gujarati" | "Kannada" | "Telugu" | "Malayalam" | "Nepali" | "Sinhalese" | "Burmese" | "Khmer" | "Lao" | "Tibetan" | "Uighur" | "Kazakh" | "Kyrgyz" | "Turkmen" | "Mongolian" | "Tajik" | "Dari" | "Tatar" | "Chechen" | "Ossetian" | "Abkhaz" | "Ingush" | "Kurdish")[]
}



const data = {
  europe : {
    france : [
      {
        name: "Paris",
        country: "France",
        continent: "Europe",
        population: 2165423 ,
        categories: ["Historical", "Cultural", "Romantic", "Fashion", "Food"],
        price: "EXPENSIVE",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French", "English"],
      },
      {
        name: "Marseille",
        country: "France",
        continent: "Europe",
        population: 855393,
        categories: ["Historical", "Cultural", "Romantic", "Beach"],
        price: "MEDIUM",
        weathers: ["Mediterranean", "Sunny", "Mild"],
        yearTimes: ["Summer", "Autumn", "Spring"],
        languages: ["French", "Arabic"],
      },
      {
        name: "Lyon",
        country: "France",
        continent: "Europe",
        population: 500715,
        categories: ["Historical", "Cultural", "Food"],
        price: "MEDIUM",
        weathers: ["Mediterranean", "Sunny", "Mild"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Toulouse",
        country: "France",
        continent: "Europe",
        population: 458298,
        categories: ["Historical", "Cultural", "Tech"],
        price: "MEDIUM",
        weathers: ["Mediterranean", "Sunny", "Mild"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Nice",
        country: "France",
        continent: "Europe",
        population: 342295,
        categories: ["Beach", "Historical", "Cultural"],
        price: "MEDIUM",
        weathers: ["Mediterranean", "Sunny", "Mild"],
        yearTimes: ["Summer", "Autumn", "Spring"],
        languages: ["French", "Italian"],
      },  {
        name: "Annecy",
        country: "France",
        continent: "Europe",
        population: 128215,
        categories: ["Historical", "Nature", "Romantic", "Water Sports"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny", "Snow"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Chamonix",
        country: "France",
        continent: "Europe",
        population: 9308,
        categories: ["Mountains", "Skiing", "Hiking", "Nature"],
        price: "EXPENSIVE",
        weathers: ["Snow", "Cold", "Mild"],
        yearTimes: ["Winter"],
        languages: ["French"],
      },
      {
        name: "Lille",
        country: "France",
        continent: "Europe",
        population: 231544,
        categories: ["Historical", "Cultural", "Food", "Shopping"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French", "Dutch"],
      },
      {
        name: "Strasbourg",
        country: "France",
        continent: "Europe",
        population: 291548,
        categories: ["Historical", "Cultural", "Romantic", "Food"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French", "German"],
      },
      {
        name: "Bordeaux",
        country: "France",
        continent: "Europe",
        population: 253548,
        categories: ["Historical", "Cultural", "Food", "Wine"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Grenoble",
        country: "France",
        continent: "Europe",
        population: 153525,
        categories: ["Historical", "Cultural", "Nature", "Mountains", "Skiing"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny", "Snow"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Dijon",
        country: "France",
        continent: "Europe",
        population: 151610,
        categories: ["Historical", "Cultural", "Food", "Wine"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Rennes",
        country: "France",
        continent: "Europe",
        population: 216914,
        categories: ["Historical", "Cultural", "Food", "Tech"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Nantes",
        country: "France",
        continent: "Europe",
        population: 303921,
        categories: ["Historical", "Cultural", "Food", "River"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Montpellier",
        country: "France",
        continent: "Europe",
        population: 287224,
        categories: ["Historical", "Cultural", "Beach", "Food"],
        price: "MEDIUM",
        weathers: ["Mediterranean", "Sunny", "Mild"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },{
        name: "Nîmes",
        country: "France",
        continent: "Europe",
        population: 151297,
        categories: ["Historical", "Roman", "Cultural", "Gladiator Arena"],
        price: "MEDIUM",
        weathers: ["Mediterranean", "Sunny", "Mild"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Brest",
        country: "France",
        continent: "Europe",
        population: 146965,
        categories: ["Historical", "Cultural", "Military", "Sea"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Lorient",
        country: "France",
        continent: "Europe",
        population: 65795,
        categories: ["Historical", "Cultural", "Sea"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "La Rochelle",
        country: "France",
        continent: "Europe",
        population: 125123,
        categories: ["Historical", "Cultural", "Sea", "Cruises"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Orléans",
        country: "France",
        continent: "Europe",
        population: 118631,
        categories: ["Historical", "Cultural", "Royal", "Food"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Le Havre",
        country: "France",
        continent: "Europe",
        population: 178569,
        categories: ["Historical", "Cultural", "Sea", "Port"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Rouen",
        country: "France",
        continent: "Europe",
        population: 108440,
        categories: ["Historical", "Cultural", "Cathedral", "Food"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Reims",
        country: "France",
        continent: "Europe",
        population: 190002,
        categories: ["Historical", "Cultural", "Cathredral", "Champagne"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Besançon",
        country: "France",
        continent: "Europe",
        population: 116966,
        categories: ["Historical", "Cultural", "Nature", "Mountains"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      }, {
        name: "Perpignan",
        country: "France",
        continent: "Europe",
        population: 127502,
        categories: ["Historical", "Cultural", "Mediterranean", "Beach"],
        price: "MEDIUM",
        weathers: ["Mediterranean", "Sunny", "Mild"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Carcassonne",
        country: "France",
        continent: "Europe",
        population: 52423,
        categories: ["Historical", "Cultural", "Medieval", "Fort"],
        price: "MEDIUM",
        weathers: ["Mediterranean", "Sunny", "Mild"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Avignon",
        country: "France",
        continent: "Europe",
        population: 90710,
        categories: ["Historical", "Cultural", "Pont du Gard", "Papal"],
        price: "MEDIUM",
        weathers: ["Mediterranean", "Sunny", "Mild"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Lyon",
        country: "France",
        continent: "Europe",
        population: 513692,
        categories: ["Historical", "Cultural", "Food", "Tech"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },{
        name: "Saint-Étienne",
        country: "France",
        continent: "Europe",
        population: 171443,
        categories: ["Historical", "Industrial", "Sports"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Strasbourg",
        country: "France",
        continent: "Europe",
        population: 291548,
        categories: ["Historical", "Cultural", "Romantic", "Food"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French", "German"],
      },
      {
        name: "Bayonne",
        country: "France",
        continent: "Europe",
        population: 126164,
        categories: ["Historical", "Cultural", "Beach", "Spanish"],
        price: "MEDIUM",
        weathers: ["Mediterranean", "Sunny", "Mild"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French", "Spanish"],
      },
      {
        name: "Clermont-Ferrand",
        country: "France",
        continent: "Europe",
        population: 148599,
        categories: ["Historical", "Cultural", "Volcanoes"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Mulhouse",
        country: "France",
        continent: "Europe",
        population: 112920,
        categories: ["Historical", "Industrial", "Tech"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Laval",
        country: "France",
        continent: "Europe",
        population: 53165,
        categories: ["Historical", "Cultural", "Tech"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Limoges",
        country: "France",
        continent: "Europe",
        population: 132172,
        categories: ["Historical", "Cultural", "Arts & Crafts"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Angers",
        country: "France",
        continent: "Europe",
        population: 157119,
        categories: ["Historical", "Cultural", "River"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Le Mans",
        country: "France",
        continent: "Europe",
        population: 149665,
        categories: ["Historical", "Cultural", "Motorsports"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Tours",
        country: "France",
        continent: "Europe",
        population: 136980,
        categories: ["Historical", "Cultural", "Loire Valley"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },  {
        name: "Chartres",
        country: "France",
        continent: "Europe",
        population: 39373,
        categories: ["Historical", "Cultural", "Cathedral"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Rennes",
        country: "France",
        continent: "Europe",
        population: 216914,
        categories: ["Historical", "Cultural", "Food", "Tech"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Orléans",
        country: "France",
        continent: "Europe",
        population: 118631,
        categories: ["Historical", "Cultural", "Royal", "Food"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Brest",
        country: "France",
        continent: "Europe",
        population: 146965,
        categories: ["Historical", "Cultural", "Military", "Sea"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },
      {
        name: "Lorient",
        country: "France",
        continent: "Europe",
        population: 65795,
        categories: ["Historical", "Cultural", "Sea"],
        price: "MEDIUM",
        weathers: ["Temperate", "Cloudy", "Sunny"],
        yearTimes: ["Spring", "Summer", "Autumn"],
        languages: ["French"],
      },   
    ]
  }
}