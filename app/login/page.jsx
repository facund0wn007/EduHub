"use client"

import React, {useState} from "react";
import "./login.css";
import Google from './components/google'
import Cerralo from './components/cerralo'
import Register from "./components/register/register";
import Signin from "./components/sigin/signin";
import Head from "next/head";



export default function Page() {
    const [retur, setRetur] = useState(true);

    if (retur) {
        return (
            <>
                <Head><title>Login - EduHub</title></Head>
                <div className="container loginContainer">
                    <h1 className="title">EduHub - Login</h1>
                    <Signin />
                    <Google />
                    <p>Dont have an account?</p>
                    <button onClick={() => setRetur(false)}>Register</button>
                    <Cerralo />
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="container registerContainer">
                    <h1 className="title">EduHub - Register</h1>
                    <Register />
                    <Google />
                    <p>You have an account?</p>
                    <button onClick={() => setRetur(true)}>Sign-In</button>
                    <Cerralo />
                </div>
            </>
        );
    }
}
