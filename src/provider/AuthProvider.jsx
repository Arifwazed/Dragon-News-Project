import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [users,setUsers] = useState(null)
    const [loading,setLoading] = useState(true)
    // console.log(users)

    // add email and password to firebase
    const createUser = (email,password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // log out a user from website
    const logOutUser = () => {
        setLoading(false)
        return signOut(auth)
    }

    // 
    const logInUser = (email,password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser,updatedData)
    }

    // when register page reload it hold the user information
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUsers(currentUser)
            setLoading(false)
        });
        return () => {unsubscribe()} 
    },[])

    // any function,state,value can be used at any page by it. cz it give the input to the auth context
    const authData = {
        users,
        setUsers,
        createUser,
        logOutUser,
        logInUser,
        loading,
        updateUser
    }
    return (
        <AuthContext value={authData}>{children}</AuthContext>
        
    );
};

export default AuthProvider;