import '@/app/global.css'
import Navbar from '@/components/navbar/Navbar';
export const metadata = {
  title: "Edu hub",
  description: "Generated",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body>
      <Navbar />
      <main>{children}</main> 
      </body>
    </html>
  );
}
