import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Munko-PoP",
  description: "We have figures for everyone's taste",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="max-w-[360px] mx-auto md:max-w-3xl lg:max-w-[1440px]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
