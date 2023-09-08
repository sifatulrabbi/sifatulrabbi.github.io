import React from "react";
import Img from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { AiOutlineBulb, AiOutlineLink } from "react-icons/ai";
import { v4 } from "uuid";
import { FeaturedProject } from "../interfaces";
import { useInViewport } from "react-in-viewport";

interface Props extends FeaturedProject {
    className?: string;
}

export const FeaturedProjectCard: React.FC<Props> = ({
    img,
    title,
    summary,
    links,
    icons,
}) => {
    const elementRef = React.useRef(null);
    const { inViewport } = useInViewport(
        // @ts-ignore
        elementRef,
        {},
        { disconnectOnLeave: false },
        { img, title, summary, links, icons },
    );

    return (
        <div
            ref={elementRef}
            className="max-w-[500px] lg:max-w-full grid grid-cols-1 lg:grid-cols-2 transition-[width] ease duration-400 overflow-hidden w-full gap-4 border-[1px] border-slate-400 p-4 rounded-lg"
        >
            <div
                className={`max-w-[500px] max-h-[260px] overflow-hidden opacity-0 translate-y-4 flex justify-center items-center ${
                    inViewport
                        ? "animate-[textSlideUp_0.5s_ease_0.1s_forwards]"
                        : ""
                }`}
            >
                <Img
                    src={img.src}
                    height={img.height}
                    width={img.width}
                    alt="Sifatul Rabbi -> HelloScribe AI"
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
                    className={`flex flex-row flex-wrap justify-start items-center gap-4 mt-4 opacity-0 translate-y-4 ${
                        inViewport
                            ? "animate-[textSlideUp_0.5s_ease_0.7s_forwards]"
                            : ""
                    }`}
                >
                    {icons.map((Icon) => (
                        <Icon key={v4()} className="text-xl" />
                    ))}
                </div>
                <div className="mt-8 flex justify-start items-center gap-4">
                    {links.live && (
                        <Link href={links.live}>
                            <a
                                target="_blank"
                                className={`btn-primary flex items-center gap-2 opacity-0 translate-y-4 ${
                                    inViewport
                                        ? "animate-[textSlideUp_0.5s_ease_0.9s_forwards]"
                                        : ""
                                }`}
                            >
                                Website Link <AiOutlineLink />
                            </a>
                        </Link>
                    )}
                    {links.github && (
                        <Link href={links.github}>
                            <a
                                target="_blank"
                                className={`btn-primary flex items-center gap-2 opacity-0 translate-y-4 ${
                                    inViewport
                                        ? "animate-[textSlideUp_0.5s_ease_0.9s_forwards]"
                                        : ""
                                }`}
                            >
                                GitHub <SiGithub />
                            </a>
                        </Link>
                    )}
                    <Link href="/about">
                        <a
                            className={`btn-secondary flex items-center gap-2 opacity-0 translate-y-4 ${
                                inViewport
                                    ? "animate-[textSlideUp_0.5s_ease_0.9s_forwards]"
                                    : ""
                            }`}
                        >
                            Learn More <AiOutlineBulb />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};
