import React, { useEffect, useState } from "react";
import DetailsSection from "@/modules/DetailsSection";
import TerminalModePage from "@/modules/TerminalMode";
import TerminalModeProvider from "@/modules/TerminalMode/TerminalModeProvider";

const PortfolioLayout: React.FC = () => {
    const [terminalMode, setTerminalMode] = useState(false);

    useEffect(() => {
        document.body.setAttribute("data-theme", "dark");
        document.body.style.overflow = "auto";
    }, []);

    return (
        <main
            className={`w-full min-h-max flex flex-col justify-start items-start 2xl:items-center 
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
