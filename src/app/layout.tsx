import type {Metadata} from 'next';
import { Inter, Pacifico } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-pacifico',
});

export const metadata: Metadata = {
  title: 'Supplier Scout',
  description: 'Find, compare, and order from the best suppliers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-body antialiased", inter.variable, pacifico.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
