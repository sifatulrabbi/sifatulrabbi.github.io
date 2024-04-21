import React from "react";
import { FaArrowRight, FaMinus } from "react-icons/fa";
import { AnimatedText } from "@/components";

const experienceData = [
    {
        companyName: "HelloScribe A.I",
        companyLocation: "Florida, USA",
        companyUrl: "https://helloscribe.ai",
        positions: [
            {
                position: "Co-Founder & Lead Software Developer",
                from: "Feb 2024",
                till: "Present",
                current: true,
                jobType: "Remote",
                employmentType: "Contract",
                description: [
                    "Focused on building and designing innovative features by leveraging AI technologies to simplify and enhance everyday life.",
                    "Leading the development process and the team to implement new features, architect the system, and improve the quality of the services.",
                ],
                techStack: [
                    "Python",
                    "JavaScript",
                    "Node.js",
                    "Go",
                    "Express.js",
                    "Vue.js",
                    "MongoDB",
                ],
            },
            {
                position: "Full stack Developer",
                from: "Nov 2022",
                till: "Feb 2024",
                current: false,
                jobType: "Remote",
                employmentType: "Contract",
                description: [
                    "Leading the development process and the team to implement new features, architect the system, and improve the quality of the services.",
                    "3x the system performance by restructuring the apps to utilize Async and concurrency, refactoring the frontend app to render effectively, and implementing various principles and best practices across the system.",
                    "Streamlined the development process of HelloScribe AI v2 and ensured a 100% login success rate which gained 120% more users and 40% more monthly active users.",
                    "Playing a key role in building and designing a scalable and robust system.",
                ],
                techStack: [
                    "Python",
                    "JavaScript",
                    "Node.js",
                    "Go",
                    "Express.js",
                    "Vue.js",
                    "MongoDB",
                ],
            },
        ],
    },
    {
        companyName: "X-Booker",
        companyLocation: "Chessington, UK",
        companyUrl: "https://x-booker.co.uk",
        positions: [
            {
                position: "Lead Software Developer",
                from: "Apr 2022",
                till: "Feb 2024",
                current: false,
                jobType: "Remote",
                employmentType: "Contract",
                description: [
                    "Leading the development process and team to design and build the X-Booker system to establish a firm foundation for the SaaS.",
                    "Mentored and assisted freshers in understanding the platform, developing new features, and ensuring a smooth onboarding process.",
                    "Utilizing in-depth software development skills to build various automation as well as integrate different APIs and services with X-Booker.",
                    "Built a reliable CI/CD pipeline using Github Actions, Docker, and Kubernetes, resulting in a faster and more dependable deployment process.",
                ],
                techStack: [
                    "TypeScript",
                    "Python",
                    "Node.js",
                    "Next.js",
                    "GCP",
                    "Docker",
                    "Redis",
                    "Kubernetes",
                ],
            },
        ],
    },
];

const ExperiencesSection: React.FC = () => {
    return (
        <section className="w-full min-h-max flex flex-col justify-start items-start py-6 px-8 md:ml-[200px] lg:ml-[250px] mt-[50px]">
            <div className="w-full prose max-w-full prose-h1:text-slate-300 prose-h1:font-bold">
                <h1>
                    {"Experiences".split("").map((l, i) => (
                        <AnimatedText
                            key={`experiences-${l}-${i}`}
                            str={l}
                            idx={i}
                        />
                    ))}
                </h1>
                <small className="text-slate-400 text-sm">
                    I'm a versatile engineer with expertise in developing APIs,
                    WebApps, and Microservices.
                </small>
            </div>

            <br />
            <br />

            {experienceData.map((d) => (
                <div
                    key={d.companyName}
                    className="w-full prose max-w-full prose-h4:text-slate-300 prose-h4:font-medium prose-h4:my-2 text-slate-400 prose-strong:text-slate-400 flex flex-col border-b-2 border-slate-700 last:border-transparent mb-8"
                >
                    <a
                        href={d.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                    >
                        <h4 className="flex items-center gap-1 hover:underline">
                            {d.companyName}
                            <div className="rounded-full bg-slate-300 w-1 h-1" />
                            <span className="font-normal text-sm">
                                {d.companyLocation}
                            </span>
                            <FaArrowRight className="text-xs -rotate-45" />
                        </h4>
                    </a>
                    {d.positions.map((p) => (
                        <div
                            key={p.position + p.from + p.till}
                            className="flex flex-col"
                        >
                            <small className="flex flex-row items-center gap-1 text-slate-500 font-mono">
                                {p.from} <FaMinus className="text-xs" />{" "}
                                {p.till}
                            </small>
                            <div
                                className={`text-primary-400
                                ${
                                    p.current
                                        ? "text-primary-200 font-bold"
                                        : ""
                                }`}
                            >
                                {p.position}
                            </div>
                            <ul className="text-slate-400 mt-0">
                                {p.description.map((desc) => (
                                    <li
                                        key={desc}
                                        dangerouslySetInnerHTML={{
                                            __html: desc,
                                        }}
                                    />
                                ))}
                            </ul>
                            <div className="w-full flex flex-row items-start justify-start flex-wrap gap-2">
                                {p.techStack.map((t) => (
                                    <span
                                        key={`tech-stack-${t}`}
                                        className="inline-block text-xs px-3 py-1 rounded-full bg-slate-800"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <br />
                        </div>
                    ))}
                </div>
            ))}
        </section>
    );
};

export default ExperiencesSection;
