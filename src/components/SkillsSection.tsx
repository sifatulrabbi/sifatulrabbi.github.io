import React from "react";
import { v4 } from "uuid";

const SkillChip: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="rounded-full border-[1px] border-gray-500 text-sm px-2 py-[2px]">
      {name}
    </div>
  );
};

export const SkillsSection: React.FC<{ data: string[] }> = ({ data }) => {
  return (
    <div className="flex flex-row flex-wrap justify-start items-center gap-2">
      {data.map((skill) => (
        <SkillChip key={v4()} name={skill} />
      ))}
    </div>
  );
};
