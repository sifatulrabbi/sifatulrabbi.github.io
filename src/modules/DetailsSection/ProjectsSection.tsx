import React from "react";
import { AnimatedText } from "@/components";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { projectsData } from "@/assets/data";

const ProjectsSection: React.FC = () => {
    return (
        <section className="w-full gap-12 flex flex-col justify-start items-start 2xl:items-center">
            <div className="w-full prose prose-invert prose-slate max-w-4xl prose-h1:text-slate-300 prose-h1:font-bold">
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

            {projectsData.map((d) => (
                <div
                    key={d.title}
                    className="w-full prose prose-invert prose-slate max-w-4xl prose-h3:text-slate-300 prose-h3:my-1 prose-strong:text-slate-300"
                >
                    <small className="flex flex-row items-center gap-1 text-slate-400 font-mono">
                        {d.projectType}
                    </small>
                    <h3 className="flex items-center gap-1">{d.title}</h3>
                    <p
                        dangerouslySetInnerHTML={{ __html: d.summary }}
                        className="my-4"
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
                    <div className="w-full flex flex-row items-center gap-2 mt-6">
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
                </div>
            ))}
        </section>
    );
};

export default ProjectsSection;
