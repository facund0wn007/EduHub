"use client"

import React from 'react'
import { UserAuth } from "@/utils/AuthContext";

const Signout = () => {
    const { logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
            window.location.href = "/login";
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <button onClick={handleSignOut}>Sign Out</button>
        </>
    )
}

export default Signout