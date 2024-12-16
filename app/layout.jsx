import React from "react";
import './globals.css';

export default function RootLayout({ children }){
  return (
    <html lang="es">
      <body>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        {children}
      </body>
    </html>
  );
}