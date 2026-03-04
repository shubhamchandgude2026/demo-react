import React, { createContext, useState } from 'react'

export const auth = createContext();
const AuthProvider = ({children}) => {
    const [isLogin,setIsLogin] = useState(false);
    const login = ()=>setIsLogin(true);
    const logout = ()=>setIsLogin(false);
    const authValue = {
        isLogin,
        setIsLogin,
        login,
        logout
    };
  return (
    <auth.Provider value={authValue}>
        {children}
    </auth.Provider>
  )
}

export default AuthProvider