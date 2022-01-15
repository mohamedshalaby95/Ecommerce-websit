import orderApi from '../apis/order'
import {orderFail,orderRequest,orderSucces,orderPAYFail,orderPAYRequest,orderPAYSucces} from './types'



export const Order=(order) => async(dispatch) =>{
    const {token}=JSON.parse(localStorage.getItem('userInf'))
try{

    dispatch({type:orderRequest})
    const config={
       headers:{
        'Content-Type':'application/json',
        Authorization:` Bearer ${token}`
       }
    }

    const data= await orderApi.post('',order,config)
    dispatch({
        type:orderSucces,
        payload:data
    })

}catch(error){
    
    dispatch({
        type:orderFail,
        payload:error.response&&error.response.data.message?error.response.data.message:error.message
    })
}

}


export const OrderPay=(orderid,paymentResult) => async(dispatch) =>{
    const {token}=JSON.parse(localStorage.getItem('userInf'))
try{

    dispatch({type:orderPAYRequest})
    const config={
       headers:{
        'Content-Type':'application/json',
        Authorization:` Bearer ${token}`
       }
    }

    const data= await orderApi.put(`${orderid}/pay`,paymentResult,config)
    dispatch({
        type:orderPAYSucces,
        payload:data
    })

}catch(error){
    
    dispatch({
        type:orderPAYFail,
        payload:error.response&&error.response.data.message?error.response.data.message:error.message
    })
}

}

