import productAPIS from '../apis/productapis'
import {addToCart,removeForCart,savePaymentMethod,shippingSaveData} from './types'

export const ADDTOCART=(id,qty)=> async(dispatch,getState) =>{

    const {data}= await productAPIS.get(`/api/product/${id}`)


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

 export  const ShippingSaveData=(data)=> async (dispatch)=>{
     dispatch({
         type:shippingSaveData,
         payload:data
     })
     localStorage.setItem('shippingData',JSON.stringify(data))
 }

 export  const SavePaymentMethod=(data)=> async (dispatch)=>{
    dispatch({
        type:savePaymentMethod,
        payload:data
    })
    localStorage.setItem('paymentMethod',JSON.stringify(data))
}


