


import {orderDetailsFail,orderDetailsRequest,orderDetailsSucces,orderFail,orderSucces,orderRequest,orderPAYRest

,orderPAYFail,orderPAYSucces,orderPAYRequest} from '../action/types'

export  const orderReducer=(state={},action)=>{

    switch(action.type){
        case orderRequest:return({...state,loading:true})
        case orderSucces:return({...state,loading:false,data:action.payload})
        case orderFail:return({...state,loading:false,error:action.payload})
        default: return({...state})
    }

}



export const orderDetailsReducer=(state={},action)=>{

    switch (action.type){
        case orderDetailsRequest:return({...state,loading:true})
        case orderDetailsSucces:return({...state,loading:false,data:action.payload})
        case orderDetailsFail:return({...state,loading:false,error:action.payload})
        default :return({...state})
    }
}


export const orderPayReducer=(state={},action)=>{

    switch (action.type){
        case orderPAYRequest:return({...state,loading:true})
        case orderPAYSucces:return({...state,loading:false,success:true})
        case orderPAYFail:return({...state,loading:false,error:action.payload})
        case orderPAYRest:return({})
        default :return({...state})
    }
}