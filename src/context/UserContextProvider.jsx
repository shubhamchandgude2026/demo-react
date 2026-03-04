import React, { createContext, useState } from 'react'

export const userContext = createContext();

const UserContextProvider = ({children}) => {
    const [user,setUser]  = useState('Shubham');
    const [formikFormData,setFormikFormData] = useState({});
  const contextValue = {
    user,
    setUser,
    formikFormData,
    setFormikFormData,
  }
    return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  )
}

export default UserContextProvider