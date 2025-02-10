import React, { useEffect, useState } from "react";
import { GiClick } from "react-icons/gi";
import { TbClick } from "react-icons/tb";
import { AnimatedText } from "@/components";

type Props = {
    setShowHero: (v: boolean) => void;
    setTerminalMode: (v: boolean) => void;
};

// const aboutmeWords =
//     "I discovered my love for coding and building things while modding GTA 5 with Lua and XML to add new 'Cars' and 'Peds'. Coding and crafting softwares felt like having superpowers so started diving deep. As a Full-stack Engineer, I've led 2 SaaS startups in the past 3 years, focusing on translating business requirements in to applications. Building and designing backend systems excites me the most. ".split(
//         "",
//     );
// I've helped rebuild HelloScribe AI's entire system in a more secure and scalable way.
const aboutmeWords =
    "I love building software and collaborating with awesome people. I often use Go, Python, or TypeScript to hack out most of my curiosities on Neovim. I enjoy exploring the tech world and practicing system design concepts, which makes me more focused on the overall system.".split(
        "",
    );
const aboutMeExt = "";

const HeroSection: React.FC<Props> = ({ setShowHero, setTerminalMode }) => {
    const [hoveringEnter, setHoveringEnter] = useState(false);
    const [aboutme, setAboutme] = useState("");

    useEffect(() => {
        (async () => {
            let buf = "";
            await new Promise((r) => setTimeout(r, 1000));
            for (let i = 0; i < aboutmeWords.length; i++) {
                buf += aboutmeWords[i];
                await new Promise((r) => setTimeout(r, 5));
                setAboutme(buf);
            }
            setAboutme(buf + aboutMeExt);
        })();
    }, []);

    const handleShowDetails = () => setShowHero(false);

    return (
        <div className="w-full h-full p-6 flex flex-col justify-center max-w-4xl mx-auto gap-10">
            <div className="w-full flex flex-col mx-auto gap-6 relative">
                <div className="w-[200px] h-[200px] overflow-hidden flex items-center justify-center rounded-full">
                    <img
                        src="/me-sitting-on-chair-tshirt.jpg"
                        height="300px"
                        width="300px"
                        className="bg-cover"
                    />
                </div>
                <h1 className="text-slate-300 font-bold text-3xl sm:text-4xl md:text-5xl selection:bg-transparent selection:text-primary-400">
                    {"Sifatul Rabbi".split("").map((str, i) => (
                        <AnimatedText
                            key={"first-name-" + str + i}
                            str={str}
                            idx={i}
                        />
                    ))}
                </h1>
                <h4 className="text-primary-400 font-mono text-xl md:text-2xl">
                    Full Stack {"&"} AI Developer
                </h4>
                <p className="prose prose-invert prose-slate max-w-full relative text-lg">
                    <span className="absolute">
                        <span
                            dangerouslySetInnerHTML={{ __html: aboutme }}
                        ></span>
                        <span className="inline-block mb-[-5px] h-5 w-2 bg-primary-400 cursor-blink"></span>
                    </span>
                    <span
                        className="opacity-0 pointer-events-none invisible"
                        dangerouslySetInnerHTML={{
                            __html: aboutmeWords.join("") + aboutMeExt,
                        }}
                    ></span>
                </p>
            </div>

            <div className="flex flex-col items-center gap-4">
                <button
                    onClick={handleShowDetails}
                    className="text-slate-300 rounded-full py-4 h-[50px] w-full lg:hover:text-primary-400 lg:hover:border-primary-400 transition-colors duration-300 flex flex-row items-center justify-start overflow-hidden relative"
                >
                    {/*<FaChevronRight className="hero-enter-btn" />*/}
                    <div className="absolute left-0 right-0 h-0 border-t border-dashed border-slate-600"></div>
                    <p
                        onMouseEnter={() => setHoveringEnter(true)}
                        onMouseLeave={() => setHoveringEnter(false)}
                        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-900 flex gap-2 items-center min-w-max px-4 py-2 rounded-lg font-mono"
                    >
                        <span
                            className={`${
                                hoveringEnter
                                    ? "text-primary-200"
                                    : "text-primary-400"
                            }`}
                        >
                            Enter Portfolio
                        </span>
                        <GiClick
                            className={`text-lg text-slate-300 lg:hidden lg:invisible`}
                        />
                        <TbClick
                            className={`text-xl text-slate-300 hidden invisible lg:visible lg:inline transition-transform ${
                                hoveringEnter ? "scale-150" : "scale-100"
                            }`}
                        />
                    </p>
                </button>

                <button
                    onClick={() => setTerminalMode(true)}
                    className="mt-4 text-slate-400 rounded-lg p-2 lg:hover:text-primary-400 lg:hover:border-primary-400 transition-transform duration-500 flex flex-row items-center justify-start overflow-hidden relative font-mono text-sm border border-dashed border-slate-400"
                >
                    enter_terminal_mode()
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
