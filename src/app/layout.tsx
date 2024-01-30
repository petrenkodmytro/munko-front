import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Munko-PoP",
  description: "We have figures for everyone's taste",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
