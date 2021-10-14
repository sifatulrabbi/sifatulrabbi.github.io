import { testImg } from '../../images';

export type WorksData = {
  name: string;
  desc: string;
  tags: string[];
  img: string;
  links: {
    github: string;
    external: string;
  };
};

const data: WorksData[] = [
  {
    name: 'Arkanoid Game',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem provident non dolorum maxime ex suscipit voluptas, reprehenderit dignissimos natus.',
    tags: ['TypeScript', 'CSS', 'HTML'],
    img: testImg,
    links: {
      github: 'https://github.com/temujins/ts-arkanoid-game',
      external: 'https://temujins.github.io/ts-arkanoid-game/',
    },
  },

  {
    name: 'Full Stack blog',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem provident non dolorum maxime ex suscipit voluptas, reprehenderit dignissimos natus.',
    tags: ['React', 'JavaScript', 'Styled Components', 'MongoDB'],
    img: testImg,
    links: {
      github: 'https://github.com/temujins/full-stack-blog-app',
      external: '',
    },
  },

  {
    name: 'Social Media website',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem provident non dolorum maxime ex suscipit voluptas, reprehenderit dignissimos natus.',
    tags: ['React', 'JavaScript', 'Styled Components', 'Firebase'],
    img: testImg,
    links: {
      github: 'https://github.com/temujins/social_media_app',
      external: 'https://socialize-reactapp.web.app/',
    },
  },

  {
    name: 'My Portfolio website',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem provident non dolorum maxime ex suscipit voluptas, reprehenderit dignissimos natus.',
    tags: ['TypeScript', 'React', 'Styled Components'],
    img: testImg,
    links: {
      github: 'https://github.com/temujins/temujins.github.io',
      external: '',
    },
  },

  {
    name: 'Todo app',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem provident non dolorum maxime ex suscipit voluptas, reprehenderit dignissimos natus.',
    tags: ['TypeScript', 'React', 'Styled Components'],
    img: testImg,
    links: {
      github: 'https://github.com/temujins/todo-app-fm',
      external: 'https://react-ts-todo-app.vercel.app/',
    },
  },

  {
    name: 'Simple Snake Game',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem provident non dolorum maxime ex suscipit voluptas, reprehenderit dignissimos natus.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    img: testImg,
    links: {
      github: 'https://github.com/temujins/snake-game',
      external: '',
    },
  },
];

export default data;
