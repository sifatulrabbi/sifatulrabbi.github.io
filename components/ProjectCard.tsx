import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { SiGithub } from "react-icons/si";
import { v4 } from "uuid";
import { useInViewport } from "react-in-viewport";

interface Props {
    title: string;
    summary: string;
    img?: any;
    link: string;
    icons: IconType[];
}

export const ProjectCard: React.FC<Props> = ({
    title,
    link,
    summary,
    icons,
}) => {
    const elementRef = React.useRef(null);
    const { inViewport } = useInViewport(
        // @ts-ignore
        elementRef,
        {},
        { disconnectOnLeave: false },
        { title, link, summary, icons },
    );

    return (
        <Link href={link}>
            <a
                ref={elementRef}
                className="relative overflow-hidden rounded-md border-[1px] border-slate-400 p-4 flex flex-col justify-start items-start transition-all hover:border-primary hover:-translate-y-1"
            >
                <h4
                    className={`mb-4 mr-6 opacity-0 translate-y-4 ${
                        inViewport
                            ? "animate-[textSlideUp_0.5s_ease_0.2s_forwards]"
                            : ""
                    }`}
                >
                    {title}
                </h4>
                <p
                    className={`text-sm mb-4 opacity-0 translate-y-4 ${
                        inViewport
                            ? "animate-[textSlideUp_0.5s_ease_0.4s_forwards]"
                            : ""
                    }`}
                >
                    {summary}
                </p>
                <div
                    className={`flex flex-row justify-start items-center gap-4 opacity-0 translate-y-4 ${
                        inViewport
                            ? "animate-[textSlideUp_0.5s_ease_0.6s_forwards]"
                            : ""
                    }`}
                >
                    {icons.map((Icon) => (
                        <Icon
                            key={v4()}
                            className={`text-2xl opacity-0 translate-y-4 ${
                                inViewport
                                    ? "animate-[textSlideUp_0.5s_ease_0.8s_forwards]"
                                    : ""
                            }`}
                        />
                    ))}
                </div>
                <span
                    className={`text-xl absolute top-4 right-4 opacity-0 translate-y-4 ${
                        inViewport
                            ? "animate-[textSlideUp_0.5s_ease_0.2s_forwards]"
                            : ""
                    }`}
                >
                    <SiGithub />
                </span>
            </a>
        </Link>
    );
};
