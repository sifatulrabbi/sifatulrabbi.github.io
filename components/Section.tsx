import React from "react";

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const Section: React.FC<Props> = ({children, className}) => {
    return (
        <section
            className={`w-full flex flex-col justify-start items-start p-4 ${className}`}
        >
            {children}
        </section>
    );
};
