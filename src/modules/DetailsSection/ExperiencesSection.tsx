import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { AnimatedText } from "@/components";
import { experienceSectionData } from "@/assets/data";

const ExperiencesSection: React.FC = () => {
    return (
        <section className="w-full gap-12 flex flex-col justify-start items-start 2xl:items-center">
            <div className="w-full prose prose-invert prose-slate max-w-4xl prose-h1:font-bold">
                <h1>
                    {"Experiences".split("").map((l, i) => (
                        <AnimatedText
                            key={`experiences-${l}-${i}`}
                            str={l}
                            idx={i}
                        />
                    ))}
                </h1>
                <small className="text-sm">
                    I'm an versatile engineer with expertise in developing APIs,
                    WebApps, and Microservices.
                </small>
            </div>

            {experienceSectionData.map((d) => (
                <div
                    key={d.companyName}
                    className="w-full prose prose-slate prose-invert prose-h4:font-medium prose-h4:mt-0 flex flex-col border-b-2 border-slate-800 last:border-transparent mb-8 prose-a:no-underline max-w-4xl"
                >
                    <span className="flex flex-row items-center gap-2 text-slate-400 text-sm">
                        <span className="inline-block min-w-max">
                            {d.employmentType}, {d.jobType}
                        </span>
                        {" | "}
                        <span className="inline-block min-w-max">
                            {d.from} - {d.till}
                        </span>
                    </span>
                    <h3
                        className={`my-2 ${
                            d.current
                                ? "text-primary-200 font-bold"
                                : "font-normal text-primary-400"
                        }`}
                    >
                        {d.position}
                    </h3>
                    <div className="flex flex-col p-4 rounded-lg bg-slate-900">
                        <a
                            href={d.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            <h4 className="flex items-center gap-1 hover:underline text-slate-300">
                                {d.companyName}
                                <div className="rounded-full bg-slate-300 w-1 h-1" />
                                <span className="font-normal text-sm">
                                    {d.companyLocation}
                                </span>
                                <FaArrowRight className="text-xs -rotate-45" />
                            </h4>
                        </a>
                        <p className="my-0 text-sm text-slate-300">
                            {d.companySummary}
                        </p>
                    </div>
                    <ul>
                        {d.description.map((desc) => (
                            <li
                                key={desc}
                                dangerouslySetInnerHTML={{
                                    __html: desc,
                                }}
                            />
                        ))}
                    </ul>
                    <div className="w-full flex flex-row items-start justify-start flex-wrap gap-2">
                        {d.techStack.map((t) => (
                            <span
                                key={`tech-stack-${t}`}
                                className="inline-block text-xs px-3 py-1 rounded-full bg-slate-900"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                    <br />
                </div>
            ))}
        </section>
    );
};

export default ExperiencesSection;
