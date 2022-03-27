import React from "react";

interface Props {
    caption: string;
    title: string;
    dark?: boolean;
}

export const Header: React.FC<Props> = ({caption, title, dark}) => {
    return (
        <div className="flex flex-col max-w-xl">
            <span className="text-dark text-caption">{caption}</span>
            <h2 className="text-h2 mt-2">{title}</h2>
        </div>
    );
};
