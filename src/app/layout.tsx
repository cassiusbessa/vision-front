import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import React from 'react';
import portfolioImage from '@/app/assets/portfolio.png';

const inter = Josefin_Sans({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Cássius Bessa',
  description: 'Portfólio de projetos e informações sobre Cássius Bessa',
  icons: {
    icon: portfolioImage.src,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
