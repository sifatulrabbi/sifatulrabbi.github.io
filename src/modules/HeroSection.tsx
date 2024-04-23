import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { AnimatedText } from "@/components";

const HeroSection: React.FC<{ setShowHero: (v: boolean) => void }> = ({
    setShowHero,
}) => {
    const handleShowDetails = () => setShowHero(false);

    return (
        <div className="w-full h-full p-6 flex flex-col justify-center lg:max-w-[60%] mx-auto gap-10">
            <div className="w-full flex flex-col mx-auto gap-6 relative">
                <img
                    src="/me.png"
                    height="100px"
                    width="100px"
                    className="rounded-full"
                />
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
                    Full Stack Developer
                </h4>
                <p className="prose prose-invert prose-slate max-w-full">
                    I build web and server applications, write code to convert
                    business logics into softwares. I like exploring the tech
                    world. Currently focusing on building LLM based
                    applications, and becoming better in designing softwares.
                </p>
            </div>

            <div className="flex flex-row items-center gap-4">
                <button
                    onClick={handleShowDetails}
                    className="text-slate-300 rounded-full py-4 h-[50px] w-[100px] border border-slate-400 lg:hover:text-primary-400 lg:hover:border-primary-400 transition-colors duration-300 flex flex-row items-center justify-start overflow-hidden relative"
                >
                    <FaChevronRight className="hero-enter-btn" />
                    <FaChevronRight
                        className="hero-enter-btn"
                        style={{ animationDelay: "0.4s" }}
                    />
                    <FaChevronRight
                        className="hero-enter-btn"
                        style={{ animationDelay: "0.8s" }}
                    />
                    <FaChevronRight
                        className="hero-enter-btn"
                        style={{ animationDelay: "1.2s" }}
                    />
                    <FaChevronRight
                        className="hero-enter-btn"
                        style={{ animationDelay: "1.6s" }}
                    />
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
