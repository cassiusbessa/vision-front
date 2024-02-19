import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import Header from './components/header';
import ProfileCard from './components/profile-card';

const inter = Josefin_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${inter.className} bg-base-200 flex flex-col items-center min-h-screen`}>
      <Header />
      <ProfileCard className="my-8 md:h-[32rem] w-11/12 h-[32rem]" />
    </div>
  );
}
