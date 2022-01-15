import {usersAdminFail,usersAdminRequest,usersAdminSucces} from '../action/types'

export const getAdminUsersReducer=( state={users:[]},action)=>{

    switch(action.type){
        case usersAdminRequest :return({...state,loading:true})

        case usersAdminSucces :return({...state,users:action.payload,loading:false})

        case usersAdminFail :return({...state,error:action.payload,loading:false})
          default:return({...state})

    }

}