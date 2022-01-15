import {adminAdminsFail,adminAdminsSucces,adminAdminsRequest} from '../action/types'

export const getAdminsReducer=( state={users:[]},action)=>{

    switch(action.type){
        case adminAdminsRequest :return({...state,loading:true})

        case adminAdminsSucces :return({...state,users:action.payload,loading:false})

        case adminAdminsFail :return({...state,error:action.payload,loading:false})
          default:return({...state})

    }

}