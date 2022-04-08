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
import {featuredProjectsData, projectsData} from "../assets/data";

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
        return featuredProjectsData;
    },
});

export const otherProjectsSelector = selector({
    key: "otherProjectsSelector",
    get: ({get}) => {
        const defaultValues = get(projectsState);
        return projectsData;
    },
});
