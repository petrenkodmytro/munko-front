import Header from '@/components/header/Header';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';
import Footer from '@/components/footer/Footer';
import { Montserrat } from 'next/font/google';
import AuthProvider from '@/components/providers/SessionProvider';
import CartProvider from '@/context/cart';

export const metadata = {
  title: 'Munko-PoP',
  description: "We have figures for everyone's taste",
};

const montserrat = Montserrat({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <CartProvider>
        <html lang="en" className={montserrat.className}>
          <body
            suppressContentEditableWarning
            suppressHydrationWarning
            className="max-w-[390px] mx-auto md:max-w-[720px] lg:max-w-[1440px]"
          >
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </CartProvider>
    </AuthProvider>
  );
}
