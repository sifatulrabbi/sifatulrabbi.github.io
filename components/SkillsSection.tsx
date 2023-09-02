import React from "react";
import { v4 } from "uuid";

const SkillChip: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div className="rounded-full text-sm px-2 py-[3px] bg-slate-200/80 dark:bg-slate-700">
            {name}
        </div>
    );
};

export const SkillsSection: React.FC<{ data: string[] }> = ({ data }) => {
    return (
        <div className="flex flex-row flex-wrap justify-start items-center gap-4">
            {data.map((skill) => (
                <SkillChip key={v4()} name={skill} />
            ))}
        </div>
    );
};
