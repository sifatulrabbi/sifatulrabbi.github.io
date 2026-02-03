import React from "react";
import type { ToolResultStep } from "@/types";

interface ToolResultViewProps {
  step: ToolResultStep;
}

const ToolResultView: React.FC<ToolResultViewProps> = ({ step }) => {
  const isError = step.status === "error";

  const formatJson = (data: unknown): string => {
    try {
      return JSON.stringify(data, null, 2);
    } catch {
      return String(data);
    }
  };

  return (
    <div
      className={`
        border rounded-lg overflow-hidden w-full
        ${isError ? "border-aichat-error/50 bg-aichat-error/5" : "border-aichat-success/50 bg-aichat-success/5"}
      `}
    >
      <div
        className={`
          flex items-center justify-between px-3 py-2
          ${isError ? "bg-aichat-error/10" : "bg-aichat-success/10"}
        `}
      >
        <div className="flex items-center gap-2">
          <svg
            className={`w-4 h-4 ${isError ? "text-aichat-error" : "text-aichat-success"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isError ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            )}
          </svg>
          <span className="text-sm font-medium">
            {step.toolName || "Tool"} result
          </span>
          <span
            className={`
              text-xs px-1.5 py-0.5 rounded
              ${isError ? "bg-aichat-error/20 text-aichat-error" : "bg-aichat-success/20 text-aichat-success"}
            `}
          >
            {step.status}
          </span>
        </div>
        <span className="text-xs text-aichat-secondary">
          {new Date(step.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
      <div className="px-3 py-2">
        {step.output.text && (
          <p className="text-sm text-aichat-secondary">{step.output.text}</p>
        )}
        {step.output.json !== undefined && step.output.json !== null && (
          <pre className="text-xs text-aichat-secondary font-mono overflow-x-auto mt-2 p-2 bg-aichat-background rounded">
            {formatJson(step.output.json)}
          </pre>
        )}
      </div>
    </div>
  );
};

export default ToolResultView;
