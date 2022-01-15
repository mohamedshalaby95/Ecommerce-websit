import {
  userLoginRequest,
  userLoginFail,
  userLoginSucces,
  userLogOut,
  userRegisterFail,
  userRegisterSucces,
  userRegisterRequest,
  usersAdminFail,
  usersAdminSucces,
  usersAdminRequest,
  adminAdminsFail,
  adminAdminsRequest,
  adminAdminsSucces
} from './types'
import getAdminsApi from '../apis/getAdmins'

import userlogin from '../apis/userlogin'
import userRegisterApi from '../apis/register'
import getUsersAdminApi from '../apis/getUsersAdmin'
export const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: userLoginRequest })
    const config = {
      Headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await userlogin.post(
      '/api/login',
      { email, password },
      config
    )

    dispatch({
      type: userLoginSucces,
      payload: data,
    })

    localStorage.setItem('userInf', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: userLoginFail,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const userLogout = () => (dispatch) => {
  localStorage.removeItem('userInf')
  dispatch({ type: userLogOut })
}
export const userRegister = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: userRegisterRequest })
    const config = {
      Headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await userRegisterApi.post(
      '',
      { name, email, password },
      config
    )

    dispatch({
      type: userRegisterSucces,
      payload: data,
    })

    dispatch({
      type: userLoginSucces,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: userRegisterFail,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getUsersAdmin = () => async (dispatch) => {
    const {token}=JSON.parse(localStorage.getItem('userInf'))
    console.log(token)
  try {
    dispatch({ type: usersAdminRequest })
    const config = {
      headers: {
        Authorization:` Bearer ${token}`
      },
    }
    const { data } = await getUsersAdminApi.get('/admin/users', config)

    dispatch({
      type: usersAdminSucces,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: usersAdminFail,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// get user by id for update
export const getUserdetails = () => async (dispatch) => {
  const {token}=JSON.parse(localStorage.getItem('userInf'))
  
try {
  dispatch({ type: adminAdminsRequest })
  const config = {
    headers: {
      Authorization:` Bearer ${token}`
    },
  }
  const { data } = await getAdminsApi.get(`/admin/admins`, config)

  dispatch({
    type: adminAdminsSucces,
    payload: data,
  })
} catch (error) {
  dispatch({
    type: adminAdminsFail,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  })
}
}

