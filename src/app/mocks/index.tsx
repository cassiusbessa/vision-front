import avatar from '@/app/assets/avatar.png';
import { Comment, ProjectInfo } from '../interfaces';

export const userMock = {
  fullName: 'Fulano de Tal',
  title: 'Desenvolvedor Front-end',
  bio: 'Desenvolvedor Front-end, apaixonado por tecnologia e inovação. Sempre buscando aprender e compartilhar conhecimento.',
  image: avatar.src,
};

export const projectsMock: ProjectInfo[] = [
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
      image: 'https://www.hefestoengenhariamt.com.br/wp-content/uploads/2019/07/projeto-de-engenharia-cuiaba.jpg',
    },
  },
];

export const commentsMock: Comment[] = [
  {
    user: {
      fullName: 'Fulano de Tal',
      image: 'https://avatars.githubusercontent.com/u/1?v=4',
    },
    content: 'Comentário 1',
    date: '25 de Fevereiro, 2024',
    replies: [
      {
        user: {
          fullName: 'Ciclano de Tal',
          image: 'https://avatars.githubusercontent.com/u/2?v=4',
        },
        content: 'Resposta 1',
        date: '25 de Fevereiro, 2024',
        replies: [],
      },
      {
        user: {
          fullName: 'Fulano de Tal',
          image: 'https://avatars.githubusercontent.com/u/1?v=4',
        },
        content: 'Resposta 2',
        date: '25 de Fevereiro, 2024',
        replies: [],
      },
      {
        user: {
          fullName: 'Ciclano de Tal',
          image: 'https://avatars.githubusercontent.com/u/2?v=4',
        },
        content: 'Resposta 3',
        date: '25 de Fevereiro, 2024',
        replies: [],
      },
    ],
  },
  {
    user: {
      fullName: 'Joãozinho da Silva',
      image: 'https://avatars.githubusercontent.com/u/3?v=4',
    },
    content: 'Nossa! Que projeto incrível! Parabéns! 🚀 É o melhor projeto do mundo, muito bom mesmo!aaaaafhfef fhe8fhksdnfs8efewh fhe8fhe8fh dsfsadwqr554 vsdvsndgew ',
    date: '25 de Fevereiro, 2024',
    replies: [
      {
        user: {
          fullName: 'João Bessa',
          image: 'https://avatars.githubusercontent.com/u/2?v=4',
        },
        content: 'Resposta 1',
        date: '25 de Fevereiro, 2024',
        replies: [],
      },
    ],
  },
];
