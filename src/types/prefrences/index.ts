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


export const Weathers = {
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


export type  Prefrence = Category | Price | YearTime | Meal | Language | Weather
export type PrefrenceObject = typeof Categories | typeof Prices | typeof YearTimes | typeof Meals | typeof Languages | typeof Weathers