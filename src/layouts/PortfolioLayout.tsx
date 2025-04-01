import React, { useEffect, useState } from "react";
import { HeroSection } from "@/modules";
import DetailsSection from "@/modules/DetailsSection";
import TerminalModePage from "@/modules/TerminalMode";
import TerminalModeProvider from "@/modules/TerminalMode/TerminalModeProvider";

const PortfolioLayout: React.FC = () => {
    const [showHero, setShowHero] = useState(true);
    const [terminalMode, setTerminalMode] = useState(false);
    const [revealUnderneath, setRevealUnderneath] = useState(false);

    useEffect(() => {
        document.body.setAttribute("data-theme", "dark");
        document.body.style.overflow = showHero ? "hidden" : "auto";
    }, [showHero]);

    return (
        <main
            className={`w-full min-h-max flex flex-col justify-start items-start 2xl:items-center 
            ${!terminalMode && showHero ? "max-h-[100vh]" : ""} 
            ${
                !terminalMode
                    ? "py-6 px-8 lg:pl-[332px] 2xl:pl-8 mt-[50px] gap-12"
                    : ""
            }`}
        >
            {!terminalMode && (
                <DetailsSection
                    enterTerminalMode={() => setTerminalMode(true)}
                />
            )}
            {!terminalMode && (
                <div
                    className={`z-[100] w-full fixed top-0 right-0 left-0 bottom-0 flex flex-col justify-start items-start transition-[transform,background-color] duration-500 ease-in-out bg-gray-950 
                        ${revealUnderneath ? "md:bg-gray-950/60" : ""} 
                        ${showHero ? "backdrop-blur-sm" : "translate-x-full"}`}
                >
                    <HeroSection
                        setShowHero={setShowHero}
                        setTerminalMode={setTerminalMode}
                        setRevealUnderneath={setRevealUnderneath}
                    />
                </div>
            )}
            <TerminalModeProvider
                exitTerminalMode={() => setTerminalMode(false)}
            >
                {terminalMode && (
                    <TerminalModePage
                        closeTerminal={() => setTerminalMode(false)}
                    />
                )}
            </TerminalModeProvider>
        </main>
    );
};

export default PortfolioLayout;
