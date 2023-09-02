import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiTailwindcss,
    SiPostgresql,
    SiCss3,
    SiHtml5,
    SiMongodb,
    SiPassport,
    SiJsonwebtokens,
    SiNextdotjs,
    SiFirebase,
    SiStyledcomponents,
    SiExpress,
    SiSocketdotio,
    SiReactrouter,
    SiMaterialui,
} from "react-icons/si";
import { b2bApplication, todoAppBanner, socialMediaBanner } from "../images";
import { IProjectCard, IProjectCardFeatured } from "../../interfaces";

export const featuredProjectsData: IProjectCardFeatured[] = [
    {
        title: "Meta messenger like chat application",
        summary:
            "This application is inspired from Meta Messenger. It has user authentication system with JWT, and live chatting with WebSockets. Users can find other users by searching and can add to friend list.",
        img: socialMediaBanner,
        links: {
            live: "https://meta-messenger-clone.vercel.app",
            github: "https://github.com/sifatulrabbi/meta-messenger-clone",
        },
        icons: [
            SiNodedotjs,
            SiExpress,
            SiPostgresql,
            SiSocketdotio,
            SiNextdotjs,
            SiTailwindcss,
        ],
    },
    {
        title: "Business to business management application",
        summary:
            "A business management web application for managing a online store. It has a simple dashboard to show the latest updates. This application is multi-paged. I has a user authentication system with JWT.",
        img: b2bApplication,
        links: {
            live: "https://healthos-test.vercel.app",
            github: "https://github.com/sifatulrabbi/healtos-test",
        },
        icons: [SiReact, SiTailwindcss, SiReactrouter],
    },
    {
        title: "To do application",
        summary:
            "Simple ToDo application for managing ToDos. It stores to dos in the localStorage. The UI is minimal and has dark and light mode.",
        img: todoAppBanner,
        links: {
            live: "https://todo-app-fm.vercel.app",
            github: "https://github.com/sifatulrabbi/todo-app-fm",
        },
        icons: [SiReact, SiStyledcomponents],
    },
];

export const projectsData: IProjectCard[] = [
    {
        title: "API for ECommerce store",
        summary:
            "ECommerce store API with user authentication and complex routing.",
        link: "https://github.com/sifatulrabbi/",
        icons: [
            SiTypescript,
            SiNodedotjs,
            SiMongodb,
            SiPassport,
            SiJsonwebtokens,
        ],
    },
    {
        title: "My portfolio website",
        summary:
            "This is my current website for showcasing my projects and telling about my services.",
        link: "https://github.com/sifatulrabbi/sifatulrabbi.github.io",
        icons: [
            SiTypescript,
            SiNextdotjs,
            SiTailwindcss,
            SiNodedotjs,
            SiExpress,
        ],
    },
    {
        title: "Social media application",
        summary:
            "A simple social media application Firebase as backend. Here users can create account, post updates, like and comment in other's posts",
        link: "https://github.com/sifatulrabbi/socila_media_app",
        icons: [SiJavascript, SiFirebase, SiMaterialui],
    },
    {
        title: "Chrome extension",
        summary:
            "A chrome custom homepage extension I have built for my-self to manage my bookmarks and custom reading lists.",
        link: "https://github.com/sifatulrabbi/my-browser-extension",
        icons: [SiJavascript, SiNodedotjs, SiCss3, SiHtml5],
    },
    {
        title: "Lottery website",
        summary:
            "This is a lottery buying and selling website. Users can create accounts and setup their lottery stores.",
        link: "https://github.com/sifatulrabbi/wottery",
        icons: [
            SiTypescript,
            SiNodedotjs,
            SiExpress,
            SiNextdotjs,
            SiTailwindcss,
            SiPostgresql,
        ],
    },
    {
        title: "Quiz website",
        summary: "A quiz website with scoring features",
        link: "https://github.com/sifatulrabbi/react-quiz",
        icons: [SiTypescript, SiReact, SiStyledcomponents],
    },
];
