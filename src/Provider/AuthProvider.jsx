import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
       const auth = getAuth(app);
      

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    

          
    //    --- Create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
       }

    //    --- Sign in
       const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
       }

    //    --- log Out
       const logOut = () =>{
        signOut(auth)
       }

       useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('logged in user', loggedUser)
            setUser(loggedUser)
        })
        return () =>{
            unsubscribe();
        }
    }, [])

    const authInfo = {
          user,
          createUser,
          login,
          logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;