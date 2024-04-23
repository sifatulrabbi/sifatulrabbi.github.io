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
    { name: "React.js", description: "" },
    { name: "Next.js", description: "" },
    { name: "Vue.js", description: "" },
    { name: "TailwindCSS", description: "" },
    { name: "Sequelize", description: "" },
    { name: "GORM", description: "" },
    { name: "SCSS", description: "" },
    { name: "Redux", description: "" },
    { name: "Recoil", description: "" },
];

const Frameworks: React.FC = () => {
    return (
        <div className="w-full prose prose-slate prose-invert max-w-full prose-h3:text-slate-300 prose-h4:my-2 prose-strong:text-slate-400">
            <h3>Frameworks & Libraries</h3>
            <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                {frameworks.map((f) => (
                    <div
                        key={`skills-frameworks-${f.name}`}
                        className="flex-grow rounded-lg flex justify-center items-center h-[50px] bg-slate-800 px-2 cursor-pointer lg:hover:shadow-[0_0_0_2px] lg:hover:shadow-primary-400 transition-[box-shadow] duration-300"
                    >
                        {f.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Frameworks;
