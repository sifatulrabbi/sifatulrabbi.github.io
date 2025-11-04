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
        name: "TypeScript",
        description: "",
        projects: [],
    },
    {
        name: "JavaScript",
        description: "",
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
        name: "Go",
        description: "",
        projects: [],
    },
    {
        name: "Python",
        description: "",
        projects: [],
    },
];

const ProgrammingLanguages: React.FC = () => {
    const [selectedLang, setSelectedLang] = useState<Language | null>(null);

    return (
        <>
            <div className="w-full prose prose-invert prose-slate max-w-5xl prose-h3:text-slate-100 prose-h3:my-2 prose-strong:text-slate-300">
                <h3 className="text-2xl font-bold">Programming Languages</h3>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3">
                    {languages.map((l, index) => (
                        <div
                            key={`skills-language-${l.name}`}
                            onClick={() => setSelectedLang(l)}
                            className="glass-card flex justify-center items-center h-[60px] px-4 cursor-pointer glass-hover group animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <span className="text-slate-200 font-medium group-hover:gradient-text transition-colors duration-300">
                                {l.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {selectedLang && (
                <div
                    onClick={() => setSelectedLang(null)}
                    className="fixed top-0 right-0 left-0 bottom-0 z-[100] bg-black/50 backdrop-blur-md animate-fade-in"
                    style={{
                        pointerEvents: "all",
                    }}
                />
            )}
            {selectedLang && (
                <div className="fixed z-[100] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 prose prose-slate prose-invert max-w-[90vw] w-full md:max-w-2xl max-h-[80vh] overflow-y-auto glass-card p-6 md:p-8 prose-h3:text-slate-100 prose-h4:text-slate-200 animate-scale-in">
                    <h3 className="flex flex-row justify-between items-center text-2xl gradient-text">
                        {selectedLang.name}
                        <button
                            onClick={() => setSelectedLang(null)}
                            className="rounded-lg text-slate-300 hover:text-primary-400 hover:bg-slate-700/50 p-2 transition-all duration-300"
                        >
                            <FaTimes />
                        </button>
                    </h3>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: selectedLang.description,
                        }}
                        className="text-slate-300"
                    />
                    <h4 className="text-xl">Related Projects</h4>
                    <div className="flex flex-col gap-4 prose prose-slate prose-invert prose-p:my-0 prose-a:text-primary-400 lg:hover:prose-a:text-primary-300 prose-a:no-underline">
                        {selectedLang.projects.map((p) => (
                            <div
                                key={`lang-projects-${p.title}`}
                                className="flex flex-col p-5 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-primary-500/30 transition-colors duration-300"
                            >
                                <h5 className="text-lg text-slate-100">{p.title}</h5>
                                <p className="text-slate-300">{p.summary}</p>
                                <div className="w-full flex flex-row items-center gap-4">
                                    {p.githubLink && (
                                        <a href={p.githubLink} className="btn-outline-modern text-xs py-2">GitHub</a>
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
