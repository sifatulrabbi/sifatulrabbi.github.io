import { SiTypescript, SiNodeDotJs, SiJavascript, SiReact } from 'react-icons/si';

const categories = [
    {
        id: 'javascriptProject',
        title: 'JavaScript Project',
        desc: 'This is my portfolio website. Build with React, SCSS. This website is custom',
        icon: <SiJavascript />,
    },
    {
        id: 'typescriptProject',
        title: 'TypeScript Project',
        desc: 'This is my portfolio website. Build with React, SCSS. This website is custom',
        icon: <SiTypescript />,
    },
    {
        id: 'reactJsProject',
        title: 'ReactJs and frontend Project',
        desc: 'This is my portfolio website. Build with React, SCSS. This website is custom',
        icon: <SiReact />,
    },
    {
        id: 'nodejsExpressProject',
        title: 'nodejs with Express projects',
        desc: 'This is my portfolio website. Build with React, SCSS. This website is custom',
        icon: <SiNodeDotJs />,
    },
];

const projects = [
    {
        id: 'https://github.com/temujins/temujins.github.io',
        title: 'Portfolio website',
        desc: 'This is my portfolio website custom designed, responsive and fast loading<br/><br/><b>Technologies used:</b><br/>ReactJS, SCSS, Github',
        img: '',
        links: {
            github: 'https://github.com/temujins/temujins.github.io',
            live: 'https://temujins.github.io',
        },
    },
    {
        id: 'https://github.com/temujins/social_media_app',
        title: 'Social media website',
        desc: 'Features user authentication with firebase, add, delete posts and add comments<br/><br/><b>Technologies used:</b><br/>ReactJS, Material-UI, Firebase',
        img: '',
        links: {
            github: 'https://github.com/temujins/social_media_app',
            live: 'https://socialize-reactapp.web.app/',
        },
    },
    {
        id: 'https://github.com/temujins/full-stack-blog-app',
        title: 'Blog website',
        desc: 'A blog website with features such as sign up, login, add post, delete post, and search by tags, usernames<br/><br/><b>Technologies used:</b><br/>node.js, Express, ReactJS, MongoDB, Mongoose, Github',
        img: '',
        links: {
            github: 'https://github.com/temujins/full-stack-blog-app',
            live: null,
        },
    },
    {
        id: 'https://github.com/temujins/todo-app-fm',
        title: 'Todo web app',
        desc: 'Add and remove todo mark todo as complete, filter todo/tasks by their completion status. Uses the localStorage to save and load the todo/tasks. Light and dark mode<br/><br/><b>Technologies used:</b><br/>TypeScript, ReactJS, styled-components',
        img: '',
        links: {
            github: 'https://github.com/temujins/todo-app-fm',
            live: 'http://react-ts-todo-app.vercel.app/',
        },
    },
    {
        id: 'https://github.com/temujins/card-game',
        title: 'Simple Card game',
        desc: 'Simple card flipping game build with vanilla JavaScript. This project also uses the object oriented concepts of JavaScript<br/><br/><b>Technologies used:</b><br/>JavaScript, HTML, CSS',
        img: '',
        links: {
            github: 'https://github.com/temujins/card-game',
            live: null,
        },
    },
    {
        id: 'https://github.com/temujins/snake-game',
        title: 'Simple Snake game',
        desc: 'Build with vanilla JavaScript.Control the snake with the keyboard arrow keys. Uses object oriented concepts of JavaScript<br/><br/><b>Technologies used:</b><br/>JavaScript, HTML, CSS',
        img: '',
        links: {
            github: 'https://github.com/temujins/snake-game',
            live: null,
        },
    },
];

export { categories, projects };
