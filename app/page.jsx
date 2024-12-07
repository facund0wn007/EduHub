"use client"

import React from 'react'
import { useRouter } from "next/navigation"; // Importa el hook useRouter
import "@/styles/index.css"
import { UserAuth } from "@/utils/AuthContext";

export default function page() {
  const { user, logOut } = UserAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <>
      {user ? (<div className="welcome">
        <h1>Welcome, {user.displayName}</h1>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>) : ( <h1>Not Logued In</h1> )}
    </>
  )
}
