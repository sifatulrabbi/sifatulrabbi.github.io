import React from "react";

type Props = {
    name: string;
    description: string;
};

const tools: Props[] = [
    { name: "Git", description: "" },
    { name: "GitHub", description: "" },
    { name: "Docker", description: "" },
    { name: "Linux", description: "" },
    { name: "GCP", description: "" },
    { name: "VSCode", description: "" },
];

const Tools: React.FC = () => {
    return (
        <div className="w-full prose prose-slate prose-invert max-w-4xl prose-h3:text-slate-300 prose-h4:my-2 prose-strong:text-slate-400">
            <h3>Tools</h3>
            <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                {tools.map((t) => (
                    <div
                        key={`skills-language-${t.name}`}
                        className="flex-grow rounded-lg flex justify-center items-center h-[50px] bg-slate-800 px-2 cursor-pointer lg:hover:shadow-[0_0_0_2px] lg:hover:shadow-primary-400 transition-[box-shadow] duration-300"
                    >
                        {t.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tools;
