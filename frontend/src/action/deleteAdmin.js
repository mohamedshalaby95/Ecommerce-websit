
import {deleteAdminFail,deleteAdminRequest,deleteAdminSucces} from './types'
import deleteAdminApi from '../apis/deleteAdmin'



export const deleteAdminAction=(id)=>
    
 async (dispatch)=>{
    const {token}=JSON.parse(localStorage.getItem('userInf'))
 try{
 dispatch({
     type:deleteAdminRequest
 })
 const config = {
    headers: {
      Authorization:` Bearer ${token}`
    },
  }

 const{data}= await deleteAdminApi.delete(`admin/delete/${id}`,config)

 dispatch({
     type:deleteAdminSucces,
     payload:data
 })

 }
 catch(error){
    dispatch({
        type: deleteAdminFail,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })

 }



}




