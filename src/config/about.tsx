import PublicIcon from '@mui/icons-material/Public';
import ArticleIcon from '@mui/icons-material/Article';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export interface AboutFeatureInfo {
    title : string ,
    descreption : string ,
    Icon : JSX.Element 
}


export const aboutFeatures : AboutFeatureInfo[]  = [
    {
        title : "Find Your Ideal Destination Based on Your Preferences" ,
        descreption : "This feature allows you to search for cities based on your preferred categories, such as religious, historical, nature, etc. You can also filter cities based on the price, season, etc. You can see a list of cities that match your criteria, and click on each city to see more details. This feature helps you to discover new places and plan your trips according to your interests." ,
        Icon : <PublicIcon sx={{fontSize : "140px"}} />
    } , 
    {
        title : "City Details: Explore the Landmarks, Activities, and Information of Each City" ,
        descreption : "This feature allows you to see the landmarks, activities, and information of each city that you select from the city search feature. You can see the photos, descriptions, and locations of the landmarks, the types, costs, and ratings of the activities, and the general information of the city, such as population, climate, culture, etc. You can also see other people’s comments and likes, and dislike cities and landmarks. This feature helps you to learn more about each city and decide what to do and see there." ,
        Icon : <DirectionsCarIcon  sx={{fontSize : "140px"}} />
    } , 
    {
        title: "Blog: Read Articles about Cities, Activities, Landmarks, and More" ,
        descreption : "This feature allows you to read articles about cities, activities, landmarks, and more on the same app. You can find articles that are relevant to your interests, such as travel tips, cultural insights, historical facts, etc. You can also comment on the articles and share them with your friends. This feature helps you to enrich your knowledge and enjoy your travel experiences." ,
        Icon : <ArticleIcon sx={{fontSize : "140px"}}/>
    }
]