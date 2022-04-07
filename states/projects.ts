import {IconType} from "react-icons";
import {atom, selector} from "recoil";
import {
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiNextdotjs,
} from "react-icons/si";
import {fullstackBlogBanner} from "../assets/images";

export interface IProject {
    title: string;
    summary: string;
    img?: any;
    link: string;
    icons: IconType[];
}

export const projectsState = atom<IProject[]>({
    key: "projectsAtom",
    default: [],
});

export const featuredProjectsSelector = selector({
    key: "featuredProjectsSelector",
    get: ({get}) => {
        const defaultValues = get(projectsState);
        return [
            {
                title: "Blogging website | Full Stack",
                summary:
                    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
                img: fullstackBlogBanner,
                link: "/projects",
                icons: [SiExpress, SiNodedotjs, SiNextdotjs, SiTypescript],
            },
            {
                title: "Blogging website | Full Stack",
                summary:
                    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
                img: fullstackBlogBanner,
                link: "/projects",
                icons: [SiExpress, SiNodedotjs, SiNextdotjs, SiTypescript],
            },
        ];
    },
});

export const otherProjectsSelector = selector({
    key: "otherProjectsSelector",
    get: ({get}) => {
        const defaultValues = get(projectsState);
        return [
            {
                title: "Blogging website | Full Stack",
                summary:
                    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
                img: fullstackBlogBanner,
                link: "/projects",
                icons: [SiExpress, SiNodedotjs, SiNextdotjs, SiTypescript],
            },
            {
                title: "Blogging website | Full Stack",
                summary:
                    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
                img: fullstackBlogBanner,
                link: "/projects",
                icons: [SiExpress, SiNodedotjs, SiNextdotjs, SiTypescript],
            },
            {
                title: "Blogging website | Full Stack",
                summary:
                    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
                img: fullstackBlogBanner,
                link: "/projects",
                icons: [SiExpress, SiNodedotjs, SiNextdotjs, SiTypescript],
            },
            {
                title: "Blogging website | Full Stack",
                summary:
                    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
                img: fullstackBlogBanner,
                link: "/projects",
                icons: [SiExpress, SiNodedotjs, SiNextdotjs, SiTypescript],
            },
        ];
    },
});
