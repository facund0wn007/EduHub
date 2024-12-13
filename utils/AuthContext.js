"use client"; // Asegurarte de que este archivo se ejecuta como cliente

import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword } from 'firebase/auth'

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSignUp = async (email, password) => {
        setLoading(true);
        setError("");

        try {
            const UserCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log("Usuario creado: ", UserCredential.user);
            alert("Registro Exitoso");
        }
        catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
    }

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };



    const logOut = () => {
        signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, googleSignIn, logOut, handleSignUp, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};