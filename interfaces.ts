import {IconType} from "react-icons";

export interface IProjectCardFeatured {
    img: any;
    title: string;
    summary: string;
    links: {
        live: string;
        github: string;
    };
    icons: IconType[];
}

export interface IProjectCard
    extends Omit<IProjectCardFeatured, "img" | "links"> {
    link: string;
}
