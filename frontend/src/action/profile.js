
import {userProfileRequest,userprofileFail,userprofileSucces} from './types'
import profileApi from '../apis/userprofile'

export  const userProfile=()=>async (dispatch)=>{

    const {token}=JSON.parse(localStorage.getItem('userInf'))
  

    try{
        dispatch({type:userProfileRequest})
         const config={
             headers:{
                 'Content-Type':'application/json',
                 Authorization:` Bearer ${token}`
             }
         }
         const {data}= await profileApi.get('/profile',config)
     

        dispatch({
            type:userprofileSucces,
            payload:data
        })

        

        
     
  


    } catch(error){
      
        dispatch({
            type:userprofileFail,
            payload:error.response&&error.response.data.message?error.response.data.message:error.message
        })
    }
}