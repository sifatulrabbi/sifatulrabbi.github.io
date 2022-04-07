import Image from "next/image";
import Link from "next/link";
import React from "react";
import {icons, IconType} from "react-icons";
import {v4} from "uuid";

interface Props {
    title: string;
    summary: string;
    img: any;
    link: string;
    icons: IconType[];
}

export const ProjectCard: React.FC<Props> = ({
    title,
    link,
    img,
    summary,
    icons,
}) => {
    return (
        <Link href={link}>
            <a className="max-w-[400px] overflow-hidden rounded-md border-[1px] border-gray-400 p-4 flex flex-col justify-start items-start">
                <h4 className="">{title}</h4>
                <div className="grid">
                    <div>
                        <p>{summary}</p>
                    </div>
                    <Image
                        src={img}
                        alt={title}
                        className="h-auto w-full object-cover"
                        layout="intrinsic"
                    />
                </div>
                <div className="flex flex-row justify-start items-center gap-4">
                    {icons.map((Icon) => (
                        <Icon key={v4()} className="text-2xl" />
                    ))}
                </div>
            </a>
        </Link>
    );
};
