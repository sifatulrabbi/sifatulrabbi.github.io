import React from "react";
import {IconType} from "react-icons";
import {v4} from "uuid";
import Img from "next/image";
import Link from "next/link";

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
    banner,
    stack,
    links: {github, live},
}) => {
    return (
        <div className="flex flex-col-reverse justify-start item-start lg:flex-row">
            <div className="flex flex-col justify-start w-full max-w-lg border-l-2 p-4">
                <h4 className="text-xl uppercase text-black mb-3 font-bold tracking-wider">
                    {name}
                </h4>
                <ul className="flex gap-3">
                    {stack.map((Icon) => (
                        <Icon key={v4()} className="text-2xl text-dark" />
                    ))}
                </ul>
                <div className="flex gap-4">
                    {live && (
                        <Link href="/">
                            <a className="block mt-6 font-primary rounded-lg bg-black text-white px-4 py-2 btn-hover">
                                Live
                            </a>
                        </Link>
                    )}
                    {github && (
                        <Link href="/">
                            <a className="block mt-6 font-primary rounded-lg bg-black bg-opacity-10 text-black px-4 py-2 btn-hover">
                                Github
                            </a>
                        </Link>
                    )}
                </div>
            </div>
            <div className="bg-white w-full max-w-xs flex justify-start items-start h-[220px] overflow-hidden">
                <Img
                    src={banner}
                    alt={name}
                    objectFit="cover"
                    layout="intrinsic"
                    className="img saturate-0"
                />
            </div>
        </div>
    );
};
