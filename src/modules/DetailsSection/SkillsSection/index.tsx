import React from "react";
import { AnimatedText } from "@/components";
import ProgrammingLanguages from "./ProgrammingLanguages";
import Frameworks from "./Frameworks";
import Tools from "./Tools";
import Databases from "./Databases";
import Concepts from "./Concepts";

const SkillsSection: React.FC = () => {
    return (
        <section className="w-full gap-16 flex flex-col justify-start items-start 2xl:items-center animate-fade-in">
            <div className="w-full prose prose-invert prose-slate max-w-5xl prose-h1:text-slate-100 prose-h1:font-bold">
                <h1>
                    {"Skills & Interests".split("").map((l, i) => (
                        <AnimatedText
                            key={`skills-n-interests-${l}-${i}`}
                            str={l}
                            idx={i}
                        />
                    ))}
                </h1>
                <p className="text-xl text-slate-400">
                    I like exploring and learning more about tech and software
                    development.
                </p>
            </div>
            <ProgrammingLanguages />
            <Concepts />
            <Databases />
            <Frameworks />
            <Tools />
        </section>
    );
};

export default SkillsSection;
