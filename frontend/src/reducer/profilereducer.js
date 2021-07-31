import {userprofileSucces,userprofileFail,userProfileRequest} from '../action/types'
export const  userProfile=(state={},action)=>{
    switch(action.type){
        case userProfileRequest: return({ ...state,loading:true})
        case userprofileSucces: return({...state,loading:false,userInf:action.payload})
        case userprofileFail: return({loading:false,error:action.payload})
     

        default :return {...state}
    }


}