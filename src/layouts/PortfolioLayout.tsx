import React, { useState } from "react";
import { HeroSection } from "@/modules";
import DetailsSection from "@/modules/DetailsSection";
import TerminalModePage from "@/modules/TerminalMode";
import TerminalModeProvider from "@/modules/TerminalMode/TerminalModeProvider";

const PortfolioLayout: React.FC = () => {
    const [showHero, setShowHero] = useState(true);
    const [terminalMode, setTerminalMode] = useState(false);

    // <main
    //     className={`w-full max-w-full bg-gray-900 min-h-[100vh] overflow-hidden ${
    //         !terminalMode && showHero ? "max-h-[100vh]" : ""
    //     }`}
    // >
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
                    className={`z-[100] w-full fixed top-0 right-0 left-0 bottom-0 flex flex-col justify-start items-start bg-gray-950 transition-transform duration-500 ${
                        showHero ? "" : "translate-x-full"
                    }`}
                >
                    <HeroSection
                        setShowHero={setShowHero}
                        setTerminalMode={setTerminalMode}
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
