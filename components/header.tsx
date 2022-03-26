import React from "react";

interface Props {
    caption: string;
    title: string;
}

export const Header: React.FC<Props> = ({caption, title}) => {
    return (
        <div className="flex flex-col max-w-xl">
            <span className="text-blue text-lg font-secondary">{caption}</span>
            <h2 className="text-h2 mt-2 font-primary">{title}</h2>
        </div>
    );
};
