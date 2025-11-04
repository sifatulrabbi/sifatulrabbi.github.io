import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiClick } from "react-icons/gi";
import { TbClick } from "react-icons/tb";
import { AnimatedText } from "@/components";

type Props = {
    setRevealUnderneath?: (v: boolean) => void;
    onEnter?: () => void;
};

const aboutmeWords =
    "I love building software and collaborating with awesome people. I often use Python, TypeScript, or Go to hack out most of my curiosities on Neovim. I enjoy exploring the tech and generative AI world. My intuitions and experience in full-stack development makes me more product oriented and enables me to plan and deploy features from scratch.".split(
        "",
    );
const aboutMeExt = "";

const HeroSection: React.FC<Props> = ({ setRevealUnderneath, onEnter }) => {
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

    const handleShowDetails = () => {
        if (onEnter) return onEnter();
    };

    return (
        <div className="w-full h-full p-6 flex flex-col justify-center max-w-5xl mx-auto gap-12 animate-fade-in">
            <div className="w-full flex flex-col mx-auto gap-8 relative">
                <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] overflow-hidden flex items-center justify-center rounded-full transition-all duration-300 ring-4 ring-primary-500/20 hover:ring-primary-400/40 shadow-glow">
                    <img src="/me.jpg" className="object-cover object-top" />
                </div>
                <h1 className="text-slate-100 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl selection:bg-transparent selection:text-primary-400 leading-tight">
                    {"Sifatul Rabbi".split("").map((str, i) => (
                        <AnimatedText
                            key={"first-name-" + str + i}
                            str={str}
                            idx={i}
                        />
                    ))}
                </h1>
                <h4 className="gradient-text font-mono text-2xl md:text-3xl font-semibold">
                    Full Stack {"&"} AI Developer
                </h4>
                <p className="prose prose-invert prose-slate max-w-full relative text-base md:text-xl leading-relaxed text-slate-300">
                    <span className="absolute">
                        <span
                            dangerouslySetInnerHTML={{ __html: aboutme }}
                        ></span>
                        <span className="inline-block mb-[-5px] h-6 w-2.5 bg-gradient-to-r from-primary-400 to-accent-violet cursor-blink"></span>
                    </span>
                    <span
                        className="opacity-0 pointer-events-none invisible"
                        dangerouslySetInnerHTML={{
                            __html: aboutmeWords.join("") + aboutMeExt,
                        }}
                    ></span>
                </p>
            </div>

            <div className="flex flex-col items-center gap-6">
                <button
                    onClick={handleShowDetails}
                    className="z-[10] text-slate-200 rounded-2xl py-4 h-[60px] w-full lg:hover:text-primary-300 transition-all duration-300 flex flex-row items-center justify-start overflow-hidden relative group"
                >
                    <div className="absolute left-0 right-0 h-0 border-t border-dashed border-slate-600 group-hover:border-primary-500/50 transition-colors duration-300"></div>
                    <p
                        onMouseEnter={() => {
                            setHoveringEnter(true);
                            setRevealUnderneath?.(true);
                        }}
                        onMouseLeave={() => {
                            setHoveringEnter(false);
                            setRevealUnderneath?.(false);
                        }}
                        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 glass-card flex gap-3 items-center min-w-max px-6 py-3 rounded-xl font-mono font-medium group-hover:shadow-glow transition-all duration-300"
                    >
                        <span
                            className={`text-lg transition-colors duration-300 ${
                                hoveringEnter
                                    ? "gradient-text"
                                    : "text-primary-400"
                            }`}
                        >
                            Enter Portfolio
                        </span>
                        <GiClick
                            className={`text-xl text-slate-300 lg:hidden lg:invisible`}
                        />
                        <TbClick
                            className={`text-2xl text-primary-400 hidden invisible lg:visible lg:inline transition-transform duration-300 ${
                                hoveringEnter ? "scale-125 rotate-12" : "scale-100"
                            }`}
                        />
                    </p>
                </button>

                <Link
                    to="/terminal"
                    className="mt-2 text-slate-400 rounded-xl px-6 py-3 lg:hover:text-primary-400 lg:hover:border-primary-400 lg:hover:shadow-glow transition-all duration-300 flex flex-row items-center justify-center overflow-hidden relative font-mono text-sm border-2 border-dashed border-slate-600 hover:scale-105 active:scale-95 bg-slate-900/50 backdrop-blur-sm"
                >
                    enter_terminal_mode()
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;
