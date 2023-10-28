import React from "react";
import ProgrammingLanguages from "./ProgrammingLanguages";
import Frameworks from "./Frameworks";
import Tools from "./Tools";
import Databases from "./Databases";
import Concepts from "./Concepts";

const SkillsSection: React.FC = () => {
    return (
        <section className="w-full min-h-max flex flex-col justify-start items-start py-6 px-8 md:ml-[200px] lg:ml-[250px] mt-[50px]">
            <div className="w-full prose max-w-full prose-h1:text-slate-300 prose-h1:font-bold">
                <h1>Skills & Interests</h1>
                <small className="text-slate-400 text-sm">
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
