import React from "react";

type Concept = {
    name: string;
    description: string;
};

const concepts: Concept[] = [
    { name: "Full Stack Development", description: "" },
    { name: "SPA (Single Page Applications)", description: "" },
    { name: "Microservices", description: "" },
    { name: "Problem Solving", description: "" },
    { name: "API development", description: "" },
    { name: "Async and Concurrency", description: "" },
    { name: "Design Patterns", description: "" },
    { name: "Distributed Systems", description: "" },
];

const Concepts: React.FC = () => {
    return (
        <div className="w-full prose max-w-full prose-h4:text-slate-300 prose-h4:font-medium prose-h4:my-2 text-slate-400 prose-strong:text-slate-400">
            <h4>Concepts and Interests</h4>
            <div className="w-full flex flex-row flex-wrap items-center justify-stretch gap-2">
                {concepts.map((c) => (
                    <div
                        key={`skills-concepts-${c.name}`}
                        className="flex-grow rounded-lg flex justify-center items-center h-[50px] bg-slate-800 px-2 cursor-pointer lg:hover:shadow-[0_0_0_2px] lg:hover:shadow-primary-400 transition-[box-shadow] duration-300"
                    >
                        {c.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Concepts;
