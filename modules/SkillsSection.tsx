import React from "react";

const skillsData = [
    {
        section_title: "Programming Skills",
        items: [
            {
                name: "JavaScript",
                description: "",
                icon: "",
            },
            {
                name: "TypeScript",
                description: "",
                icon: "",
            },
            {
                name: "Python",
                description: "",
                icon: "",
            },
            {
                name: "Go",
                description: "",
                icon: "",
            },
        ],
    },
    {
        section_title: "Backend Development",
        items: [
            {
                name: "Node.js",
                description: "",
                icon: "",
            },
            {
                name: "Express.js",
                description: "",
                icon: "",
            },
            {
                name: "FastAPI",
                description: "",
                icon: "",
            },
            {
                name: "Gin",
                description: "",
                icon: "",
            },
        ],
    },
];

export const SkillsSection: React.FC = () => {
    return (
        <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <h3 className="text-xl font-medium font-primary mb-4">Skills</h3>
        </div>
    );
};
