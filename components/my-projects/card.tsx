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
}

export const Card: React.FC<Props> = ({
    name,
    summary,
    banner,
    stack,
    bgColor,
    links: {github, live},
}) => {
    return (
        <div
            className="p-6 max-h-fit rounded-lg max-w-md"
            style={{backgroundColor: bgColor}}
        >
            <div className="mb-12">
                <Img
                    src={banner}
                    alt="Full stack Web development"
                    layout="intrinsic"
                />
            </div>
            <div className="flex flex-col justify-start align-top">
                <h4 className="text-white text-primary font-bold text-2xl mb-6">
                    {name}
                </h4>
                <p className="text-light text-base">{summary}</p>
                <div className="flex flex-col mt-8 mb-10">
                    <span className="text-blue text-base mb-3">Stack</span>
                    <ul className="flex flex-row gap-4">
                        {stack.map((Icon) => (
                            <li key={v4()}>
                                <Icon className="text-xl text-white" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-row gap-6">
                    {live && (
                        <button className="btn-primary-small">Live</button>
                    )}
                    {github && (
                        <button className="btn-secondary-small">Github</button>
                    )}
                </div>
            </div>
        </div>
    );
};
