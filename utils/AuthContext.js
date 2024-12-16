"use client"; // Asegurarte de que este archivo se ejecuta como cliente

import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "@/firebase/config";
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'

const AuthContext = createContext();

//Funcion Principal de todo el AuthContext
export const AuthContextProvider = ({ children }) => {
    //Variables dinamicas con useState
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    //Funcion para Registrar un usuario por mail y contraseña
    const handleSignUp = async (email, password, confirmPassword) => {
        setLoading(true);
        setError("");
        setMessage("");

        if(password !== confirmPassword){
            setError("Passwords do not match");
            return true;
        }

        try {
            const UserCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log("Usuario creado: ", UserCredential.user);
            signOut(auth);
            setMessage("Registro Exitoso");
        }
        catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
    }

    //Funcion para enviar el mail de verificacion de la cuenta
    const emailVerification = async () => {
        await sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log("Correo de verificación enviado.");
                alert("Verifique su cuenta en el mail para Iniciar Sesion");
            })
            .catch((error) => {
                setError("Error sending verification email")
;            });
    }

    //Funcion para Loguearse con mail y contraseña
    const handleLogin = async (email, password) => {
        setLoading(true);
        setError("");
        setMessage("");

        try {
            const UserCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = UserCredential.user;
            console.log(user);
            if(!user.emailVerified){
                setError("Verifique su cuenta antes de iniciar sesion");
                signOut(auth);
                return;
            }
            setMessage("Inicio de Sesion exitoso");
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }

    //Funcion para Registrar/loguear una cuenta con google
    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    //Funcion para cerrar sesion en la cuenta activa
    const logOut = () => {
        signOut(auth);
    };

    //Estado useEffect para funciones que se ejecuten al recargo de los componentes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (user) {
                await user.reload();
                if (user.emailVerified) {
                    console.log("Usuario con correo verificado.");
                } else {
                    console.log("El usuario no ha verificado su correo.");
                }
            }
        });
        return () => unsubscribe();
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, googleSignIn, logOut, handleSignUp, handleLogin, loading, error, message, emailVerification }}>
            {children}
        </AuthContext.Provider>
    );
};

//Exportar la variable UserAuth para ser utilizada en todas las paginas
export const UserAuth = () => {
    return useContext(AuthContext);
};