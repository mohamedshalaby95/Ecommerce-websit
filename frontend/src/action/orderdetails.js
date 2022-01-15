import orderApi from '../apis/order'

import {orderDetailsFail,orderDetailsSucces,orderDetailsRequest} from './types'


export const  orderDetails=(id)=> async(dispatch)=>{

    const {token}=JSON.parse(localStorage.getItem('userInf'))
try{

    dispatch({type:orderDetailsRequest})
    const config={
       headers:{
      
        Authorization:` Bearer ${token}`
       }
    }

    const {data}= await orderApi.get(`${id}`,config)
    dispatch({
        type:orderDetailsSucces,
        payload:data
    })

}catch(error){
    
    dispatch({
        type:orderDetailsFail,
        payload:error.response&&error.response.data.message?error.response.data.message:error.message
    })
}

}