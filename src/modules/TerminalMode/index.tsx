import React from "react";
import TerminalBody from "./components/TerminalBody";
import { FiX, FiMinus, FiMaximize2 } from "react-icons/fi";
import { useTerminalMode } from "./terminalModeContext";

type Props = {
    closeTerminal: () => void;
};

const TerminalModePage: React.FC<Props> = ({ closeTerminal }) => {
    const { currentDir } = useTerminalMode();

    return (
        <div className="w-full min-h-screen bg-terminal-background flex items-center justify-center p-4">
            {/* Terminal Window Container */}
            <div className="w-full max-w-6xl h-[85vh] bg-terminal-surface border-2 border-terminal-border rounded-lg overflow-hidden shadow-2xl flex flex-col">
                {/* Terminal Header */}
                <div className="bg-terminal-border px-4 py-3 flex items-center justify-between border-b border-terminal-border-dim">
                    {/* Left: Window controls */}
                    <div className="flex gap-2">
                        <button
                            onClick={closeTerminal}
                            className="w-3 h-3 rounded-full bg-terminal-error hover:brightness-110 transition-all"
                            title="Close"
                        />
                        <button className="w-3 h-3 rounded-full bg-terminal-warning hover:brightness-110 transition-all" title="Minimize" />
                        <button className="w-3 h-3 rounded-full bg-terminal-success hover:brightness-110 transition-all" title="Maximize" />
                    </div>

                    {/* Center: Terminal title */}
                    <div className="flex-1 text-center">
                        <span className="text-terminal-secondary text-xs sm:text-sm font-mono">
                            {currentDir.pwd || "~/portfolio"}
                        </span>
                    </div>

                    {/* Right: Action buttons */}
                    <div className="flex gap-2">
                        <button
                            className="text-terminal-secondary hover:text-terminal-primary transition-colors p-1"
                            title="Minimize"
                        >
                            <FiMinus size={14} />
                        </button>
                        <button
                            className="text-terminal-secondary hover:text-terminal-primary transition-colors p-1"
                            title="Maximize"
                        >
                            <FiMaximize2 size={14} />
                        </button>
                        <button
                            onClick={closeTerminal}
                            className="text-terminal-secondary hover:text-terminal-error transition-colors p-1"
                            title="Close"
                        >
                            <FiX size={14} />
                        </button>
                    </div>
                </div>

                {/* Terminal Content Area */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                    <TerminalBody />
                </div>
            </div>
        </div>
    );
};

export default TerminalModePage;
