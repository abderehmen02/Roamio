import { CityDb } from "@/db/models/city"
import ActionCreators from "@/state/actionCreators/action"
import { stateType } from "@/state/reducers"
import { isUserInfo } from "@/types/state/auth/userInfo"
import { CitiesActionTypes } from "@/types/state/cities"
import { authorizedPatchRequest } from "@/utils/auth/autherizedRequest"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

export function useCityCardActions(city : CityDb): (()=>any)[]{
const dispatch = useDispatch()
const loginInfo = useSelector((state : stateType)=>state.login)
const cities = useSelector((state : stateType)=>state.cities)
const {dispatchAction} = bindActionCreators(ActionCreators, dispatch)
const userInfo = useSelector((state: stateType)=>state.userInfo)


const dislikeCity = async  ()=>{
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
        }








const likeCity = async  ()=>{
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
          }
          
      
    
    
          const unlikeCity = async  ()=>{
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
                  }
            
    

return  [likeCity , unlikeCity , dislikeCity]
}