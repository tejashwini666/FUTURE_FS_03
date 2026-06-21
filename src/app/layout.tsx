import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maison d'Élégance | Luxury Fashion Boutique",
  description: "Experience modern luxury fashion at Maison d'Élégance. Discover hand-crafted sarees, velvet lehengas, designer kurtis, and contemporary party wear inspired by Zara, Dior, and Sabyasachi.",
  keywords: "luxury boutique, fashion, designer sarees, wedding lehengas, premium kurtis, high fashion, luxury clothing, Maison d'Elegance",
  openGraph: {
    title: "Maison d'Élégance | Luxury Fashion Boutique",
    description: "Experience modern luxury fashion at Maison d'Élégance. Discover hand-crafted sarees, velvet lehengas, designer kurtis, and contemporary party wear.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased font-sans">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
