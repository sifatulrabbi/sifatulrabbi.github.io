import React from "react";

type Props = {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput: React.FC<Props> = ({
    label,
    className = "",
    name,
    required,
    placeholder,
    type,
    value,
    onChange,
    ...other
}) => {
    return (
        <div
            className={`w-full flex flex-col justify-start items start ${className}`}
        >
            <label
                htmlFor={name}
                className="w-full font-primary font-medium mb-1"
            >
                {label}
                {required ? "*" : ""}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                required={required}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...other}
                className={
                    "w-full p-2 rounded-md border border-slate-400 bg-transparent text-black dark:text-white outline-none focus:border-primary text-base " +
                    className
                }
            />
        </div>
    );
};
