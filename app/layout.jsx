import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Andrea Perez | Estudiante de Derecho",
  description:
    "Portafolio profesional de Andrea Perez - Estudiante de Derecho en la Universidad de Barcelona, especializada en derecho internacional y derechos humanos.",
  applicationName: "Andrea Perez Portfolio",
};

export const viewport = {
  themeColor: "#ac505b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="bg-background scroll-smooth">
      <body className={`${geist.className} antialiased`}>{children}</body>
    </html>
  );
}
