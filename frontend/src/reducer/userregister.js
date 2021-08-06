import {userRegisterFail,userRegisterRequest,userRegisterSucces} from '../action/types'
export const  userRegister=(state={user:{}},action)=>{
    switch(action.type){
        case userRegisterRequest: return({ ...state,loading:true})
        case userRegisterSucces: return({...state,loading:false,user:action.payload})
        case userRegisterFail: return({loading:false,error:action.payload})
       

        default :return {...state}
    }


}