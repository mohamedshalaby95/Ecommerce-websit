import { combineReducers} from "redux"
import {reducerproduct} from './productreducer'
import {cartreducer}  from './cartreducer'
import {userReducer} from './userlogin'
import {userRegister} from './userregister'
import {userProfile} from './profilereducer'
import {orderReducer} from './orderReducer'

export default combineReducers({
    userLogin:userReducer,
products:reducerproduct,
cart:cartreducer,
userRegister,
userProfile,
order:orderReducer,


})