import React from "react";

interface Props {
    required?: boolean;
    type?: "text" | "number" | "textarea" | "email" | "password";
    label: string;
    name: string;
    placeholder?: string;
}

export const FormGroup: React.FC<Props> = ({
    required = false,
    type = "text",
    name,
    label,
    placeholder = "",
}) => {
    const [value, setValue] = React.useState("");

    function handleChange(
        e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        setValue(e.currentTarget.value);
    }

    return (
        <div className="w-full flex flex-col justify-start items start">
            <label htmlFor={name} className="w-full font-primary font-medium">
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
