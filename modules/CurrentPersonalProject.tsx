import React from "react";
import { BsGear } from "react-icons/bs";
import {
    SiDocker,
    SiGithub,
    SiGo,
    SiPostgresql,
    SiPython,
    SiReact,
    SiTypescript,
} from "react-icons/si";

type Props = {
    className?: string;
};

const CurrentPersonalProject: React.FC<Props> = ({ className = "" }) => {
    return (
        <section className={"theme-styles gap-4 " + className}>
            <h4
                className={`opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.5s_forwards] flex items-center gap-4`}
            >
                I like building stuff
                <BsGear className="animate-[spin_3s_infinite_linear]" />
            </h4>
            <div className="translate-y-4 opacity-0 animate-[textSlideUp_0.5s_ease_0.6s_forwards]">
                Currently working on a personal project. Which is an AI powered
                chat app. That has features similar to Slack. But has a built in
                AI that can enhance your conversational prowess without exposing
                your personal data to the LLM.
                <br />
                <a
                    href="https://github.com/sifatulrabbi/ports"
                    target="_blank"
                    rel="noreferrer"
                    className="font-primary underline inline-flex items-center gap-2 mt-2 lg:hover:text-primary"
                >
                    Check out the Repository
                    <SiGithub />
                </a>
            </div>
            <h5 className="translate-y-4 opacity-0 animate-[textSlideUp_0.5s_ease_0.7s_forwards]">
                Tech stack used
            </h5>
            <div className="flex justify-start items-center gap-4">
                <SiGo className="text-2xl text-black dark:text-white opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.7s_forwards]" />
                <SiPython className="text-2xl text-black dark:text-white opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.75s_forwards]" />
                <SiTypescript className="text-2xl text-black dark:text-white opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.8s_forwards]" />
                <SiReact className="text-2xl text-black dark:text-white opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.85s_forwards]" />
                <SiPostgresql className="text-2xl text-black dark:text-white opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.9s_forwards]" />
                <SiDocker className="text-2xl text-black dark:text-white opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.1s_forwards]" />
            </div>
        </section>
    );
};

export default CurrentPersonalProject;
