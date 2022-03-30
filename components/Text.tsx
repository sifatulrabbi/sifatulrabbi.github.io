import React from "react";

interface Props {
    children: React.ReactNode;
    paragraph?: true;
    mono?: true;
    small?: true;
    tiny?: true;
    className?: string;
    primary?: true;
}

export const Text: React.FC<Props> = ({
    children,
    paragraph,
    mono,
    small,
    tiny,
    className,
    primary,
}) => {
    const size = small ? "text-sm" : tiny ? "text-xs" : "text-base";
    const family = mono ? "font-mono" : "font-secondary";
    const color = primary ? "text-primary" : "text-secondary";
    const classNames = `${color} ${size} ${family} ${className}`;

    return paragraph ? (
        <p className={classNames}>{children}</p>
    ) : (
        <span className={classNames}>{children}</span>
    );
};
