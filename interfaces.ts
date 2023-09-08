import { IconType } from "react-icons";

export interface FeaturedProject {
    img: {
        src: string;
        height: number;
        width: number;
    };
    title: string;
    summary: string;
    links: {
        live?: string;
        github?: string;
    };
    icons: IconType[];
}

export interface PersonalProject
    extends Omit<FeaturedProject, "img" | "links"> {
    link: string;
}
