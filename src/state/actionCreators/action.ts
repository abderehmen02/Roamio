import { StateAction , StateActionTypes } from "@/types/state";
import { Dispatch}from 'redux'


export const emitAction  = ( actionType : StateActionTypes , payload? : any  ) : (dispatch : Dispatch<StateAction>)=>void =>{
    return ( (dispatch : Dispatch<StateAction> )=>{

dispatch({type : actionType , 
        payload : payload
        })
        
        } )
    }


export type EmitAction = ReturnType<typeof  emitAction>
export default {emitAction}


