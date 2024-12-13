"use client"

import React from 'react'
import { UserAuth } from "@/utils/AuthContext";

const Cerralo = () => {
    const { user, logOut } = UserAuth();


    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {user ? (<div className="welcome">
                <h1>Welcome, {user.displayName}</h1>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>) : (<h1>Not Logued In</h1>)}
        </>
    )
}

export default Cerralo