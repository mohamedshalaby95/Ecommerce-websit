import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Loading from '../components/loading'
import Error from '../components/error'
import { getUsersAdmin } from '../action/userlogin'

import { Button } from 'react-bootstrap'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const Useradmin = ({ history }) => {
  const dispatch = useDispatch()

  const usersData = useSelector((state) => state.usersAdmin)
  const { loading, error, users } = usersData

  useEffect(() => {
    dispatch(getUsersAdmin())
  }, [dispatch])
  return (
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
                    style={{ color: 'red' }}
                    className='fa fa-times-circle fa-3x'
                    aria-hidden='true'
                  ></i>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </>
  )
}

export default Useradmin
