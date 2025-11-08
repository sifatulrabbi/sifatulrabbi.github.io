import React from "react";

interface BlinkingCursorProps {
    className?: string;
}

const BlinkingCursor: React.FC<BlinkingCursorProps> = ({ className = "" }) => {
    return (
        <span
            className={`inline-block w-[8px] h-[1em] bg-terminal-prompt animate-blink ${className}`}
            aria-hidden="true"
        >
            █
        </span>
    );
};

export default BlinkingCursor;
