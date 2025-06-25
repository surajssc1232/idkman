import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Cormorant_Garamond } from 'next/font/google';
import { cn } from '@/lib/utils';
import { InteractiveBackground } from '@/components/devcard/interactive-background';

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const fontCormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cormorant-garamond',
});

export const metadata: Metadata = {
  title: 'DevCard',
  description: 'A dynamic, single-page developer portfolio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("font-body antialiased", fontInter.variable, fontCormorantGaramond.variable)}>
        <InteractiveBackground />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
