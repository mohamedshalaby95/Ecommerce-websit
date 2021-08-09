

import {orderFail,orderSucces,orderRequest} from '../action/types'

export  const orderReducer=(state={},action)=>{

    switch(action.type){
        case orderRequest:return({...state,loading:true})
        case orderSucces:return({...state,loading:false,data:action.payload})
        case orderFail:return({...state,loading:false,error:action.payload})
        default: return({...state})
    }

}