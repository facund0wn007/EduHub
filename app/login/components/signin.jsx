import React, {useState} from 'react'

const Signin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    return (
        <>
            <form className="form">
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

export default Signin