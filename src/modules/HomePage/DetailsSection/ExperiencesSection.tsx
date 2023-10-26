import React from "react";

const ExperiencesSection: React.FC = () => {
    return (
        <section className="w-full flex flex-col justify-start items-start py-6 px-8 md:ml-[200px] lg:ml-[250px]">
            <div className="w-full prose max-w-full prose-h1:text-slate-300 prose-h1:font-bold">
                <h1>Experiences</h1>
                <blockquote className="text-slate-400 text-sm">
                    Started my professional journey from February 2022
                </blockquote>
            </div>

            <br />
            <br />

            <div className="w-full prose max-w-full prose-h3:text-slate-300 prose-h3:mb-0">
                <h3 className="w-full flex flex-row justify-between">
                    HelloScribe A.I
                    <span className="inline-block text-sm font-normal">
                        Florida, USA
                    </span>
                </h3>
                <p className="text-slate-300 text-sm flex flex-row w-full justify-between">
                    <span className="font-mono text-primary-400">
                        Full Stack Engineer
                    </span>
                    <span>November 2022 to Present</span>
                </p>
            </div>
        </section>
    );
};

export default ExperiencesSection;
