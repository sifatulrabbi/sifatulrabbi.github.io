import React from "react";

interface Props {
    required?: boolean;
    type?: "text" | "number" | "textarea" | "email" | "password";
    label: string;
    name: string;
    placeholder?: string;
    className?: string;
}

export const FormGroup: React.FC<Props> = ({
    required = false,
    type = "text",
    name,
    label,
    placeholder = "",
    className,
}) => {
    const [value, setValue] = React.useState("");

    function handleChange(
        e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        setValue(e.currentTarget.value);
    }

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
            {type === "textarea" ? (
                <textarea
                    id={name}
                    name={name}
                    required={required}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md border-[1px] bg-transparent text-black dark:text-white outline-none min-h-[140px] focus:border-primary"
                />
            ) : (
                <input
                    type="email"
                    id={name}
                    name={name}
                    required={required}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md border-[1px] bg-transparent text-black dark:text-white outline-none focus:border-primary"
                />
            )}
        </div>
    );
};
