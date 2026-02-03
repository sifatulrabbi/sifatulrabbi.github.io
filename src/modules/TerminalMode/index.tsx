import React from "react";
import { Link } from "react-router-dom";
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

          {/* Right: AI Chat link */}
          <Link
            to="/ai-chat"
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-terminal-surface border border-terminal-border-dim hover:border-terminal-accent hover:text-terminal-accent transition-colors text-xs sm:text-sm text-terminal-primary"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <span className="hidden sm:inline">AI Chat</span>
          </Link>
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
