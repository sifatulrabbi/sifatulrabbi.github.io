import React, { useState } from "react";
import { FormInput, FormTextarea } from "../components";
import { v4 } from "uuid";
import { BiRefresh, BiSend } from "react-icons/bi";
import axios from "axios";

interface IFromData {
    required?: boolean;
    type?: "text" | "number" | "textarea" | "email" | "password";
    label: string;
    name: string;
    placeholder?: string;
}

export const ContactMeForm: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const [senderEmail, setSenderEmail] = useState("");
    const [senderName, setSenderName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const resetForm = () => {
        setSenderEmail("");
        setSenderName("");
        setSubject("");
        setMessage("");
    };

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message.length < 1) return;
        try {
            setLoading(true);
            const payload = {
                sender_email: senderEmail,
                sender_name: senderName,
                subject,
                message,
            };
            await axios.post(
                "https://api.sifatul.com/v1/emails/to-me",
                payload,
            );
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
            resetForm();
        }
    };

    return (
        <form
            action="submit"
            onSubmit={handleSubmit}
            onReset={resetForm}
            className="w-full flex flex-col justify-start items-start gap-4 p-4 rounded-lg border-4 border-slate-400 text-sm opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.4s_forwards]"
        >
            <h4 className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.6s_forwards]">
                Send an Email
            </h4>
            <FormInput
                label="Name"
                name="sender-name"
                value={senderName}
                onChange={(e) => setSenderName(e.currentTarget.value)}
                required
                placeholder="Enter your name"
                disabled={loading}
                className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.8s_forwards]"
            />
            <FormInput
                label="Email"
                name="sender-email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.currentTarget.value)}
                required
                placeholder="Enter your email"
                disabled={loading}
                className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.8s_forwards]"
            />
            <FormInput
                label="Subject"
                name="sender-subject"
                value={subject}
                onChange={(e) => setSubject(e.currentTarget.value)}
                required
                placeholder="Enter your subject"
                disabled={loading}
                className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.8s_forwards]"
            />
            <FormTextarea
                label="Message"
                name="sender-message"
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value)}
                required
                placeholder="Write your message..."
                disabled={loading}
                className="opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.8s_forwards]"
            />
            <button
                type="submit"
                className="btn-primary flex items-center gap-2 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_2.0s_forwards]"
                disabled={loading}
            >
                {loading ? (
                    <>
                        <BiRefresh className="animate-[spin_1s_linear_infinite] text-base" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send now <BiSend />
                    </>
                )}
            </button>
        </form>
    );
};
