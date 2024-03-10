import React from 'react';
import Header from './components/header';
import { ProjectInfo } from './interfaces';
import ProjectPostCard from './components/project/project-post-card';

const projectsMock: ProjectInfo[] = [
  {
    user: {
      fullName: 'Fulano de Tal',
      image: 'https://avatars.githubusercontent.com/u/1?v=4',
    },
    project: {
      id: '1',
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1 é um projeto muito bom, sensacional ele foi feito para dar certo é o melhor projeto que você vai ver na sua vida, acredite em mim, eu sou um desenvolvedor muito bom e sei do que estou falando.',
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
    <div className="bg-base-200 flex flex-col items-center min-h-screen h-screen overflow-y-auto">
      <Header />
      <ProjectPostCard projectInfo={projectsMock[0]} className="m-8" />
      <ProjectPostCard projectInfo={projectsMock[1]} className="h-4/5" />
    </div>
  );
}
