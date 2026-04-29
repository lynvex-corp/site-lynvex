import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lynvextec.com.br"),
  title: {
    default: "LYNVEX TECH",
    template: "%s | LYNVEX TECH",
  },
  description:
    "Software house especializada em sistemas web, aplicativos mobile e automações inteligentes. Transformamos ideias em produtos digitais de alto impacto.",
  keywords: [
    "software house",
    "desenvolvimento web",
    "sistemas personalizados",
    "automação",
    "Next.js",
    "aplicativos mobile",
    "LYNVEX",
  ],
  authors: [{ name: "LYNVEX Tech" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "LYNVEX Tech",
    title: "LYNVEX Tech — Soluções Digitais que Impulsionam Negócios",
    description:
      "Software house especializada em sistemas web, aplicativos mobile e automações inteligentes.",
    images: [
      {
        url: "/openGraph.png",
        width: 1200,
        height: 630,
        alt: "LYNVEX Tech — Soluções Digitais que Impulsionam Negócios",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen w-full flex flex-col bg-dark text-light antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
