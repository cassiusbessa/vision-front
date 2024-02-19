import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import Header from './components/molecules/header';

const inter = Josefin_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Header />
    </main>
  );
}
