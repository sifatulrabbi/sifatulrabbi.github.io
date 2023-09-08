import type { PersonalProject, FeaturedProject } from "../../interfaces";
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
    SiVuedotjs,
    SiAuth0,
    SiSass,
    SiGooglecloud,
    SiPython,
    SiDocker,
    SiKubernetes,
} from "react-icons/si";

export const featuredProjectsData: FeaturedProject[] = [
    {
        title: "HelloScribe A.I",
        summary:
            "HelloScribe is a helpful AI for research, writing, and brainstorming. It utilizes the modern AI technologies and has many tools for PR marketers and writers to assist their professional workloads.",
        img: {
            src: "/helloscribe-ai-landing-page.png",
            height: 500,
            width: 979.5,
        },
        links: {
            live: "https://helloscribe.ai",
        },
        icons: [
            SiJavascript,
            SiNodedotjs,
            SiExpress,
            SiMongodb,
            SiVuedotjs,
            SiAuth0,
            SiSocketdotio,
            SiTailwindcss,
            SiSass,
        ],
    },
    {
        title: "X-Booker",
        summary:
            "X-Booker is a tool for streamlining business operations. It manages site visits and data while implementing automation. It leverages Google services and other modern technologies to create custom automation, making business management smoother.",
        img: {
            src: "/x-booker-landing-page.png",
            height: 500,
            width: 979.5,
        },
        links: {
            live: "https://x-booker.co.uk",
        },
        icons: [
            SiTypescript,
            SiPython,
            SiNodedotjs,
            SiExpress,
            SiNextdotjs,
            SiGooglecloud,
            SiDocker,
            SiKubernetes,
            SiTailwindcss,
        ],
    },
];

export const projectsData: PersonalProject[] = [
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
        icons: [SiJavascript, SiFirebase],
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
