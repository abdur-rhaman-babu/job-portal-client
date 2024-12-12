/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AuthContext } from "./Context";
import { auth } from "./../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = ()=>{
    return signOut(auth)
  }

  const signInWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider)
  }

  const updateUserProfile = (profile)=>{
    return updateProfile(auth.currentUser, profile)
  }

  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, currentUser=>{
      if(currentUser){
        setUser(currentUser)
      }else{
        setUser(null)
      }
      setLoading(false)
    })

    return ()=>{
      unsubcribe()
    }
  },[])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
    updateUserProfile,
    error,
    setError,
    showPassword,
    setShowPassword
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
