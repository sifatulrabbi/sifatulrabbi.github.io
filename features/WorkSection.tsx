import React from "react";
import {WorkCard} from "../components";
import {v4} from "uuid";
import {workExperiences} from "../assets/data";

export const WorkSection: React.FC = () => {
    return (
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            {workExperiences.map((data) => (
                <WorkCard key={v4()} {...data} />
            ))}
        </div>
    );
};
