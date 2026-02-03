import React from "react";
import type { ToolCall } from "@/types";

interface ToolCallViewProps {
  toolCall: ToolCall;
}

const ToolCallView: React.FC<ToolCallViewProps> = ({ toolCall }) => {
  const [showArgs, setShowArgs] = React.useState(false);
  const formattedArgs = React.useMemo(() => {
    if (!showArgs) return "";
    try {
      const parsed = JSON.parse(toolCall.argumentsJson);
      return JSON.stringify(parsed, null, 2);
    } catch {
      return toolCall.argumentsJson;
    }
  }, [showArgs, toolCall.argumentsJson]);

  return (
    <div className="border border-aichat-border rounded-lg overflow-hidden bg-aichat-surface/50">
      <div className="flex items-center justify-between px-3 py-2 bg-aichat-border/20">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-aichat-info"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm font-medium">{toolCall.toolName}</span>
          <span className="text-xs text-aichat-secondary px-1.5 py-0.5 bg-aichat-border/30 rounded">
            pending
          </span>
        </div>
        <button
          onClick={() => setShowArgs(!showArgs)}
          className="text-xs text-aichat-secondary hover:text-aichat-primary transition-colors"
        >
          {showArgs ? "Hide args" : "Show args"}
        </button>
      </div>
      {showArgs && (
        <div className="px-3 py-2 border-t border-aichat-border-dim">
          <pre className="text-xs text-aichat-secondary font-mono overflow-x-auto">
            {formattedArgs}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ToolCallView;
