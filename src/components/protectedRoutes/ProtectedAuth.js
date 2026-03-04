import React, { useContext } from 'react'
import { auth } from '../../context/AuthProvider'
import { Navigate } from 'react-router-dom';

const ProtectedAuth = ({children}) => {
    const {isLogin,login,logout} = useContext(auth);
    console.log(isLogin);
  return isLogin? children: <Navigate to={'/login'}/>
}

export default ProtectedAuth