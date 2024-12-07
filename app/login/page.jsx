"use client"; // Asegúrate de que esta página es un componente del cliente 

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Importa el hook useRouter
import "./login.css";
import Head from "next/head";
import { UserAuth } from "@/utils/AuthContext";

export default function Page() {
    const { user, googleSignIn } = UserAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(false); // Estado para controlar el proceso de inicio de sesión

    const handleSignIn = async () => {
        setLoading(true); // Muestra que el proceso de inicio de sesión está en curso
        try {
            await googleSignIn();
        } catch (error) {
            console.error("Error al iniciar sesión con Google:", error);
        } finally {
            setLoading(false); // Oculta el estado de carga, ya sea que haya sido exitoso o no
        }
    };

    // Redirige si el usuario ya está autenticado y se ha configurado correctamente
    useEffect(() => {
        if (user) {
            router.push("/"); // Cambia la ruta a donde quieres redirigir
        }
    }, [user, router]);

    return (
        <>  
            <Head>
              <title>Login - EduHub</title>
            </Head>
            <div className="container">
                <h1 className="title">EduHub - Iniciar Sesión</h1>

                {/* Formulario de inicio de sesión */}
                <form className="form">
                    <div className="inputGroup">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" placeholder="Ingresa tu correo" required />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" placeholder="Ingresa tu contraseña" required />
                    </div>

                    <button type="submit" className="loginButton" disabled={loading}>
                        {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                    </button>
                </form>

                {/* Botón de Google */}
                <button onClick={handleSignIn} className="googleButton" disabled={loading}>
                    <i className="bx bxl-google"></i> 
                    {loading ? "Cargando..." : "Inicia sesión con Google"}
                </button>
            </div>
        </>
    );
}
