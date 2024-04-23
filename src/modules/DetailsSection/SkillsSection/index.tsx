import React from "react";
import { AnimatedText } from "@/components";
import ProgrammingLanguages from "./ProgrammingLanguages";
import Frameworks from "./Frameworks";
import Tools from "./Tools";
import Databases from "./Databases";
import Concepts from "./Concepts";

const SkillsSection: React.FC = () => {
    return (
        <section className="w-full min-h-max flex flex-col justify-start items-start py-6 px-8 md:ml-[200px] lg:ml-[250px] mt-[50px]">
            <div className="w-full prose prose-invert prose-slate max-w-full prose-h1:text-slate-300 prose-h1:font-bold">
                <h1>
                    {"Skills & Interests".split("").map((l, i) => (
                        <AnimatedText
                            key={`skills-n-interests-${l}-${i}`}
                            str={l}
                            idx={i}
                        />
                    ))}
                </h1>
                <small className="text-slate-300 text-sm">
                    I like exploring and learning more about tech and software
                    development.
                </small>
            </div>
            <br />
            <br />
            <ProgrammingLanguages />
            <br />
            <br />
            <Concepts />
            <br />
            <br />
            <Databases />
            <br />
            <br />
            <Frameworks />
            <br />
            <br />
            <Tools />
        </section>
    );
};

export default SkillsSection;
