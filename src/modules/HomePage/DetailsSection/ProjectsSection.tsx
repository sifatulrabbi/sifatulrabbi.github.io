import React from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";

const projectsData = [
    {
        title: "LLM Agent",
        summary:
            "An interactive agent, able to hold a conversation with a human, and tell them about me and my professional experiences. Built using OpenAI's gpt-3.5.",
        projectType: "Personal",
        githubLink: "https://github.com/sifatulrabbi/openai-py-playground",
        liveLink: "",
        techStack: ["Python", "Langchain", "FastAPI", "Redis", "Socket.IO"],
    },
    {
        title: "Social Media app",
        summary:
            "A social media application built with popular web technologies. The app has registration and login functionality with persisting sessions. User profile system with features such as uploading profile pictures cover photos, and following other profiles. Feed that supports posts with images, audio, and videos. Also, users can like, comment, and share posts.",
        projectType: "Personal",
        githubLink: "https://github.com/sifatulrabbi/social_media_app",
        liveLink: "https://socialize-reactapp.web.app/login",
        techStack: ["JavaScript", "React", "Node.js", "Firebase"],
    },
    {
        title: "Hotel Management app",
        summary:
            "A Hotel Management application with backend API for a small boutique hotel. The app is responsive and fast-loading landing page with booking functionalities such as seeing a room’s availability and booking rooms. A notification system that notifies the admins when a new booking request is submitted and users when a booking request is accepted/rejected by admins. The email is also customizable by admins. Admin panel to manage booking requests, add/remove/disable rooms, or update room information.",
        projectType: "Freelance",
        githubLink: "https://github.com/sifatulrabbi",
        liveLink: "",
        techStack: [
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "PostgreSQL",
        ],
    },
    {
        title: "Business Management app",
        summary:
            "A frontend concept application for business management tool. This tool helps businesses managing their orders, customers, and products.",
        projectType: "Personal",
        githubLink: "https://github.com/sifatulrabbi",
        liveLink: "https://healthos-test.vercel.app/login",
        techStack: ["JavaScript", "React", "Node.js"],
    },
];

const ProjectsSection: React.FC = () => {
    return (
        <section className="w-full min-h-max flex flex-col justify-start items-start py-6 px-8 md:ml-[200px] lg:ml-[250px] mt-[50px]">
            <div className="w-full prose max-w-full prose-h1:text-slate-300 prose-h1:font-bold">
                <h1>Projects</h1>
                <small className="text-slate-400 text-sm">
                    I like exploring and learning new. I always build projects
                    try out new tools and concepts.
                </small>
            </div>

            <br />
            <br />

            {projectsData.map((d) => (
                <div
                    key={d.title}
                    className="w-full prose max-w-full prose-h4:text-slate-300 prose-h4:font-medium prose-h4:my-1 text-slate-400 prose-strong:text-slate-400"
                >
                    <small className="flex flex-row items-center gap-1 text-slate-500 font-mono">
                        {d.projectType}
                    </small>
                    <h4 className="flex items-center gap-1">{d.title}</h4>
                    <p
                        dangerouslySetInnerHTML={{ __html: d.summary }}
                        className="my-2"
                    />
                    <div className="w-full flex flex-row items-start justify-start flex-wrap gap-2">
                        {d.techStack.map((t) => (
                            <span
                                key={`tech-stack-${t}`}
                                className="inline-block text-xs px-3 py-1 rounded-full bg-slate-800"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="w-full flex flex-row items-center gap-2 mt-4">
                        {d.githubLink && (
                            <a
                                href={d.githubLink}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-slate-100 flex items-center gap-1 px-4 py-2 rounded-lg bg-primary-400 lg:hover:bg-primary-600 no-underline transition-colors duration-300"
                            >
                                GitHub
                                <FaGithub className="text-base" />
                            </a>
                        )}
                        {d.liveLink && (
                            <a
                                href={d.liveLink}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-primary-400 lg:hover:text-primary-200 flex items-center gap-1 px-4 py-2 rounded-lg border border-primary-400 lg:hover:border-primary-200 no-underline transition-colors duration-300"
                            >
                                Live link
                                <FaArrowRight className="text-sm -rotate-45" />
                            </a>
                        )}
                    </div>
                    <br />
                    <br />
                </div>
            ))}
        </section>
    );
};

export default ProjectsSection;
