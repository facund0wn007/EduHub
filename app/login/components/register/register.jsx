'use client'

import React, { useState } from 'react'
import { UserAuth } from "@/utils/AuthContext";
import './register.css'

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dni, setDni] = useState("");
    const [age, setAge] = useState("");
    const { handleSignUp, loading, error, message, emailVerification, saveUserData } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fail = await handleSignUp(email, password, confirmPassword, firstName, lastName, dni, age);
        if (fail) {
            return;
        }
        await emailVerification();
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label htmlFor="firstName">Name</label>
                    <input
                        type="text"
                        id="firstName"
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Ingrese su nombre"
                        required
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Ingrese su apellido"
                        required
                    />
                </div>
                <div className="row">
                    <div className="inputGroup halfWidth">
                        <label htmlFor="dni">DNI</label>
                        <input
                            type="text"
                            id="dni"
                            onChange={(e) => setDni(e.target.value)}
                            placeholder="Ingrese su DNI"
                            required
                        />
                    </div>
                </div>
                <div className="inputGroup">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Ingrese su edad"
                        min="1"
                        required
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingrese su email"
                        required
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingrese su contraseña"
                        required
                    />
                </div>
                <div className="inputGroup">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirme su contraseña"
                        required
                    />
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {message && <p style={{ color: "green" }}>{message}</p>}

                <button type="submit" disabled={loading} className="loginButton">
                    {loading ? "Registrando..." : "Registrarse"}
                </button>
            </form>

        </>
    )
}

export default Register