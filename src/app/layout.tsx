import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Analytics (opcional)
//import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BeeCare — Monitoreo inteligente de colmenas",
  description:
    "Detección temprana de anomalías con audio e IA. Alertas en tiempo real y panel para apicultores.",
  metadataBase: new URL("https://beecare-sitio.vercel.app"),
  openGraph: {
    title: "BeeCare — Monitoreo inteligente de colmenas",
    description:
      "Detección temprana de anomalías con audio e IA. Alertas en tiempo real y panel para apicultores.",
    url: "https://beecare-sitio.vercel.app",
    siteName: "BeeCare",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "BeeCare" }],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BeeCare — Monitoreo inteligente de colmenas",
    description:
      "Detección temprana de anomalías con audio e IA. Alertas y panel para apicultores.",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.ico" },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* Analytics (opcional) */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}