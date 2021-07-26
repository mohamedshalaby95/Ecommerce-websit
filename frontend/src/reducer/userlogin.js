import {userLoginFail,userLoginSucces,userLoginRequest,userLogOut} from '../action/types'
export const  userReducer=(state={},action)=>{
    switch(action.type){
        case userLoginRequest: return({ ...state,loading:true})
        case userLoginSucces: return({...state,loading:false,userInf:action.payload})
        case userLoginFail: return({loading:false,error:action.payload})
        case userLogOut: return({})

        default :return {...state}
    }


}