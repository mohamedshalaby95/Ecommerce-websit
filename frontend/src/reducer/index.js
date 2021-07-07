import { combineReducers} from "redux"
import {reducerproduct} from './productreducer'
import {cartreducer}  from './cartreducer'

export default combineReducers({
products:reducerproduct,
cart:cartreducer

})