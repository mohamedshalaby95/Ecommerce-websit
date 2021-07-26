import { combineReducers} from "redux"
import {reducerproduct} from './productreducer'
import {cartreducer}  from './cartreducer'
import {userReducer} from './userlogin'

export default combineReducers({
    userLogin:userReducer,
products:reducerproduct,
cart:cartreducer,


})