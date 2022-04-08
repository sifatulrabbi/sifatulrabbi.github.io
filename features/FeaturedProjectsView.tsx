import React from "react";
import {FeaturedProjectCard} from "../components";
import {featuredProjectsSelector} from "../states";
import {useRecoilValue} from "recoil";
import {v4} from "uuid";

export const FeaturedProjectsView: React.FC = () => {
    const featuredProjects = useRecoilValue(featuredProjectsSelector);
    return (
        <div className="w-full flex flex-col justify-start items-start">
            <h3 className="text-xl font-medium font-primary mb-4">
                Featured Projects
            </h3>
            <div className="w-full flex flex-col justify-start items-center gap-4">
                {featuredProjects.map((project) => (
                    <FeaturedProjectCard key={v4()} {...project} />
                ))}
            </div>
        </div>
    );
};
