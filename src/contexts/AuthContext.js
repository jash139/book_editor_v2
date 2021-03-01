import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { auth } from "../firebase";
import "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);


    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
            .then((res) => {
                createUserInDataBase(res.user);
            })
            .catch(err => err);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    function createUserInDataBase(user) {
        const uid = user.uid;
        const email = user.email;
        const profileObj = {
            uid,
            email
        }
        axios.post(process.env.REACT_APP_BACKEND_HOST_URL + "/user", profileObj)
            .then((res) => {
                return res.data;
            })
            .catch(err => {
                return false;
            });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);


    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}