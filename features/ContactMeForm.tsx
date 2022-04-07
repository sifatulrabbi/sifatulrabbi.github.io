import React from "react";
import {FormGroup} from "../components";
import {v4} from "uuid";
import {BiSend} from "react-icons/bi";

interface IFromData {
    required?: boolean;
    type?: "text" | "number" | "textarea" | "email" | "password";
    label: string;
    name: string;
    placeholder?: string;
}

const formData: IFromData[] = [
    {
        name: "name",
        label: "Name",
        type: "text",
        required: true,
        placeholder: "Your Name",
    },
    {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        placeholder: "Your Email",
    },
    {
        name: "subject",
        label: "Subject",
        type: "text",
        required: true,
        placeholder: "Your Subject",
    },
    {
        name: "message",
        label: "Message",
        type: "textarea",
        required: true,
        placeholder: "Your Message",
    },
];

export const ContactMeForm: React.FC = () => {
    return (
        <form
            action="submit"
            className="w-full flex flex-col justify-start items-start gap-4 p-4 rounded-lg border-4 border-gray-500 text-sm"
        >
            <h4>Send an Email</h4>
            {formData.map((data) => (
                <FormGroup key={v4()} {...data} />
            ))}
            <button
                type="submit"
                className="btn-primary flex items-center gap-2"
            >
                Send Now <BiSend />
            </button>
        </form>
    );
};
