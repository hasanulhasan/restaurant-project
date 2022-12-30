import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { app } from '../../src/firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider)
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('user entered')
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, [])


  const authInfo = { user, providerLogin, logOut }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;