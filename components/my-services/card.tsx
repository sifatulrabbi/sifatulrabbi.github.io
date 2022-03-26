import React from "react";
import Link from "next/link";

interface Props {
    title: string;
    description: string;
    path: string;
}

export const Card: React.FC<Props> = ({title, description, path}) => {
    return (
        <div className="bg-white max-w-sm rounded-xl shadow-md p-5 transition-all duration-200 ease-in lg:flex-row hover:shadow-lg hover:-translate-y-[2px]">
            <h6 className="text-black text-base font-primary font-bold mb-2">
                {title}
            </h6>
            <p className="text-dark text-base font-secondary mb-4">
                {description}
            </p>
            <Link href={path}>
                <a className="font-primary text-blue text-sm font-bold">
                    Learn More
                </a>
            </Link>
        </div>
    );
};
