'use client'

import React, { useState } from 'react'
import '../login.css'
import { UserAuth } from "@/utils/AuthContext";



const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleSignUp, loading, error, emailVerification } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleSignUp(email, password);
        await emailVerification();
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingresa tu correo"
                        required
                    />
                </div>

                <div className="inputGroup">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingresa tu contraseña"
                        required
                    />
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit" disabled={loading} className='loginButton'>
                    {loading ? "Registrando..." : "Registrarse"}
                </button>
            </form>
        </>
    )
}

export default Register