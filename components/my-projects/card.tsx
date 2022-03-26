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
    return (
        <div
            className={`max-h-fit rounded-lg flex gap-12 bg-dark bg-opacity-5 max-w-5xl flex-col transition-all duration-300 ease-in ${
                reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } hover:shadow-lg hover:-translate-y-[2px]`}
        >
            <div className="min-w-[280px] max-w-md w-full self-center p-6">
                <Img
                    src={banner}
                    alt="Full stack Web development"
                    layout="intrinsic"
                />
            </div>
            <div
                className="flex flex-col rounded-lg justify-start align-top p-6 max-w-md"
                style={{backgroundColor: bgColor}}
            >
                <h4 className="text-black font-primary font-bold text-xl mb-6">
                    {name}
                </h4>
                <p className="text-dark text-base">{summary}</p>
                <div className="flex flex-col mt-8 mb-10">
                    <span className="text-blue text-base mb-3">Stack</span>
                    <ul className="flex flex-row gap-4">
                        {stack.map((Icon) => (
                            <li key={v4()}>
                                <Icon className="text-xl text-black" />
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
