import React from "react";
import dayjs from "dayjs";
import { BiCalendar } from "react-icons/bi";

interface Props {
    title: string;
    company?: string;
    type?: string;
    duration?: {
        start: string;
        end: string;
    };
    description?: string;
    details: string[];
}

export const WorkCard: React.FC<Props> = ({
    title,
    company,
    details,
    type,
    duration,
    description,
}) => {
    return (
        <div className="w-full flex flex-col gap-2 border-l border-gray-500 px-4 pb-8 pt-0 last:pb-4 relative">
            <div className="bg-gray-500 absolute top-0 left-0 -translate-x-1/2 rounded-full h-2 w-2"></div>
            <h4 className="mb-0">{title}</h4>
            {company && (
                <p className="w-full flex flex-wrap justify-between items-center font-primary">
                    <span className="text-primary inline-flex mr-2">
                        {company}
                    </span>
                    <span className="text-sm inline-flex flex-row items-center gap-1">
                        {duration && <BiCalendar />}
                        {duration &&
                            `${duration.start} - ${
                                duration.end || "Present"
                            } | `}
                        {type && <span className="text-secondary">{type}</span>}
                    </span>
                </p>
            )}
            {description && <p className="text-sm">{description}</p>}
            <ul className="text-sm list-disc pl-4">
                {details.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
