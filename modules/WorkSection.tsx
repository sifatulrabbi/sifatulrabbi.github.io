import React from "react";
import { WorkCard } from "../components";
import { v4 } from "uuid";
import { workExperiences } from "../assets/data";

export const WorkSection: React.FC = () => {
    return (
        <div className="w-full flex flex-col justify-start items-start pt-4">
            {workExperiences.map((data) => (
                <WorkCard key={v4()} {...data} />
            ))}
        </div>
    );
};
