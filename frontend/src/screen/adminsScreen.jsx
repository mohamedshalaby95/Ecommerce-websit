import React,{useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import Loading from '../components/loading'
import Error from '../components/error'
import { Button } from 'react-bootstrap'
import {deleteAdminAction} from '../action/deleteAdmin'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import {getUserdetails} from '../action/userlogin'


const AdminsScreen = ({match}) => {

    
    const dispatch=useDispatch()
    const admins=useSelector((state)=>  state.admins)
   const {error,loading,users}=admins
   const  handeleDelete=(id)=>{
  dispatch(deleteAdminAction(id))
        }
    
    useEffect(()=>{
      dispatch(getUserdetails())

    },[dispatch])
   
    return  (
      <>
        {loading ? <Loading /> : ''}
        {error ? <Error error={error} /> : ''}
  
        <Table className=' bg-dark table'>
          <Thead className='text-center'>
            <Tr>
              <Th>#</Th>
              <Th>UserName</Th>
              <Th>User Email</Th>
              <Th>user admin</Th>
              <Th>delete admin</Th>
            </Tr>
          </Thead>
          <Tbody className='text-center'>
            {users === undefined ? (
              <Loading />
            ) : (
              users.map((user, i = 0) => (
                <Tr key={user._id}>
                  <Td>{++i}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <i
                      style={{ color: 'green' }}
                      className='fa fa-check-circle fa-3x'
                      aria-hidden='true'
                    ></i>
                  </Td>
                  <Td><Button onClick={()=>{handeleDelete(user._id)}} className='btn btn-danger'>delete</Button></Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </>
    )
}
 
export default AdminsScreen;
