import { CategoryCard } from "@/components/marketing/cards"
import { cn } from "@/lib/tailwind"




const categoriesCardsInfo : {title: string  , images :string[] , descreption : string }[] = [
    {
        title : "Modern Cities" ,
        descreption : "Experience the allure of contemporary metropolises with cutting-edge infrastructure, futuristic architecture, and a fast-paced urban lifestyle. Modern cities offer a vibrant mix of culture, technology, and innovation, making them ideal destinations for those seeking a dynamic and cosmopolitan atmosphere." ,
        images : ["/Brisbane-1.webp" ]
    } ,
    {
        title : "Beach Destinations" ,
        descreption : "Relax and unwind in picturesque beachfront locales where golden sands meet azure waters. Beach destinations offer sun-soaked shores, water sports, and a tranquil ambiance. Whether you crave relaxation or adventure, these coastal paradises promise the perfect getaway." ,
        images : ["/beaches.jpg"  ] 
    } ,
    {
        title : "Historic Cities" ,
        descreption : "Step back in time and immerse yourself in the rich tapestry of history. Historic cities are a living testament to centuries of culture, architecture, and heritage. Explore ancient landmarks, cobblestone streets, and the stories that have shaped these timeless destinations" ,
        images : ["/historic.webp"  ]
    } ,
    {
        title : "Nature Retreats" ,
        descreption : "Connect with nature in breathtaking natural settings. Nature retreats boast lush forests, pristine lakes, majestic mountains, and abundant wildlife. Whether you seek hiking, wildlife observation, or simply a serene escape, these destinations provide a rejuvenating communion with the great outdoors." ,
        images : ["/nature.webp"]
    },
    {
        title : "Nightlife Hotspots" ,
        descreption : "Embrace the vibrant nightlife scene in cities that never sleep. Nightlife hotspots come alive after dark with bustling streets, illuminated skylines, world-class entertainment, and an array of bars and clubs. Get ready to dance, dine, and make unforgettable memories in these electrifying urban playgrounds." ,
        images : ["/nightlife.webp"  ]
    }

]

export const CategoriesCards = ()=>{
return <div className="w-full  flex items-center justify-center" >
    <div  style={{height : "fit-content"}} className="w-[1200px]     gap-5 flex flex-wrap   items-center justify-center  " >
    {categoriesCardsInfo.map((cardInfo , index )=><CategoryCard key={cardInfo.title} className={ cn("bg-secondary text-primaryDark shadow-2xl"  )  }  {...cardInfo} />)}
</div></div>
}