"use client"

import React, { useState } from 'react'
import "./info.css"
import { UserAuth } from '@/utils/AuthContext'

const Information = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dni, setDni] = useState("");
    const { loading, saveUserData } = UserAuth();

    const handleData = async (e) => {
        e.preventDefault();
        await saveUserData(firstName, lastName, dni);
        setTimeout(() => {
            window.location.reload(); // Recarga la página
        }, 1000); // 1000ms = 1 segundo
    }

    return (
        <>
            <form className='form' onSubmit={handleData}>
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
                <div className="inputGroup">
                    <label htmlFor="dni">DNI</label>
                    <input
                        type="text"
                        id="dni"
                        onChange={(e) => setDni(e.target.value)}
                        placeholder="Ingrese su DNI"
                        required
                    />
                </div>
                <button type="submit" disabled={loading} className="submitButton">
                    {loading ? "Enviando..." : "Enviar"}
                </button>
            </form>
        </>
    )
}

export default Information