import { CityDb } from "@/db/models/city"
import ActionCreators from "@/state/actionCreators/action"
import { stateType } from "@/state/reducers"
import { UserInfo, UserInfoActionTypes, isUserInfo } from "@/types/state/auth/userInfo"
import { CitiesActionTypes, isCityDb } from "@/types/state/cities"
import { authorizedPatchRequest, authorizedPostRequest } from "@/utils/auth/autherizedRequest"
import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

export function useCityCardActions(city : CityDb): [((review: string  , setReview : React.Dispatch<React.SetStateAction<string>> )=>void) , (()=>void) , ()=>void, (()=>void) , (()=>void) , (()=>void) , boolean , boolean , boolean] {
const [loadingLike, setLoadingLike] = useState<boolean>(false)
const [loadingDislike, setLoadingDislike] = useState<boolean>(false)
const [loadingSave, setLoadingSave] = useState<boolean>(false)
const dispatch = useDispatch()
const loginInfo = useSelector((state : stateType)=>state.login)
const cities = useSelector((state : stateType)=>state.cities)
const {dispatchAction} = bindActionCreators(ActionCreators, dispatch)
const userInfo = useSelector((state: stateType)=>state.userInfo)



const addReview  = async (review : string , setReview : React.Dispatch<React.SetStateAction<string>> )=>{
if(!loginInfo.token) return 
const data  = await   authorizedPostRequest<CityDb>( loginInfo.token ,  "/api/addCityReview" , {
  city : city.name ,
  review
})
if(!isCityDb(data)) return 
dispatchAction({type : CitiesActionTypes.EDIT_CITY , payload: data })
setReview("")
}





const dislikeCity = async  ()=>{
  setLoadingDislike(true)
  isUserInfo(userInfo) &&      dispatchAction({type : CitiesActionTypes.EDIT_CITIES , payload: {...cities , cities : [...cities.cities.map(item=>{
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
        setLoadingDislike(false)
        }








const likeCity = async  ()=>{
  setLoadingLike(true)
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
    
          dispatchAction({type : CitiesActionTypes.EDIT_CITIES , payload : {...cities , cities : [...cities.cities.map(item =>{
            if(item.name === data.name){
              return data
            }
            else return item
          }) ]}})
          setLoadingLike(false)
          }
          
      
    
    
          const unlikeCity = async  ()=>{
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
                    setLoadingDislike(true)
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
                          setLoadingDislike(false)
                          }

                    const saveCity = async ()=>{
                      setLoadingSave(true)
                      isUserInfo(userInfo)  && dispatchAction({type : UserInfoActionTypes.ADD_USER_INFO , payload: {
                        ...userInfo , savedCities :   userInfo.savedCities
                      }})
                      const newUser  = await axios.post("/api/saveCity") as UserInfo
                      isUserInfo(userInfo) && dispatchAction({type : UserInfoActionTypes.ADD_USER_INFO , payload: newUser })
                      setLoadingSave(false)
                    }
            
          
        
return  [addReview , likeCity , unlikeCity , dislikeCity , cancelDislike  , saveCity , loadingSave  , loadingLike , loadingDislike ]
}