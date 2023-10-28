import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

type Language = {
    name: string;
    description: string;
    projects: {
        title: string;
        summary: string;
        githubLink: string | null;
        liveLink: string | null;
    }[];
};

const languages: Language[] = [
    {
        name: "JavaScript",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut tempore molestias odio aspernatur fugiat, doloremque blanditiis laborum sunt totam quidem ratione, beatae et praesentium, soluta non dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut tempore molestias odio aspernatur fugiat, doloremque blanditiis laborum sunt totam quidem ratione, beatae et praesentium, soluta non dicta.",
        projects: [
            {
                title: "Social Media app",
                summary:
                    "MVP of a Social media application for professional doctors.",
                githubLink: "https://github.com/sifatulrabbi/social-media-app",
                liveLink: null,
            },
            {
                title: "Meta Workplace bot",
                summary:
                    "A workplace bot that can detect acronyms and answer the full meanings to the users when they mention the bot.",
                githubLink: "https://github.com/sifatulrabbi/workplace-bot",
                liveLink: null,
            },
            {
                title: "Hotel Management app",
                summary:
                    "MVP of a Hotel Management app that helps a boutique hotel with their day to day work.",
                githubLink: "https://github.com/sifatulrabbi/boutique-hotel",
                liveLink: null,
            },
        ],
    },
    {
        name: "Python",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut tempore molestias odio aspernatur fugiat, doloremque blanditiis laborum sunt totam quidem ratione, beatae et praesentium, soluta non dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut tempore molestias odio aspernatur fugiat, doloremque blanditiis laborum sunt totam quidem ratione, beatae et praesentium, soluta non dicta.",
        projects: [],
    },
    {
        name: "TypeScript",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut tempore molestias odio aspernatur fugiat, doloremque blanditiis laborum sunt totam quidem ratione, beatae et praesentium, soluta non dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut tempore molestias odio aspernatur fugiat, doloremque blanditiis laborum sunt totam quidem ratione, beatae et praesentium, soluta non dicta.",
        projects: [],
    },
    {
        name: "Go",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut tempore molestias odio aspernatur fugiat, doloremque blanditiis laborum sunt totam quidem ratione, beatae et praesentium, soluta non dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut tempore molestias odio aspernatur fugiat, doloremque blanditiis laborum sunt totam quidem ratione, beatae et praesentium, soluta non dicta.",
        projects: [],
    },
];

const ProgrammingLanguages: React.FC = () => {
    const [selectedLang, setSelectedLang] = useState<Language | null>(null);

    return (
        <>
            <div className="w-full prose max-w-full prose-h4:text-slate-300 prose-h4:font-medium prose-h4:my-2 text-slate-400 prose-strong:text-slate-400">
                <h4>Programming Languages</h4>
                <div className="w-full flex flex-row flex-wrap items-center justify-stretch gap-2">
                    {languages.map((l) => (
                        <div
                            key={`skills-language-${l.name}`}
                            onClick={() => setSelectedLang(l)}
                            className="flex-grow rounded-lg flex justify-center items-center h-[50px] bg-slate-800 px-2 cursor-pointer lg:hover:shadow-[0_0_0_2px] lg:hover:shadow-primary-400 transition-[box-shadow] duration-300"
                        >
                            {l.name}
                        </div>
                    ))}
                </div>
            </div>

            {selectedLang && (
                <div
                    onClick={() => setSelectedLang(null)}
                    className="fixed top-0 right-0 left-0 bottom-0 z-[100] bg-black/30"
                    style={{
                        backdropFilter: "blur(4px)",
                        pointerEvents: "all",
                    }}
                />
            )}
            {selectedLang && (
                <div
                    className="fixed z-[100] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 prose max-w-[90vw] w-full md:max-w-[500px] max-h-[80vh] overflow-y-auto bg-slate-800/80 prose-h3:text-slate-300 prose-p:text-slate-400 p-4 rounded-lg prose-h4:text-slate-300"
                    style={{ backdropFilter: "blur(10px)" }}
                >
                    <h3 className="flex flex-row justify-between items-center">
                        {selectedLang.name}
                        <button
                            onClick={() => setSelectedLang(null)}
                            className="rounded-lg text-slate-400"
                        >
                            <FaTimes />
                        </button>
                    </h3>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: selectedLang.description,
                        }}
                    />
                    <h4>Related Projects</h4>
                    <div className="flex flex-col gap-4 prose prose-h5:my-0 prose-p:my-0 prose-p:text-slate-400 prose-h5:text-slate-300 prose-a:text-primary-400 lg:hover:prose-a:text-primary-200 prose-a:no-underline">
                        {selectedLang.projects.map((p) => (
                            <div
                                key={`lang-projects-${p.title}`}
                                className="flex flex-col p-4 rounded-lg bg-slate-700/30"
                            >
                                <h5>{p.title}</h5>
                                <p>{p.summary}</p>
                                <div className="w-full flex flex-row items-center gap-4">
                                    {p.githubLink && (
                                        <a href={p.githubLink}>GitHub</a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ProgrammingLanguages;
