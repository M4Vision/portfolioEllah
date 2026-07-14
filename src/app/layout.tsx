import type { Metadata } from "next";
import { Poppins, Satisfy } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-satisfy",
});

export const metadata: Metadata = {
  title: "Ellah Services — Des systèmes qui font gagner du temps.",
  description:
    "J'aide les entreprises à développer leur activité grâce à la technologie, l'automatisation, la prospection commerciale et des processus plus intelligents.",
  icons: { icon: "/assets/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${satisfy.variable}`}>
      <body style={{ fontFamily: "'Poppins', sans-serif" }}>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
