import React from "react";
import { FaChevronRight } from "react-icons/fa";

const ColorfulStrings: React.FC<{ str: string }> = ({ str }) => {
    const showHiddenSkill = () => {};

    return (
        <span
            onClick={showHiddenSkill}
            className="lg:hover:text-primary-400 duration-300 inline-block"
        >
            {str}
        </span>
    );
};

const HeroSection: React.FC<{ setShowHero: (v: boolean) => void }> = ({
    setShowHero,
}) => {
    const handleShowDetails = () => setShowHero(false);

    return (
        <div className="w-full h-full p-6 flex flex-col justify-center lg:max-w-[60%] mx-auto gap-10">
            <div className="w-full flex flex-col mx-auto gap-6">
                <img
                    src="/me.png"
                    height="100px"
                    width="100px"
                    className="rounded-full"
                />
                <h1 className="text-slate-300 font-bold text-3xl sm:text-4xl md:text-5xl selection:bg-transparent selection:text-primary-400">
                    {"Sifatul".split("").map((str, i) => (
                        <ColorfulStrings
                            key={"first-name-" + str + i}
                            str={str}
                        />
                    ))}{" "}
                    {/* <br className="md:hidden" /> */}
                    {"Rabbi".split("").map((str, i) => (
                        <ColorfulStrings
                            key={"last-name-letter-" + str + i}
                            str={str}
                        />
                    ))}
                </h1>
                <h4 className="text-primary-400 font-mono text-xl md:text-2xl">
                    Full Stack Engineer
                </h4>
                <p className="text-slate-400">
                    I'm a Full-stack Developer with a passion for building
                    seamless web and server applications. I am always motivated
                    to reach the next level and keep learning more about the web
                    and cloud computing.
                </p>
            </div>

            <div className="flex flex-row items-center gap-4">
                <button
                    onClick={handleShowDetails}
                    className="text-slate-300 rounded-full p-4 border border-slate-400 max-w-max lg:hover:text-primary-400 lg:hover:border-primary-400 transition-colors duration-300 animate-pulse hover:animate-none"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
