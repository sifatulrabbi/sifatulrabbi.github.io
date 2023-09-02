import React from "react";
import { ProjectCard } from "../components";
import { otherProjectsSelector } from "../states";
import { useRecoilValue } from "recoil";
import { v4 } from "uuid";
import { useInViewport } from "react-in-viewport";

interface Props {
    className?: string;
}

export const ProjectsView: React.FC<Props> = ({ className }) => {
    const elementRef = React.useRef(null);
    const { inViewport } = useInViewport(
        // @ts-ignore
        elementRef,
        {},
        { disconnectOnLeave: false },
        { className },
    );

    const otherProjects = useRecoilValue(otherProjectsSelector);
    return (
        <div
            ref={elementRef}
            className={`w-full flex flex-col justify-center items-start ${className}`}
        >
            <h3
                className={`text-xl font-medium font-primary text-black opacity-0 translate-y-4 ${
                    inViewport
                        ? "animate-[textSlideUp_0.5s_ease_0.5s_forwards]"
                        : ""
                }`}
            >
                Personal Projects
            </h3>
            <div
                className={`mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 opacity-0 translate-y-4 ${
                    inViewport
                        ? "animate-[textSlideUp_0.5s_ease_0.7s_forwards]"
                        : ""
                }`}
            >
                {otherProjects.map((project) => (
                    <ProjectCard key={v4()} {...project} />
                ))}
            </div>
        </div>
    );
};
