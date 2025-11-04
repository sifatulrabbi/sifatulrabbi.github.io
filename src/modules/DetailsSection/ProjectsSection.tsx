import React from "react";
import { AnimatedText } from "@/components";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { projectsData } from "@/assets/data";

const ProjectsSection: React.FC = () => {
    return (
        <section className="w-full gap-16 flex flex-col justify-start items-start 2xl:items-center animate-fade-in">
            <div className="w-full prose prose-invert prose-slate max-w-5xl prose-h1:text-slate-100 prose-h1:font-bold prose-p:text-slate-400 prose-p:text-lg">
                <h1>
                    {"Projects".split("").map((l, i) => (
                        <AnimatedText
                            key={`projects-header-${l}`}
                            str={l}
                            idx={i}
                        />
                    ))}
                </h1>
                <p>
                    I like exploring and learning new things. From my
                    perspective building projects is the best way to learn all
                    the ins and outs of a new tool/technology.
                </p>
            </div>

            {projectsData.map((d, index) => (
                <div
                    key={d.title}
                    className="w-full prose prose-invert prose-slate max-w-5xl prose-h3:text-slate-100 prose-h3:my-1 prose-strong:text-slate-200 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="glass-card p-6 md:p-8 glass-hover">
                        <small className="flex flex-row items-center gap-2 text-primary-400 font-mono font-medium mb-2">
                            <span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span>
                            {d.projectType}
                        </small>
                        <h3 className="flex items-center gap-1 text-2xl font-bold text-slate-100">{d.title}</h3>
                        <p
                            dangerouslySetInnerHTML={{ __html: d.summary }}
                            className="my-4 text-slate-300 leading-relaxed"
                        />
                        <div className="w-full flex flex-row items-start justify-start flex-wrap gap-2 mb-6">
                            {d.techStack.map((t) => (
                                <span
                                    key={`tech-stack-${t}`}
                                    className="tag-modern"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="w-full flex flex-row items-center gap-3 mt-6">
                            {d.githubLink && (
                                <a
                                    href={d.githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-modern text-sm text-white flex items-center gap-2 no-underline shadow-glow"
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
                                    className="btn-outline-modern text-sm flex items-center gap-2 no-underline"
                                >
                                    Live link
                                    <FaArrowRight className="text-sm -rotate-45" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProjectsSection;
