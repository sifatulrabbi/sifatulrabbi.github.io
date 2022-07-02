import React from "react";

interface Props {
  title: string;
  company: string;
  details: string[];
}

export const WorkCard: React.FC<Props> = ({ title, company, details }) => {
  return (
    <div className="border-[1px] rounded-md border-gray-500 p-4">
      <h4 className="mb-2">
        {title}
        <br />
        <i className="text-base">@{company}</i>
      </h4>
      <ul className="text-sm list-disc pl-4">
        {details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
