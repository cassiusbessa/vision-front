import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import Header from '../components/header';
import ProfileCard from '../components/profile-card';
import { ProjectProfileContainer, StarProject } from '../components/project';
import { projectsMock } from '../mocks';

const inter = Josefin_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${inter.className} bg-base-200 flex flex-col items-center min-h-screen`}>
      <Header />
      <ProfileCard className="mt-8 md:h-[32rem] w-11/12 h-[32rem] bg-base-100" />
      <StarProject project={projectsMock[0].project} className="w-11/12 my-12 h-96 md:h-80 bg-base-300" />
      <ProjectProfileContainer projectsInfo={projectsMock} className="w-11/12 my-12 bg-base-100" />
    </div>
  );
}
