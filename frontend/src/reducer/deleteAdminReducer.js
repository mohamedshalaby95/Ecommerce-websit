import {deleteAdminRequest,deleteAdminSucces,deleteAdminFail} from '../action/types'

export const deleteAdminsReducer=( state={users:[]},action)=>{

    switch(action.type){
        case deleteAdminRequest :return({...state,loading:true})

        case deleteAdminSucces :return({...state,users:action.payload,loading:false})

        case deleteAdminFail :return({...state,error:action.payload,loading:false})
          default:return({...state})

    }

}