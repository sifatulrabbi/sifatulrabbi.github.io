import {
  fullstackBlog,
  arkanoidGame,
  snakeGame,
  myPortfolioWebsite,
  socialMediaApp,
  todoApp,
} from '../../images';

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
    desc: 'A TypeScript arkanoid web game. Built with TypeScript, HTML and CSS. Start the game by clicking start button. Game can be restarted in the middle of the session. There are types of bricks with different hit point. Break all the bricks and the game will be finished',
    tags: ['TypeScript', 'CSS', 'HTML', 'Canvas'],
    img: arkanoidGame,
    links: {
      github: 'https://github.com/temujins/ts-arkanoid-game',
      external: 'https://temujins.github.io/ts-arkanoid-game/',
    },
  },

  {
    name: 'Full Stack blog',
    desc: 'This is a full stack blog web app for posting and reading articles about different topics. The sign up and login method is managed with node js. This web app uses mongodb as the database. Also uses bcrypt for hashing user password.',
    tags: ['React', 'JavaScript', 'Styled Components', 'MongoDB', 'Bcrypt'],
    img: fullstackBlog,
    links: {
      github: 'https://github.com/temujins/full-stack-blog-app',
      external: '',
    },
  },

  {
    name: 'Social Media website',
    desc: 'A simple social media website with react and firebase. The website database is firestore. User authentication is handled by firebase google authenticator. Features are creating new user account, posting in news feed, getting notifications in notification tab, commenting and liking posts.',
    tags: ['React', 'JavaScript', 'Styled Components', 'Firebase'],
    img: socialMediaApp,
    links: {
      github: 'https://github.com/temujins/social_media_app',
      external: 'https://socialize-reactapp.web.app/',
    },
  },

  {
    name: 'My Portfolio website',
    desc: "This my portfolio website. This website is completely responsive. Built with React and TypeScript. I'm currently working to build a api for my website to get the data and images it needs. Currently the data and the images are static.",
    tags: ['TypeScript', 'React', 'Styled Components'],
    img: myPortfolioWebsite,
    links: {
      github: 'https://github.com/temujins/temujins.github.io',
      external: '',
    },
  },

  {
    name: 'Todo app',
    desc: "A todo app project with React and TypeScript. A todo app is a good example of CRUD operations. This app saves the data in the local-storage. But soon I'm building a api to handle the data and save it in a database online. This website is responsive and has light/dark mode switch.",
    tags: ['TypeScript', 'React', 'Styled Components'],
    img: todoApp,
    links: {
      github: 'https://github.com/temujins/todo-app-fm',
      external: 'https://react-ts-todo-app.vercel.app/',
    },
  },

  {
    name: 'Simple Snake Game',
    desc: 'A snake game to work with the user inputs ans canvas. This game is a simple snake game with simple ui. There is three difficulty levels user can choose freely. Biting the edge of the board will kill the snake and the game will end.  ',
    tags: ['JavaScript', 'HTML', 'CSS', 'Canvas'],
    img: snakeGame,
    links: {
      github: 'https://github.com/temujins/snake-game',
      external: '',
    },
  },
];

export default data;
