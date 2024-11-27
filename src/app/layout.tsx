import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/index.scss";
import Header from "./shared/components/Header/Header";
import Footer from "./shared/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercado Libre Clon | Compra y venta online",
  description: "Encuentra los mejores productos en nuestro marketplace. Compra y vende con seguridad, precios competitivos y envíos a todo el país.",
  keywords: "marketplace, compras online, ventas online, ecommerce, productos",
  openGraph: {
    title: "Mercado Libre Clon | La comunidad de compra y venta online",
    description: "Descubre millones de productos a los mejores precios. Compra y vende de manera segura.",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/assets/logo_medium.png",
        width: 1200,
        height: 630,
        alt: "Mercado Libre Clon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
