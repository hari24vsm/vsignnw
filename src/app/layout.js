import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./footer/page";
import Navbar from "./navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vsign Enterprises LTD",
  description: "Vsign LED Signages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased  bg-[url('/bg.webp')] bg-cover bg-fixed bg-center bg-no-repeat `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
