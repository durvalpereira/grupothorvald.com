import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grupo Thorvald | Tecnologia, Educação e Inovação",
  description:
    "Conglomerado de empresas conectando tecnologia com resultados reais de negócio. Fundado por Durval Pereira.",
  openGraph: {
    title: "Grupo Thorvald",
    description:
      "Construindo o futuro através de tecnologia, educação e inovação.",
    url: "https://grupothorvald.com",
    siteName: "Grupo Thorvald",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
