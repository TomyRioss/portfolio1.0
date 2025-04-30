import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/Footer';
import Navbar from './Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 p-4 pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
