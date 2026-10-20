import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import SoulTableSidebar from '../components/SoulTableSidebar';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'The Soul Table — Curated Pop-Up Gatherings',
  description: 'An intentional, modern Southern dining experience celebrating culture, connection, and craft.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased selection:bg-brass selection:text-white">
        <SoulTableSidebar />
        <div className="md:pl-28 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
