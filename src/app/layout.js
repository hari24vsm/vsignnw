import {Exo_2,Montserrat,Poppins,Orbitron } from "next/font/google";
import "./globals.css";
import Footer from "./footer/page";
import Navbar from "./navbar/page";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-orbitron",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo2",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Vsign Enterprises LTD",
  description: "Vsign LED Signages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${exo2.variable} ${montserrat.variable} antialiased  bg-[url('/bg.webp')] bg-cover bg-fixed bg-center bg-no-repeat `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
