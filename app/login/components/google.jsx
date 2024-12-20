"use client"; // Asegúrate de que esta página es un componente del cliente 

import React, { useState } from 'react'
import { UserAuth } from "@/utils/AuthContext";
import "../login.css";

const Google = () => {
  const { user, googleSignIn } = UserAuth();
  const [loading, setLoading] = useState(false); // Estado para controlar el proceso de inicio de sesión

  const handleSignIn = async () => {
    if (user) {
      return; // Evitar múltiples inicios de sesión si el usuario ya está autenticado
    }
    setLoading(true);
    try {
      await googleSignIn();
      setTimeout(() => {
        window.location.href = "/perfil/info"; // Redirigir a completar datos
      }, 500); // 500ms = 0.5 segundos
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>


      {/* Botón de Google */}
      <button onClick={handleSignIn} className="googleButton" disabled={loading}>
        <i className="bx bxl-google"></i>
        {loading ? "Cargando..." : "Inicia sesión con Google"}
      </button>
    </>
  )
}

export default Google