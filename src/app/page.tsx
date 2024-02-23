import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import Header from './components/header';
import ProfileCard from './components/profile-card';
import { Project } from './interfaces';
import ProjectContainer from './components/project-container';

const inter = Josefin_Sans({ subsets: ['latin'] });
const projectsMock: Project[] = [
  {
    id: '1',
    title: 'Projeto 1',
    description: 'Descrição do Projeto 1',
    tags: ['tag1', 'tag2'],
    links: {
      github: 'https://github.com/projeto1',
      demo: 'https://demo.projeto1.com',
    },
    image: 'imagem1.jpg',
  },
  {
    id: '2',
    title: 'Projeto 2',
    description: 'Descrição do Projeto 2',
    tags: ['tag3', 'tag4'],
    links: {
      github: 'https://github.com/projeto2',
      demo: 'https://demo.projeto2.com',
    },
    image: 'imagem2.jpg',
  },
];

export default function Home() {
  return (
    <div className={`${inter.className} bg-base-200 flex flex-col items-center min-h-screen`}>
      <Header />
      <ProfileCard className="mt-8 md:h-[32rem] w-11/12 h-[32rem]" />
      <ProjectContainer projects={projectsMock} className="w-11/12 my-12" />
    </div>
  );
}
