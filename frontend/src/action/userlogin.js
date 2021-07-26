import {userLoginRequest,userLoginFail,userLoginSucces,userLogOut} from './types'

import userlogin from '../apis/userlogin'

export  const userLogin=(email,password)=>async (dispatch)=>{

    try{
        dispatch({type:userLoginRequest})
         const config={
             Headers:{
                 'Content-Type':'application/json'
             }
         }
         const {data}= await userlogin.post('/api/login',{email,password},config)
     

        dispatch({
            type:userLoginSucces,
            payload:data
        })
        
     
    localStorage.setItem('userInf',JSON.stringify(data))


    } catch(error){
      
        dispatch({
            type:userLoginFail,
            payload:error.response&&error.response.data.message?error.response.data.message:error.message
        })
    }
}

export const userLogout=()=>(dispatch)=>{
    localStorage.removeItem('userInf')
    dispatch({type:userLogOut})
}
