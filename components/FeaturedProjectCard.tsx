import React from "react";
import Img from "next/image";
import Link from "next/link";
import {IconType} from "react-icons";
import {v4} from "uuid";

interface Props {
    img: any;
    title: string;
    link: string;
    icons: IconType[];
}

export const FeaturedProjectCard: React.FC<Props> = ({
    img,
    title,
    link,
    icons,
}) => {
    return (
        <div className="max-w-[500px] lg:max-w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden w-full gap-4 border-[1px] border-gray-400 p-4 rounded-lg">
            <div className="max-w-[500px] w-full max-h-[260px] overflow-hidden">
                <Img
                    src={img}
                    alt="Featured project of Md Sifatul Islam Rabbi"
                    layout="intrinsic"
                    className="object-cover w-auto h-auto"
                />
            </div>
            <div className="flex flex-col justify-start items-start">
                <h4 className="bottom-0 left-0 right-0 font-primary font-medium text-lg text-center text-black block mb-2">
                    {title}
                </h4>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Nam accusamus maiores soluta id! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Pariatur, fugiat?
                </p>
                <div className="flex flex-row justify-start items-center gap-4 mt-4">
                    {icons.map((Icon) => (
                        <Icon key={v4()} className="text-2xl" />
                    ))}
                </div>
                <div className="mt-8 flex justify-start items-center gap-4">
                    <Link href={link}>
                        <a className="btn-primary block">Live site</a>
                    </Link>
                    <Link href={link}>
                        <a className="btn-secondary block">Github</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};
