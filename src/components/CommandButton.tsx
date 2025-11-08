import React from "react";
import { Link } from "react-router-dom";

interface CommandButtonProps {
    command: string;
    onClick?: () => void;
    to?: string;
    variant?: "primary" | "secondary";
    className?: string;
    icon?: React.ReactNode;
}

const CommandButton: React.FC<CommandButtonProps> = ({
    command,
    onClick,
    to,
    variant = "primary",
    className = "",
    icon,
}) => {

    const baseClasses = `
        relative
        w-full
        px-4 py-3
        font-mono text-sm sm:text-base
        border-2
        rounded-lg
        transition-all duration-200
        flex items-center justify-between
        group
        min-h-[50px]
    `;

    const variantClasses = {
        primary: `
            border-terminal-border
            bg-terminal-surface
            text-terminal-primary
            hover:border-terminal-accent
            hover:shadow-[0_0_15px_rgba(126,231,135,0.3)]
            hover:bg-terminal-surface-hover
        `,
        secondary: `
            border-terminal-border-dim
            bg-transparent
            text-terminal-secondary
            hover:border-terminal-info
            hover:shadow-[0_0_10px_rgba(88,166,255,0.2)]
            hover:text-terminal-primary
        `,
    };

    const content = (
        <>
            <span className="flex items-center gap-2">
                <span className="text-terminal-prompt">$</span>
                <span className="group-hover:text-terminal-accent transition-colors">
                    {command}
                </span>
            </span>
            {icon && (
                <span className="text-terminal-secondary group-hover:text-terminal-accent transition-colors">
                    {icon}
                </span>
            )}
            {/* Subtle glow effect on hover */}
            <span
                className={`
                    absolute inset-0
                    rounded-lg
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    bg-gradient-to-r from-transparent via-terminal-accent/5 to-transparent
                `}
            />
        </>
    );

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedClasses}>
            {content}
        </button>
    );
};

export default CommandButton;
