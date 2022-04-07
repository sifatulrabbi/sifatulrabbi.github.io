import React from "react";
import Img from "next/image";
import Link from "next/link";

interface Props {
    img: any;
    title: string;
    link: string;
}

export const FeaturedProjectCard: React.FC<Props> = ({img, title, link}) => {
    return (
        <Link href={link}>
            <a className="max-w-[400px] max-h-[220px] relative flex flex-col justify-center items-center bg-gray-300 rounded-md overflow-hidden w-full transition-[padding_transform] duration-200 hover:p-1 hover:-translate-y-2">
                <Img
                    src={img}
                    alt="Feature project of Md Sifatul Islam Rabbi"
                    layout="intrinsic"
                    className="w-full h-auto object-cover rounded-md"
                />
                <span className="absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-90 font-primary font-medium text-lg text-center text-white block py-2">
                    {title}
                </span>
            </a>
        </Link>
    );
};
