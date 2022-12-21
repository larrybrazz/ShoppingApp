import React, {createContext} from 'react'
import { useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [profile, setProfile] = useState({
        name:"Lanre",
        avatar:"https://images.unsplash.com/photo-1638101182361-175578811ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWd1fHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
    })

  return (
    <AuthContext.Provider value={{profile, setProfile}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider