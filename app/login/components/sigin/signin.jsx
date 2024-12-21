import React, { useState, useEffect } from 'react';
import { UserAuth } from "@/utils/AuthContext";
import './signin.css';

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin, loading, error, message, user } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleLogin(email, password);
    };

    useEffect(() => {
        if (user && !error) {
            // Redirigir usando window.location
            window.location.href = `/perfil/:${user.uid}`;
        }
    }, [user, error]);

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {message && <p style={{ color: "green" }}>{message}</p>}
                <button type="submit" disabled={loading} className='loginButton'>
                    {loading ? "Iniciando Sesion..." : "Iniciar Sesion"}
                </button>
            </form>
        </>
    );
};

export default Signin;
