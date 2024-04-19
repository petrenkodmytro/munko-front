import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { GoogleOAuthProvider } from '@react-oauth/google';


const montserrat = Montserrat({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Munko-PoP',
  description: "We have figures for everyone's taste",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <GoogleOAuthProvider clientId="867594703313-4bdf0hh9h146916in4t3s0skd2anir1f.apps.googleusercontent.com">
      <html lang="en" className={montserrat.className}>
        <body className="max-w-[390px] mx-auto md:max-w-[720px] lg:max-w-[1440px]">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
