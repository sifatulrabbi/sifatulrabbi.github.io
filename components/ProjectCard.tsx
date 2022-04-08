import Link from "next/link";
import React from "react";
import {IconType} from "react-icons";
import {SiGithub} from "react-icons/si";
import {v4} from "uuid";

interface Props {
    title: string;
    summary: string;
    img?: any;
    link: string;
    icons: IconType[];
}

export const ProjectCard: React.FC<Props> = ({title, link, summary, icons}) => {
    return (
        <Link href={link}>
            <a className="relative overflow-hidden rounded-md border-[1px] border-gray-400 p-4 flex flex-col justify-start items-start transition-all hover:border-primary hover:-translate-y-1">
                <h4 className="mb-2 mr-6">{title}</h4>
                <p className="text-sm my-4">{summary}</p>
                <div className="flex flex-row justify-start items-center gap-4">
                    {icons.map((Icon) => (
                        <Icon key={v4()} className="text-2xl" />
                    ))}
                </div>
                <span className="text-xl absolute top-4 right-4">
                    <SiGithub />
                </span>
            </a>
        </Link>
    );
};
