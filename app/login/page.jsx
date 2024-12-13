"use client"

import React, {useState} from "react";
import "./login.css";
import Google from './components/google'
import Cerralo from './components/cerralo'
import Register from "./components/register";
import Signin from "./components/signin";
import Head from "next/head";



export default function Page() {

    const [retur, setRetur] = useState(true);

    if(retur) {
        return (
            <>  
                <Head><title>Register - EduHub</title></Head>
                <div className="container">
                    <h1 className="title">EduHub - Login</h1>
                    <Signin/>
                    <Google/>
                    <p>Dont have account?</p>
                    <button onClick={() => setRetur(false)}>Register</button>
                    <Cerralo/>
                </div>
            </>
        );
    }
    else {
        return (
            <>  
                <div className="container">
                    <h1 className="title">EduHub - Register</h1>
                    <Register/>
                    <Google/>
                    <p>You Have Account?</p>
                    <button onClick={() => setRetur(true)}>Sign-In</button>
                    <Cerralo/>
                </div>
            </>
        );
    }
    
}
