import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';


export const authContext = createContext()

const Authprovider = ({children}) => {

    const [user , setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const [loading,setLoding] = useState(true)
    
    const googleLogin = () => {
        return signInWithPopup(auth,googleProvider)
    }

    const createAccount = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logoutUser = () => {
        return signOut(auth)
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoding(false)
        })
        return () => {
           return unSubscribe()
        }
    },[])

    const handleForgot = (email) => {
       return sendPasswordResetEmail(auth, email)
    }

    const authInfo = {
        user,
        loading,
        loginUser,
        logoutUser,
        createAccount,
        setUser,
        handleForgot,
        googleLogin,
        updateUserProfile,
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;