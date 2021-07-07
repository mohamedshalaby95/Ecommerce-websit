import productAPIS from '../apis/productapis'
import {addToCart,removeForCart} from './types'

export const ADDTOCART=(id,qty)=> async(dispatch,getState) =>{

    const {data}= await productAPIS.get(`/api/product/${id}`)

console.log(data)
    dispatch({ type:addToCart,payload:{
    product:data._id,
        name:data.name,
        image:data.image,
        price:data.price,
        countInStock:data.countInStock,
        qty
    }})
    localStorage.setItem('cartitems',JSON.stringify(getState().cart.cartitems))
 }
 
 export const REMOVEFROMCART=(id)=> async(dispatch,getState) =>{


    dispatch({ type:removeForCart,payload:id})
    localStorage.setItem('cartitems',JSON.stringify(getState().cart.cartitems))
 }


