import React from "react";

interface Props {
    title: string;
}

export const SectionHeader: React.FC<Props> = ({title}) => {
    return (
        <div className="flex justify-start w-fit relative items-center">
            <span className="font-mono text-primary text-lg">{"me."}</span>
            <h3 className="font-primary text-black font-bold text-3xl mb-3">
                {title}
            </h3>
            <div className="absolute left-0 bottom-0 bg-primary h-1 w-1/5"></div>
        </div>
    );
};
