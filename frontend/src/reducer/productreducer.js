
import { fetchProduct,fetchProducts } from "../action/types"
import _ from 'lodash'
export const reducerproduct= (state={},action) =>{

switch(action.type){
    case fetchProduct: return({...state,[action.payload._id]:action.payload})
    case fetchProducts: return({...state,..._.mapKeys(action.payload,'_id')})

  default:return {...state}

}
}