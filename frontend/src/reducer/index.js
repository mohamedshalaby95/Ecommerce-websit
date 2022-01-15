import { combineReducers} from "redux"
import {reducerproduct} from './productreducer'
import {cartreducer}  from './cartreducer'
import {userReducer} from './userlogin'
import {userRegister} from './userregister'
import {userProfile} from './profilereducer'
import {orderReducer} from './orderReducer'
import {orderDetailsReducer} from './orderReducer'
import {orderPayReducer} from './orderReducer'
import {getAdminUsersReducer} from './adminUsersReducer'
import {getAdminsReducer} from './adminAdminsReducer'
import{deleteAdminsReducer} from './deleteAdminReducer'

export default combineReducers({
    userLogin:userReducer,
products:reducerproduct,
cart:cartreducer,
userRegister,
userProfile,
order:orderReducer,
orderDetails:orderDetailsReducer,
orderPay:orderPayReducer,
usersAdmin:getAdminUsersReducer,
admins:getAdminsReducer,
deleteAdmin:deleteAdminsReducer


})