import React from "react";
import {IconType} from "react-icons";
import {v4} from "uuid";
import Img from "next/image";

interface Props {
    name: string;
    summary: string;
    stack: IconType[];
    bgColor: string;
    banner: StaticImageData;
    links: {
        github?: string;
        live?: string;
    };
    reverse?: boolean;
}

export const Card: React.FC<Props> = ({
    name,
    summary,
    banner,
    stack,
    bgColor,
    links: {github, live},
    reverse,
}) => {
    return <></>;
};
