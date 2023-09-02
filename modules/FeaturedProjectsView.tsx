import React from "react";
import { FeaturedProjectCard } from "../components";
import { featuredProjectsSelector } from "../states";
import { useRecoilValue } from "recoil";
import { v4 } from "uuid";

interface Props {
    className?: string;
}

export const FeaturedProjectsView: React.FC<Props> = ({ className }) => {
    const featuredProjects = useRecoilValue(featuredProjectsSelector);
    return (
        <div
            className={`w-full flex flex-col justify-start items-start ${className}`}
        >
            <h3 className="text-xl font-medium font-primary mb-4">My Works</h3>
            <div className="w-full flex flex-col justify-start items-center gap-4">
                {featuredProjects.map((project) => (
                    <FeaturedProjectCard key={v4()} {...project} />
                ))}
            </div>
        </div>
    );
};
