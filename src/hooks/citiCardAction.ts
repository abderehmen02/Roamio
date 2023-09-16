import { CityDb } from "@/db/models/city"
import ActionCreators from "@/state/actionCreators/action"
import { stateType } from "@/state/reducers"
import { UserInfo, UserInfoActionTypes, isUserInfo } from "@/types/state/auth/userInfo"
import { CitiesActionTypes, isCityDb } from "@/types/state/cities"
import { authorizedPatchRequest, authorizedPostRequest } from "@/utils/auth/autherizedRequest"
import axios from "axios"
import { Dispatch, SetStateAction, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"






export function useCityCardActions(city : CityDb | undefined , setCity : Dispatch<SetStateAction<CityDb | undefined>> ): [((review: string  , setReview : React.Dispatch<React.SetStateAction<string>> )=>void) , (()=>void) , ()=>void, (()=>void) , (()=>void) , (()=>void) , (()=>void) , boolean , boolean , boolean] {
const [loadingLike, setLoadingLike] = useState<boolean>(false)
const [loadingDislike, setLoadingDislike] = useState<boolean>(false)
const [loadingSave, setLoadingSave] = useState<boolean>(false)
const dispatch = useDispatch()
const loginInfo = useSelector((state : stateType)=>state.login)
const cities = useSelector((state : stateType)=>state.cities)
const {dispatchAction} = bindActionCreators(ActionCreators, dispatch)
const userInfo = useSelector((state: stateType)=>state.userInfo)



const addReview  = async (review : string , setReview : React.Dispatch<React.SetStateAction<string>> )=>{
if(!city) return 
if(!loginInfo.token || !isUserInfo(userInfo) ) return 
setCity((cityVal)=>{ if(cityVal)return({...cityVal , reviews : [...cityVal.reviews , {review , userId : userInfo._id} ] }) })
dispatchAction({type: CitiesActionTypes.EDIT_CITY , payload: {...city , reviews: [ ...city.reviews , {userId : userInfo._id , review : review} ]}   })
authorizedPostRequest<CityDb>( loginInfo.token ,  "/api/addCityReview" , {
  city : city.name ,
  review
}).then((data )=>{
  if(!isCityDb(data)) return 
  dispatchAction({type : CitiesActionTypes.EDIT_CITY , payload: data })  
  setCity(data)
})
setReview("")
}





const dislikeCity = async  ()=>{
  if(!city || !isUserInfo(userInfo)) return 
  setLoadingDislike(true)
  setCity((cityVal)=>{if(cityVal)return ({...cityVal , dislikes : [...cityVal.dislikes , userInfo._id]})})
  dispatchAction({type : CitiesActionTypes.EDIT_CITIES , payload: {...cities , cities : [...cities.cities.map(item=>{
          if(item.name === city.name){
            return ({
              ...item , dislikes : [...item.dislikes , userInfo._id ]
            })
          }
          else return item
        }) ] }})
  
        const responce = loginInfo.token   && await   authorizedPatchRequest<any>(loginInfo.token , "/api/addDislike" , {city  : city.name } )
        const data = responce.data ;
  
        dispatchAction({type : CitiesActionTypes.EDIT_CITIES , payload : {...cities , cities : [...cities.cities.map(item =>{
          if(item.name === data.name){
            return data
          }
          else return item
        }) ]}})
        setCity(data)
        setLoadingDislike(false)
        }








const likeCity = async  ()=>{
  if(!city || !isUserInfo(userInfo) ) return 
  setLoadingLike(true)
  setCity((cityVal)=>{if(cityVal)return ({...cityVal , likes: [...cityVal.likes , userInfo._id]})})
  isUserInfo(userInfo) &&      dispatchAction({type : CitiesActionTypes.EDIT_CITIES , payload: {...cities , cities : [...cities.cities.map(item=>{
            if(item.name === city.name){
              return ({
                ...item , likes : [...item.likes , userInfo._id ]
              })
            }
            else return item
          }) ] }})
    
          const responce = loginInfo.token   && await   authorizedPatchRequest<any>(loginInfo.token , "/api/addLike" , {city  : city.name } )
          const data = responce.data ;
          dispatchAction({type : CitiesActionTypes.EDIT_CITY , payload : data })
          console.log("data" ,data )
          setCity(data)
          setLoadingLike(false)
          }
          
      
    
    
          const unlikeCity = async  ()=>{
            if(!city) return 
            setLoadingLike(true)
            isUserInfo(userInfo) &&      dispatchAction({type : CitiesActionTypes.EDIT_CITIES , payload: {...cities , cities : [...cities.cities.map(item=>{
                    if(item.name === city.name){
                      return ({
                        ...item , likes : item.likes.filter(item=>item !== userInfo._id)
                      })
                    }
                    else return item
                  }) ] }})
            
                  const responce = loginInfo.token   && await   authorizedPatchRequest<any>(loginInfo.token , "/api/cancelLike" , {city  : city.name } )
                  const data = responce.data ;
            
                  dispatchAction({type : CitiesActionTypes.EDIT_CITIES , payload : {...cities , cities : [...cities.cities.map(item =>{
                    if(item.name === data.name){
                      return data
                    }
                    else return item
                  }) ]}})
                  setLoadingLike(false)
                  }
            

                  



                  const cancelDislike = async  ()=>{
                    if(!city || !isUserInfo(userInfo) ) return 
                    setLoadingDislike(true)
                    setCity((cityVal)=>{if(cityVal)return ({...cityVal , dislikes : cityVal.dislikes.filter((item)=>item !== userInfo._id)})})
                    isUserInfo(userInfo) &&      dispatchAction({type : CitiesActionTypes.EDIT_CITIES , payload: {...cities ,cities : [...cities.cities.map(item=>{
                            if(item.name === city.name){
                              return ({
                                ...item , dislikes : item.dislikes.filter(item=>item !== userInfo._id)
                              })
                            }
                            else return item
                          }) ] }})
                    
                          const responce = loginInfo.token   && await   authorizedPatchRequest<any>(loginInfo.token , "/api/cancelDislike" , {city  : city.name } )
                          const data = responce.data ;
                    
                          dispatchAction({type : CitiesActionTypes.EDIT_CITIES , payload : {...cities , cities : [...cities.cities.map(item =>{
                            if(item.name === data.name){
                              return data
                            }
                            else return item
                          }) ]}})

                          setCity(data)
                          setLoadingDislike(false)
                          }

                    const saveCity = async ()=>{
                      if(!city) return 
                      setLoadingSave(true)
                      isUserInfo(userInfo)  && dispatchAction({type : UserInfoActionTypes.ADD_USER_INFO , payload: {
                        ...userInfo , savedCities :   userInfo.savedCities
                      }})
                      const newUser  = loginInfo.token && await authorizedPatchRequest<{data: UserInfo}>( loginInfo.token,  "/api/saveCity" , {city : city.name} ) 
                      if(!newUser) return console.error("can not get the user from the api")
                        isUserInfo(newUser.data ) && dispatchAction({type : UserInfoActionTypes.ADD_USER_INFO , payload: newUser.data  })
                      setLoadingSave(false)
                    }
            


                    const unsaveCity = async ()=>{
                      if(!city) return
                      console.log("unsacing city")
                      setLoadingSave(true)
                      isUserInfo(userInfo) && dispatchAction({type : UserInfoActionTypes.ADD_USER_INFO , payload : {
                        ...userInfo , savedCities : userInfo.savedCities.filter(savedCity=>savedCity !== city.name)
                      }})
                      const newUser  = loginInfo.token && await authorizedPatchRequest<{data: UserInfo}>( loginInfo.token,  "/api/unsaveCity" , {city : city.name} )
                      console.log("new user" , newUser ) 
                      if(!newUser) return console.error("can not get the user from the api")
                        isUserInfo(newUser.data ) && dispatchAction({type : UserInfoActionTypes.ADD_USER_INFO , payload: newUser.data  })
                      setLoadingSave(false)
                    }
                    
        
return  [addReview , likeCity , unlikeCity , dislikeCity , cancelDislike  , saveCity , unsaveCity , loadingSave  , loadingLike , loadingDislike ]
}