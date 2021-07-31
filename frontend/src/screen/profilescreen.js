import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { userProfile } from '../action/profile'
import Load from '../components/loading'
import { Button } from 'react-bootstrap'
const Profile = ({ match, history, location }) => {
  const profileData = useSelector((state) => state.userProfile)
  const { loading, error, userInf } = profileData
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userProfile())
  }, [])

  return (
    <>
      {loading && <Load />}
      <div
        className='profile-image'
        style={{
          backgroundImage: 'url(/images/ecommerceProfile.png)',
          width: '100%',
          height: '100vh',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className='mt-4 d-flex justify-content-end'>
        {' '}
        <Button onClick={()=>{
            history.push('/cart')
        }} className="m-2" variant='primary'>GO Cart</Button>
        <Button onClick={()=>{
            history.push('/')
        }} className="m-2" variant='success'>Go Back</Button>
      </div>
    </>
  )
}

export default Profile
