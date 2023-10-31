import React from "react";
import { FaArrowRight, FaMinus } from "react-icons/fa";
import { AnimatedText } from "@/components";

const experienceData = [
    {
        companyName: "HelloScribe A.I",
        companyLocation: "Florida, USA",
        companyUrl: "https://helloscribe.ai",
        position: "Full Stack Engineer",
        from: "Nov 2022",
        till: "Present",
        current: true,
        jobType: "Remote",
        employmentType: "Contract",
        description: [
            "Gained 120% more users and 40% more monthly active users within 2 months by leading the development process of HelloScribe AI v2.",
            "Ensured 100% login success and resolved security issues by adding Auth0 and refactoring the authentication flow, which also ensured a smooth transition for the existing users.",
            "Improved the app's performance by an average of 300% through careful refactoring, rewriting, and restructuring.",
            "Enhanced team efficiency by reorganizing and optimizing the code base, maintaining clear and effective communication, and developing scripts for testing, identifying, and automating the debugging process.",
        ],
        techStack: [
            "JavaScript",
            "Python",
            "Node.js",
            "Express.js",
            "Vue.js",
            "MongoDB",
        ],
    },
    {
        companyName: "X-Booker",
        companyLocation: "Chessington, UK",
        companyUrl: "https://x-booker.co.uk",
        position: "Full Stack Engineer",
        from: "Apr 2022",
        till: "Present",
        current: true,
        jobType: "Remote",
        employmentType: "Contract",
        description: [
            "<strong>Led</strong> the development process of the X-Booker SaaS platform by designing and developing multiple backend and frontend applications, ensuring security, and scalability.",
            "<strong>Mentored and assisted</strong> junior developers in understanding the platform, developing new features, and ensuring a smooth onboarding process.",
            "Built a reliable <strong>CI/CD pipeline</strong> using Github Actions, Docker, and Kubernetes, resulting in a faster and more dependable deployment process.",
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
                    Started my professional journey from February 2022
                </small>
            </div>

            <br />
            <br />

            {experienceData.map((d) => (
                <div
                    key={d.companyName}
                    className="w-full prose max-w-full prose-h4:text-slate-300 prose-h4:font-medium prose-h4:my-2 text-slate-400 prose-strong:text-slate-400"
                >
                    <small className="flex flex-row items-center gap-1 text-slate-500 font-mono">
                        {d.from} <FaMinus className="text-xs" /> {d.till}
                    </small>
                    <a href={d.companyUrl} target="_blank" rel="noreferrer">
                        <h4 className="flex items-center gap-1">
                            {d.companyName}
                            <div className="rounded-full bg-slate-300 w-1 h-1" />
                            <span className="font-normal text-sm">
                                {d.companyLocation}
                            </span>
                            <FaArrowRight className="text-xs -rotate-45" />
                        </h4>
                    </a>
                    <div className="text-primary-400">{d.position}</div>
                    <ul className="text-slate-400">
                        {d.description.map((desc) => (
                            <li
                                key={desc}
                                dangerouslySetInnerHTML={{ __html: desc }}
                            />
                        ))}
                    </ul>
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
                    <br />
                    <br />
                </div>
            ))}
        </section>
    );
};

export default ExperiencesSection;
