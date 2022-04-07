import React from "react";
import {ProjectCard} from "../components";
import {otherProjectsSelector} from "../states";
import {useRecoilValue} from "recoil";
import {v4} from "uuid";

export const ProjectsView: React.FC = () => {
    const otherProjects = useRecoilValue(otherProjectsSelector);
    return (
        <div className="w-full flex flex-col justify-center items-start">
            <h3 className="text-xl font-medium font-primary text-black">
                Other projects
            </h3>
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
                {otherProjects.map((project) => (
                    <ProjectCard key={v4()} {...project} />
                ))}
            </div>
        </div>
    );
};
