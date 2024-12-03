
export const metadata = {
  title: "Edu hub",
  description: "Generated",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}