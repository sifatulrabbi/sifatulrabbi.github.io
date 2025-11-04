import React from "react";

type DB = {
    name: string;
    description: string;
};

const dbs: DB[] = [
    { name: "PostgreSQL", description: "" },
    { name: "Redis", description: "" },
    { name: "Cassandra", description: "" },
    { name: "MongoDB", description: "" },
];

const Databases: React.FC = () => {
    return (
        <div className="w-full prose prose-slate prose-invert max-w-5xl prose-h3:text-slate-100 prose-h4:my-2 prose-strong:text-slate-400">
            <h3 className="text-2xl font-bold">Databases</h3>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {dbs.map((db, index) => (
                    <div
                        key={`skills-databases-${db.name}`}
                        className="glass-card flex justify-center items-center h-[60px] px-3 glass-hover group animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <span className="text-slate-200 font-medium text-sm text-center group-hover:text-primary-400 transition-colors duration-300">
                            {db.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Databases;
