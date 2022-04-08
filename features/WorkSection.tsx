import React from "react";
import {WorkCard} from "../components";
import {v4} from "uuid";

const workData = [
    {
        title: "Full Stack Developer",
        company: "Upwork",
        details: [
            "Lorem ipsum dolor sit amet consectetur adipisicing",
            "Lorem ipsum dolor sit amet consectetur",
            "Lorem ipsum dolor sit amet consectetur adipisicing adipisicing",
        ],
    },
    {
        title: "Back End Developer",
        company: "Fiverr",
        details: [
            "Lorem ipsum dolor sit amet consectetur adipisicing",
            "Lorem ipsum dolor sit amet consectetur",
            "Lorem ipsum dolor sit amet consectetur adipisicing adipisicing",
        ],
    },
    {
        title: "Front End Developer",
        company: "Fiverr",
        details: [
            "Lorem ipsum dolor sit amet consectetur adipisicing",
            "Lorem ipsum dolor sit amet consectetur",
            "Lorem ipsum dolor sit amet consectetur adipisicing adipisicing",
        ],
    },
];

export const WorkSection: React.FC = () => {
    return (
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            {workData.map((data) => (
                <WorkCard key={v4()} {...data} />
            ))}
        </div>
    );
};
