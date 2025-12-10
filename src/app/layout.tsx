import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nails Couture - Uñas y Tratamientos Corporales",
    template: "%s | Nails Couture",
  },
  description:
    "Centro especializado en uñas y tratamientos corporales. Formaciones y cursos profesionales en manicura, pedicura y belleza.",
  keywords: [
    "uñas",
    "manicura",
    "pedicura",
    "tratamientos corporales",
    "cursos de uñas",
    "formación belleza",
  ],
  authors: [{ name: "Nails Couture" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Nails Couture",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://nailscouture.com",
    title: "Nails Couture - Uñas y Tratamientos Corporales",
    description:
      "Centro especializado en uñas y tratamientos corporales. Formaciones y cursos profesionales.",
    siteName: "Nails Couture",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nails Couture - Uñas y Tratamientos Corporales",
    description: "Centro especializado en uñas y tratamientos corporales.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
