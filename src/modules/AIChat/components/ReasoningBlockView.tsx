import React, { useState } from "react";

interface ReasoningBlockViewProps {
  text: string;
}

const ReasoningBlockView: React.FC<ReasoningBlockViewProps> = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-terminal-border-dim rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-3 py-2 bg-terminal-surface-hover hover:bg-terminal-surface transition-colors text-left"
      >
        <span className="flex items-center gap-2 text-sm text-terminal-secondary">
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
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          Reasoning
        </span>
        <svg
          className={`w-4 h-4 text-terminal-secondary transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {expanded && (
        <div className="px-3 py-2 bg-terminal-surface/50">
          <pre className="text-xs text-terminal-secondary whitespace-pre-wrap font-mono">
            {text}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ReasoningBlockView;
