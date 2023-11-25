import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa6";
import { AnimatedText } from "@/components";
import { EmailsService } from "@/services";

const links = [
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        href: "https://linkedin.com/in/sifatulrabbi",
    },
    {
        name: "X (Twitter)",
        icon: <FaTwitter />,
        href: "https://twitter.com/sifatul_rabbi",
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
        href: "https://github.com/sifatulrabbi",
    },
    {
        name: "Email",
        icon: <FaEnvelope />,
        href: "mailto:sifatul@sifatul.com",
    },
];

const ContactPage: React.FC = () => {
    const [replyTo, setReplyTo] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const emailService = new EmailsService();
        try {
            const res = await emailService.sendEmailTome({
                replyTo: replyTo,
                name: name,
                message: message,
                subject: subject,
            });
            console.log(res);
            setReplyTo("");
            setMessage("");
            setSubject("");
        }
        catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full min-h-max flex flex-col justify-start items-start py-6 px-8 md:ml-[200px] lg:ml-[250px] mt-[50px]">
            <div className="w-full prose max-w-full prose-h1:text-slate-300 prose-h1:font-bold prose-a:text-slate-400 prose-a:no-underline lg:hover:prose-a:text-primary-400 prose-h4:text-slate-300 prose-h4:font-medium">
                <h1>
                    {"Let's Connect".split("").map((l, i) => (
                        <AnimatedText
                            key={`projects-header-${l}-${i}`}
                            str={l}
                            idx={i}
                        />
                    ))}
                </h1>
                <div className="w-full flex flex-col gap-8 justify-start items-start lg:flex-row-reverse">
                    <div className="flex flex-col gap-2 min-w-max lg:min-w-[250px]">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="flex flex-row items-center gap-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {l.icon}
                                {l.name}
                            </a>
                        ))}
                    </div>

                    <form
                        action="submit"
                        onSubmit={handleSubmit}
                        className="w-full flex flex-col gap-4 text-slate-400"
                    >
                        <h4 className="my-0">Send me a Direct message</h4>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="visitor_email">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    value={replyTo}
                                    onChange={(e) => setReplyTo(e.currentTarget.value)}
                                    required
                                    placeholder="e.g. john.doe@example.com"
                                    className="rounded-lg border-2 border-slate-700 px-4 py-2 outline-none focus:border-primary-400 placeholder:text-slate-600 text-slate-300 bg-slate-800/50"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="visitor_name">Name</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.currentTarget.value)}
                                    required
                                    placeholder="e.g. John Doe"
                                    className="rounded-lg border-2 border-slate-700 px-4 py-2 outline-none focus:border-primary-400 placeholder:text-slate-600 text-slate-300 bg-slate-800/50"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="visitor_subject">Subject</label>
                            <input
                                value={subject}
                                onChange={(e) => setSubject(e.currentTarget.value)}
                                required
                                placeholder="e.g. Discussing a cool new project..."
                                className="rounded-lg border-2 border-slate-700 px-4 py-2 outline-none focus:border-primary-400 placeholder:text-slate-600 text-slate-300 bg-slate-800/50"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="visitor_subject">Message</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.currentTarget.value)}
                                required
                                placeholder="Write your message here..."
                                className="rounded-lg border-2 border-slate-700 px-4 py-2 outline-none focus:border-primary-400 placeholder:text-slate-600 text-slate-300 bg-slate-800/50"
                                rows={6}
                            />
                        </div>
                        <button
                            disabled={loading}
                            className="bg-primary-400 lg:hover:bg-primary-200 rounded-lg px-4 py-2 text-white w-full lg:max-w-[200px] flex items-center justify-center disabled:opacity-75"
                        >
                            {loading ? <div className="animate-spin w-6 h-6 rounded-full border-4 border-t-primary-400 border-white bg-transparent" /> : "Send"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
