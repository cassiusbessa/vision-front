import bcxImage from '@/app/assets/bcx.png';
import truther from '@/app/assets/truther.png';
import pandlrImage from '@/app/assets/pandlr.png';
import sulaTopImage from '@/app/assets/sulatop.png';
import { Comment, ProjectInfo } from '../interfaces';
// https://www.hefestoengenhariamt.com.br/wp-content/uploads/2019/07/projeto-de-engenharia-cuiaba.jpg

export const userMock = {
  fullName: 'Cássius Bessa',
  title: 'Desenvolvedor Full Stack',
  bio: 'Amante de programação e conhecedor do poder transformador de tecnologia. Estudante de Engenharia de Software na 42, uma das 10 faculdades mais inovadoras do mundo. Com maior foco em desenvolvimento backend, busco me especializar cada vez na área de programação e a cada dia me tornar melhor do que fui ontem.',
  image: 'https://cdn.intra.42.fr/users/90c57347ec23a3f42362716a9be49f45/caqueiro.jpg',
};

export const projectsMock: ProjectInfo[] = [
  {
    user: {
      fullName: 'Cássius Bessa',
      image: 'https://cdn.intra.42.fr/users/90c57347ec23a3f42362716a9be49f45/caqueiro.jpg',
    },
    project: {
      id: '1',
      title: 'BCX Corretora de Criptoativos',
      description: 'Atuei como desenvolvedor FullStack para a BCX, refatorando, arquiteturando e extraindo regras de negócio de um projeto que estava atrasado e bastante complexo. Bcx Corretora de Criptoativos é uma plataforma de negociação de criptoativos, onde é possível comprar, vender e armazenar criptomoedas de forma segura e prática.',
      tags: ['NodeJs', 'ReactJs'],
      links: {
        github: 'https://github.com',
        demo: 'https://www.bcxcorretora.com.br/',
      },
      image: bcxImage.src,
    },
  },
  {
    user: {
      fullName: 'Cássius Bessa',
      image: 'https://cdn.intra.42.fr/users/90c57347ec23a3f42362716a9be49f45/caqueiro.jpg',
    },
    project: {
      id: '2',
      title: 'Truther',
      description: 'Atuei como desenvolvedor Backend auxiliando no planejamento e desenvolvimento da plataforma. Truther é uma aplicativo que permite a conversão em tempo real de criptomoedas para moedas fiduciárias. Permitindo que o usuário possa realizar transferências e realizar pagamentos via pix a partir de uma criptomeada.',
      tags: ['NodeJs', 'ReactJs'],
      links: {
        github: 'https://github.com',
        demo: 'https://truther.to/',
      },
      image: truther.src,
    },
  },
  {
    user: {
      fullName: 'Cássius Bessa',
      image: 'https://cdn.intra.42.fr/users/90c57347ec23a3f42362716a9be49f45/caqueiro.jpg',
    },
    project: {
      id: '3',
      title: 'Pan',
      description: 'Atuei como desenvolvedor fullstack. Pan é um twitter voltado para fofoca de famosos com mais de 426 mil seguidores. A plataforma é uma rede social onde os seguidores da Pan podem interagir de uma forma mais livre.',
      tags: ['ReactJs', 'Golang'],
      links: {
        github: 'https://github.com',
        demo: 'https://pandlr.com/forum/pan',
      },
      image: pandlrImage.src,
    },
  },
  {
    user: {
      fullName: 'Cássius Bessa',
      image: 'https://cdn.intra.42.fr/users/90c57347ec23a3f42362716a9be49f45/caqueiro.jpg',
    },
    project: {
      id: '4',
      title: 'Hair Salon',
      description: 'Atuei como desenvolvedor fullstack. Hair Salon é uma aplicação fullstack que permite ao cliente agendar horários em salões de beleza e ao proprietário gerenciar serviços, funcionários e atendimento.',
      tags: ['ReactJs', 'Golang'],
      links: {
        github: 'https://github.com/cassiusbessa/hair-salon-front',
        demo: 'https://hair-salon-front.vercel.app/',
      },
      image: sulaTopImage.src,
    },
  },
];

export const commentsMock: Comment[] = [
  {
    user: {
      fullName: 'Cássius Bessa',
      image: 'https://cdn.intra.42.fr/users/90c57347ec23a3f42362716a9be49f45/caqueiro.jpg',
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
          fullName: 'Cássius Bessa',
          image: 'https://cdn.intra.42.fr/users/90c57347ec23a3f42362716a9be49f45/caqueiro.jpg',
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
