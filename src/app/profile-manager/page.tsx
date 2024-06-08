import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import Header from '../components/header';
import ProfileCard from '../components/profile-card';
import { ProjectProfileContainer, StarProject } from '../components/project';
import { userMock, projectsMock } from '../mocks';
import ProfileManager from '../components/profile-manager/profile-manager';

const inter = Josefin_Sans({ subsets: ['latin'] });

export default function ProfileManagerPage() {
  return (
    <div className={`${inter.className} bg-cover bg-gradient-to-b from-[#291D32] via-[#392039] to-[#291D32] flex flex-col items-center min-h-screen`}>
      <Header />
      <ProfileManager />
    </div>
  );
}