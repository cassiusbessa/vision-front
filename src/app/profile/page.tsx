import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import Header from '../components/header';
import ProfileCard from '../components/profile-card';
import { ProjectInfo } from '../interfaces';
import { ProjectProfileContainer, StarProject } from '../components/project';

const inter = Josefin_Sans({ subsets: ['latin'] });
const projectsMock: ProjectInfo[] = [
  {
    user: {
      fullName: 'Fulano de Tal',
      image: 'https://avatars.githubusercontent.com/u/1?v=4',
    },
    project: {
      id: '1',
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      tags: ['tag1', 'tag2'],
      links: {
        github: 'https://github.com/projeto1',
        demo: 'https://demo.projeto1.com',
      },
      image: 'https://www.hefestoengenhariamt.com.br/wp-content/uploads/2019/07/projeto-de-engenharia-cuiaba.jpg',
    },
  },
  {
    user: {
      fullName: 'Fulano de Tal',
      image: 'https://avatars.githubusercontent.com/u/1?v=4',
    },
    project: {
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
  },
];

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
