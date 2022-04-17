import React from "react";
import Img from "next/image";
import Link from "next/link";
import {SiGithub} from "react-icons/si";
import {AiOutlineLink} from "react-icons/ai";
import {v4} from "uuid";
import {IProjectCardFeatured} from "../interfaces";
import {useInViewport} from "react-in-viewport";

interface Props extends IProjectCardFeatured {
    className?: string;
}

export const FeaturedProjectCard: React.FC<Props> = ({
    img,
    title,
    summary,
    links: {live, github},
    icons,
}) => {
    const elementRef = React.useRef(null);
    const {inViewport} = useInViewport(
        // @ts-ignore
        elementRef,
        {},
        {disconnectOnLeave: false},
        {img, title, summary, links: {live, github}, icons},
    );

    return (
        <div
            ref={elementRef}
            className="max-w-[500px] lg:max-w-full grid grid-cols-1 lg:grid-cols-2 transition-[width] ease duration-400 overflow-hidden w-full gap-4 border-[1px] border-gray-400 p-4 rounded-lg"
        >
            <div
                className={`max-w-[500px] max-h-[260px] overflow-hidden opacity-0 translate-y-4 ${
                    inViewport
                        ? "animate-[textSlideUp_0.5s_ease_0.1s_forwards]"
                        : ""
                }`}
            >
                <Img
                    src={img}
                    alt="Featured project of Md Sifatul Islam Rabbi"
                    layout="intrinsic"
                    className="object-cover w-auto h-auto"
                />
            </div>
            <div className="flex flex-col justify-start items-start">
                <h4
                    className={`bottom-0 left-0 right-0 font-primary font-medium text-lg text-start block mb-4 opacity-0 translate-y-4 ${
                        inViewport
                            ? "animate-[textSlideUp_0.5s_ease_0.3s_forwards]"
                            : ""
                    }`}
                >
                    {title}
                </h4>
                <p
                    className={`text-sm overflow-hidden opacity-0 translate-y-4 ${
                        inViewport
                            ? "animate-[textSlideUp_0.5s_ease_0.5s_forwards]"
                            : ""
                    }`}
                >
                    {summary}
                </p>
                <div
                    className={`flex flex-row justify-start items-center gap-4 mt-4 opacity-0 translate-y-4 ${
                        inViewport
                            ? "animate-[textSlideUp_0.5s_ease_0.7s_forwards]"
                            : ""
                    }`}
                >
                    {icons.map((Icon, index) => (
                        <Icon key={v4()} className="text-2xl" />
                    ))}
                </div>
                <div className="mt-8 flex justify-start items-center gap-4">
                    <Link href={live}>
                        <a
                            target="_blank"
                            className={`btn-primary flex items-center gap-2 opacity-0 translate-y-4 ${
                                inViewport
                                    ? "animate-[textSlideUp_0.5s_ease_0.9s_forwards]"
                                    : ""
                            }`}
                        >
                            Live site <AiOutlineLink />
                        </a>
                    </Link>
                    <Link href={github}>
                        <a
                            target="_blank"
                            className={`btn-secondary flex items-center gap-2 opacity-0 translate-y-4 ${
                                inViewport
                                    ? "animate-[textSlideUp_0.5s_ease_1s_forwards]"
                                    : ""
                            }`}
                        >
                            Github <SiGithub />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};
