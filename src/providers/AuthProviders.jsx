import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app)



const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);

    // register user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login user
    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sing out user
    const logOut = () =>{
        return signOut(auth)
    }


    // state on change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state changed', currentUser);
            setUser(currentUser)
        });

        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        singInUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;