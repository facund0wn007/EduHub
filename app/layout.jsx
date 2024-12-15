import React from 'react';
import '@/styles/main.css'
import { AuthContextProvider } from "@/utils/AuthContext";

export const metadata = {
  title: "Edu hub",
  description: "Generated",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AuthContextProvider>
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}