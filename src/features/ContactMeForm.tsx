import React from "react";
import { FormGroup } from "../components";
import { v4 } from "uuid";
import { BiSend } from "react-icons/bi";

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
      className="w-full flex flex-col justify-start items-start gap-4 p-4 rounded-lg border-4 text-sm opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.4s_forwards]"
    >
      <h4 className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.6s_forwards]">
        Send an Email
      </h4>
      {formData.map((data) => (
        <FormGroup
          key={v4()}
          {...data}
          className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.8s_forwards]"
        />
      ))}
      <button
        type="submit"
        className="btn-primary flex items-center gap-2 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_2.0s_forwards]"
      >
        Send now <BiSend />
      </button>
    </form>
  );
};
