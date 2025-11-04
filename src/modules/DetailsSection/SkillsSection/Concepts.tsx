import React from "react";

type Concept = {
    name: string;
    description: string;
};

const concepts: Concept[] = [
    { name: "REST APIs", description: "" },
    { name: "SPA", description: "" },
    { name: "Async and Concurrency", description: "" },
    { name: "Microservices", description: "" },
    { name: "Design Patterns", description: "" },
    { name: "System Design", description: "" },
    { name: "TDD & BDD", description: "" },
];

const Concepts: React.FC = () => {
    return (
        <div className="w-full prose prose-slate prose-invert max-w-5xl prose-h3:text-slate-100 prose-h4:my-2 prose-strong:text-slate-300">
            <h3 className="text-2xl font-bold">Concepts and Interests</h3>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {concepts.map((c, index) => (
                    <div
                        key={`skills-concepts-${c.name}`}
                        className="glass-card flex justify-center items-center h-[60px] px-4 glass-hover group animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <span className="text-slate-200 font-medium text-sm text-center group-hover:text-primary-400 transition-colors duration-300">
                            {c.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Concepts;
