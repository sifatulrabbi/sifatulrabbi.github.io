import React from "react";

const AnimatedText: React.FC<{ str: string; idx: number }> = ({ str, idx }) => {
    return (
        <span
            className="inline-block min-w-[10px] lg:hover:text-primary-400 duration-300 beating-colors"
            style={{ animationDelay: `${idx * 0.1}s` }}
        >
            {str}
        </span>
    );
};

export default AnimatedText;
