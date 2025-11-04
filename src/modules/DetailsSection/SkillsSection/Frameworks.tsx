import React from "react";

type Framework = {
    name: string;
    description: string;
};

const frameworks: Framework[] = [
    { name: "Node.js", description: "" },
    { name: "Nginx", description: "" },
    { name: "Express.js", description: "" },
    { name: "FastAPI", description: "" },
    { name: "Flask", description: "" },
    { name: "Gin", description: "" },
    { name: "Socket.IO", description: "" },
    { name: "React", description: "" },
    { name: "Next.js", description: "" },
    { name: "Vue", description: "" },
    { name: "TailwindCSS", description: "" },
    { name: "Sequelize", description: "" },
    { name: "GORM", description: "" },
    { name: "SCSS", description: "" },
    { name: "Redux", description: "" },
    { name: "Recoil", description: "" },
];

const Frameworks: React.FC = () => {
    return (
        <div className="w-full prose prose-slate prose-invert max-w-5xl prose-h3:text-slate-100 prose-h4:my-2 prose-strong:text-slate-400">
            <h3 className="text-2xl font-bold">Frameworks & Libraries</h3>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {frameworks.map((f, index) => (
                    <div
                        key={`skills-frameworks-${f.name}`}
                        className="glass-card flex justify-center items-center h-[60px] px-3 glass-hover group animate-slide-up"
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        <span className="text-slate-200 font-medium text-sm text-center group-hover:text-primary-400 transition-colors duration-300">
                            {f.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Frameworks;
