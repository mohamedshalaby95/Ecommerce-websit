 import productApi from '../apis/productapis'
 import { fetchProducts,fetchProduct } from './types'
 
 export const FETCH_PRODUCTS=() =>

 async(dispatch)=>{

    const {data} = await productApi.get('/api/product')
  

     dispatch(
         {
             type:fetchProducts,
             payload:data
         }
     )




 }
 export const FETCH_PRODUCT=(id) =>

    async(dispatch)=>{
   
       const {data} = await productApi.get(`/api/product/${id}`)
      
   
        dispatch(
            {
                type:fetchProduct,
                payload:data
            }
        )
   
   }
   
   
    