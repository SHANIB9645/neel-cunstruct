 
import "./globals.css";


export const metadata = {
  title: "Neal Cunstruct",
  description: "Constructing the Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`  antialiased`}>
        {children}
      </body>
    </html>
  );
}
