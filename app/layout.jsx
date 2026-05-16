import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "Andrea Pérez | Estudiante de Derecho",
  description:
    "Portafolio profesional de Andrea Pérez, estudiante de Derecho en la Universidad de Barcelona con foco en derecho internacional, debate y diplomacia.",
  applicationName: "Andrea Pérez Portfolio",
};

export const viewport = {
  themeColor: "#b88592",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
