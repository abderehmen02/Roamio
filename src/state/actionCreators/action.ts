import { StateAction , StateActionTypes } from "@/types/state";
import { Dispatch}from 'redux'


export const emitAction  = ( actionType : StateActionTypes , payload? : any  ) : (dispatch : Dispatch<StateAction>)=>void =>{
    return ( (dispatch : Dispatch<StateAction> )=>{

dispatch({type : actionType , 
        payload : payload
        })
        
        } )
    }



export const dispatchAction  = ( action : StateAction ) : (dispatch : Dispatch<StateAction>)=>void =>{
        return ( (dispatch : Dispatch<StateAction> )=>{
    
    dispatch(action)
            
            } )
        }
    

export type EmitAction = ReturnType<typeof  emitAction>

export const ActionCreators = {emitAction , dispatchAction }
export default ActionCreators


