import React from "react";
import TerminalBodyNew from "./components/TerminalBodyNew";
import { useTerminalMode } from "./context/terminalModeContext";

type Props = {
    closeTerminal?: () => void;
};

const TerminalModePage: React.FC<Props> = () => {
    const { currentDir } = useTerminalMode();

    return (
        <div className="w-full min-h-screen bg-terminal-background flex items-center justify-center p-4">
            {/* Terminal Window Container */}
            <div className="w-full max-w-6xl h-[95vh] md:h-[90vh] bg-terminal-surface border-2 border-terminal-border rounded-lg overflow-hidden shadow-2xl flex flex-col">
                {/* Terminal Header */}
                <div className="bg-terminal-border px-4 py-2 flex items-center justify-between border-b border-terminal-border-dim">
                    {/* Left: Window controls */}
                    <div className="hidden invisible md:visible md:flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-terminal-error" />
                        <div className="w-3 h-3 rounded-full bg-terminal-warning" />
                        <div className="w-3 h-3 rounded-full bg-terminal-success" />
                    </div>

                    {/* Center: Terminal title */}
                    <div className="flex-1 md:ml-8">
                        <span className="text-terminal-secondary text-xs sm:text-sm font-mono">
                            {currentDir.pwd || "~/portfolio"}
                        </span>
                    </div>
                </div>

                {/* Terminal Content Area */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 terminal-scrollbar">
                    <TerminalBodyNew />
                </div>
            </div>
        </div>
    );
};

export default TerminalModePage;
