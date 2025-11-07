import { JetBrains_Mono, Open_Sans } from "next/font/google";
import { Metadata } from "next";

const fontMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const fontSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });

import Header from "@/components/shared/Header";

import "@/styles/globals.scss";

export const metadata: Metadata = {
  // Título principal que aparece en la pestaña del navegador y en el resultado de búsqueda de Google.
  title: "PTE - Master", 
  
  // Descripción ajustada al nuevo nombre.
  description: "A flexible and modern project template engine built with Next.js, featuring a rich text editor based on Tiptap and shadcn/ui.",
  
  // Palabras clave que se mantienen relevantes para el stack tecnológico.
  keywords: "PTE, Project Template, Tiptap, WYSIWYG, Rich Text Editor, ReactJS, NextJS",
  
  // Asegúrate de que la URL base refleje tu URL actual (si es diferente a Vercel).
  metadataBase: new URL(`https://projectoeditorpte.onrender.com`), // Asumiendo un nuevo nombre de dominio.
  
  openGraph: {
    type: "website",
    url: `https://projectoeditorpte.onrender.com`,
    
    // El título de la tarjeta de redes sociales.
    title: "PTE Template Engine",
    
    // La descripción que aparece en las tarjetas de redes sociales.
    description: "A flexible and modern project template engine built with Next.js, featuring a rich text editor based on Tiptap and shadcn/ui.",
    
    siteName: "PTE Template Engine",
    locale: "en_US",
    
    // La imagen de previsualización se mantiene, asumiendo que es genérica o que la actualizarás.
    images: "/opengraph-image.jpg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontMono.variable} ${fontSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
