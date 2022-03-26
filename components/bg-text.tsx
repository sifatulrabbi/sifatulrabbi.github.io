import React from "react";

interface Props {
    text: string;
    dark?: boolean;
}

export const BgText: React.FC<Props> = ({text, dark}) => {
    return (
        <div className="absolute top-0 left-1/2 z-0 -translate-x-1/2">
            <style>
                {`
                    span {
                        font-size: clamp(5rem, 10vw, 14rem);
                        line-height: 1;
                    }
                `}
            </style>
            <span
                className={`text-dark font-primary text-primary font-[900] ${
                    dark ? "opacity-20" : "opacity-10"
                }`}
            >
                {text}
            </span>
        </div>
    );
};
