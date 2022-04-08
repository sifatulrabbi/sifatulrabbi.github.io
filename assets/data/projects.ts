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
} from "react-icons/si";
import {b2bApplication, todoAppBanner, socialMediaBanner} from "../images";
import {IProjectCard, IProjectCardFeatured} from "../../interfaces";

export const featuredProjectsData: IProjectCardFeatured[] = [
    {
        title: "Meta messenger like chat application",
        summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus maiores soluta id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugiat",
        img: socialMediaBanner,
        links: {
            live: "https://meta-messenger-clone.vercel.app",
            github: "https://github.com/sifatulrabbi/meta-messenger-clone",
        },
        icons: [
            SiTypescript,
            SiNodedotjs,
            SiReact,
            SiTailwindcss,
            SiPostgresql,
        ],
    },
    {
        title: "Business to business management application",
        summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus maiores soluta id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugiat",
        img: b2bApplication,
        links: {
            live: "https://healthos-test.vercel.app",
            github: "https://github.com/sifatulrabbi/healtos-test",
        },
        icons: [SiJavascript, SiReact, SiTailwindcss],
    },
    {
        title: "To do application",
        summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus maiores soluta id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugiat",
        img: todoAppBanner,
        links: {
            live: "https://todo-app-fm.vercel.app",
            github: "https://github.com/sifatulrabbi",
        },
        icons: [SiJavascript, SiReact, SiStyledcomponents],
    },
];

export const projectsData: IProjectCard[] = [
    {
        title: "API for ECommerce store",
        summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus maiores soluta id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugiat",
        link: "https://github.com/sifatulrabbi",
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus maiores soluta id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugiat",
        link: "https://github.com/sifatulrabbi",
        icons: [SiTypescript, SiNextdotjs, SiFirebase],
    },
    {
        title: "Chrome custom homepage extension",
        summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus maiores soluta id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugiat",
        link: "https://github.com/sifatulrabbi",
        icons: [SiJavascript, SiNodedotjs, SiCss3, SiHtml5],
    },
    {
        title: "Wottery | Lottery selling and buying website",
        summary:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus maiores soluta id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugiat",
        link: "https://github.com/sifatulrabbi",
        icons: [
            SiTypescript,
            SiNodedotjs,
            SiExpress,
            SiNextdotjs,
            SiTailwindcss,
            SiPostgresql,
        ],
    },
];
