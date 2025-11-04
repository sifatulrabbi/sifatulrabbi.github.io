import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { AnimatedText } from "@/components";
import { experienceSectionData } from "@/assets/data";

const ExperiencesSection: React.FC = () => {
    return (
        <section className="w-full gap-16 flex flex-col justify-start items-start 2xl:items-center animate-fade-in">
            <div className="w-full prose prose-invert prose-slate max-w-5xl prose-h1:font-bold prose-h1:text-slate-100">
                <h1>
                    {"Experiences".split("").map((l, i) => (
                        <AnimatedText
                            key={`experiences-${l}-${i}`}
                            str={l}
                            idx={i}
                        />
                    ))}
                </h1>
                <p className="text-lg text-slate-400">
                    I'm a versatile engineer with expertise in developing APIs,
                    WebApps, and Microservices.
                </p>
            </div>

            {experienceSectionData.map((d, index) => (
                <div
                    key={d.companyName}
                    className="w-full prose prose-slate prose-invert prose-h4:font-medium prose-h4:mt-0 flex flex-col mb-6 prose-a:no-underline max-w-5xl animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className="glass-card p-6 md:p-8 glass-hover group">
                        <span className="flex flex-row items-center gap-2 text-slate-400 text-sm font-medium mb-4">
                            <span className="inline-block min-w-max">
                                {d.employmentType}, {d.jobType}
                            </span>
                            <span className="text-primary-500">•</span>
                            <span className="inline-block min-w-max">
                                {d.from} - {d.till}
                            </span>
                        </span>
                        <h3
                            className={`my-2 text-2xl ${
                                d.current
                                    ? "gradient-text font-bold"
                                    : "font-semibold text-primary-400"
                            }`}
                        >
                            {d.position}
                        </h3>
                        <div className="flex flex-col p-5 rounded-xl bg-slate-900/50 border border-slate-700/50 mb-4 group-hover:border-primary-500/30 transition-colors duration-300">
                            <a
                                href={d.companyUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:no-underline group/link"
                            >
                                <h4 className="flex items-center gap-2 text-slate-200 group-hover/link:text-primary-400 transition-colors duration-200">
                                    {d.companyName}
                                    <div className="rounded-full bg-primary-500 w-1.5 h-1.5" />
                                    <span className="font-normal text-sm text-slate-400">
                                        {d.companyLocation}
                                    </span>
                                    <FaArrowRight className="text-xs -rotate-45 group-hover/link:rotate-0 transition-transform duration-300" />
                                </h4>
                            </a>
                            <p className="my-0 text-sm text-slate-300 leading-relaxed">
                                {d.companySummary}
                            </p>
                        </div>
                        <ul className="space-y-2 text-slate-300">
                            {d.description.map((desc) => (
                                <li
                                    key={desc}
                                    dangerouslySetInnerHTML={{
                                        __html: desc,
                                    }}
                                />
                            ))}
                        </ul>
                        <div className="w-full flex flex-row items-start justify-start flex-wrap gap-2 mt-6">
                            {d.techStack.map((t) => (
                                <span
                                    key={`tech-stack-${t}`}
                                    className="tag-modern"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ExperiencesSection;
