import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "TapOpina — Consigue más reseñas de Google con una tarjeta NFC",
  description:
    "TapOpina es la tarjeta NFC que convierte cada visita a tu negocio en una reseña de Google. Sin apps, sin fricción. Instalación en el momento y gestión de reputación incluida.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased no-js" suppressHydrationWarning>
      <head>
        <Script id="no-js-toggle" strategy="beforeInteractive">
          {"document.documentElement.classList.remove('no-js')"}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
