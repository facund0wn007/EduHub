"use client"

import React, { useState, useEffect} from 'react'
import { UserAuth } from '@/utils/AuthContext'

export default function Loaduser({params}) {
    const [data, setData] = useState({});
    const { getUser, error } = UserAuth();
    const { uid } = params.params; // Obtiene el parámetro "uid".

    useEffect(() => {
        console.log(uid);

        if (!uid){
            console.error("No hay usuario pasado por parametros");
            return;
        }  // No hacer nada si `uid` es falsy.
        const tryUser = async () => {
            try {
                const datos = await getUser(uid);
                setData(datos);
            } catch (err) {
                console.error("Error al obtener el usuario:", err);
            }
        };
        tryUser();
    }, [uid, getUser]);
    return (
        <>
            <div className="profile-header">
                <div className="profile-image">

                    <i className='bx bx-user'></i>
                </div>
                <div className="profile-info">
                    <h2 id="profile-email">{data.email}</h2>
                </div>
            </div>

            <div className="profile-details">
                <div>
                    <label>Apellido: </label>
                    <span id="profile-lastname">{data.lastName}</span>
                </div>
                <div>
                    <label>Nombre: </label>
                    <span id="profile-name">{data.firstName}</span>
                </div>
                <div>
                    <label>DNI:</label>
                    <span id="profile-dni">{data.dni}</span>
                </div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </>
    )
}
