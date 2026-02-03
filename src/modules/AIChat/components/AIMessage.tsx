import React from "react";
import type { AIStep, Artifact } from "@/types";
import ReasoningBlockView from "./ReasoningBlockView";
import ToolCallView from "./ToolCallView";

interface AIMessageProps {
  step: AIStep;
  isLast: boolean;
  onArtifactClick: (id: string) => void;
  artifactsById: Record<string, Artifact>;
}

const AIMessage: React.FC<AIMessageProps> = ({
  step,
  onArtifactClick,
  artifactsById,
}) => {
  const getStatusIcon = () => {
    switch (step.status) {
      case "pending":
        return (
          <span className="inline-flex items-center gap-1 text-aichat-info">
            <svg
              className="animate-spin h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Thinking...
          </span>
        );
      case "streaming":
        return (
          <span className="inline-flex items-center gap-1 text-aichat-info">
            <span className="w-2 h-2 bg-aichat-info rounded-full animate-pulse" />
            Streaming...
          </span>
        );
      case "error":
        return (
          <span className="inline-flex items-center gap-1 text-aichat-error">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Error
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-start w-full">
      <div className="w-full">
        {/* AI Avatar and status */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-aichat-accent/20 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-aichat-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-aichat-secondary">
            AI
          </span>
          {getStatusIcon()}
        </div>

        {/* Message content */}
        <div className="space-y-3">
          {step.blocks.map((block) => {
            switch (block.type) {
              case "text":
                return (
                  <div
                    key={block.id}
                    className="px-1 py-1"
                  >
                    <p className="whitespace-pre-wrap">{block.text}</p>
                  </div>
                );
              case "reasoning":
                return <ReasoningBlockView key={block.id} text={block.text} />;
              case "artifact": {
                const artifact = artifactsById[block.artifactId];
                if (!artifact) return null;
                return (
                  <div
                    key={block.id}
                    className="bg-aichat-surface px-4 py-3 rounded-2xl rounded-tl-sm border border-aichat-border-dim"
                  >
                    <button
                      onClick={() => onArtifactClick(block.artifactId)}
                      className="flex items-center gap-2 text-aichat-accent hover:underline"
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="font-medium">{artifact.title}</span>
                      <span className="text-xs px-1.5 py-0.5 bg-aichat-border/30 rounded">
                        {artifact.kind}
                      </span>
                    </button>
                  </div>
                );
              }
              case "tool_call":
                return (
                  <ToolCallView key={block.id} toolCall={block.toolCall} />
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Timestamp */}
        <p className="text-xs text-aichat-secondary mt-1">
          {new Date(step.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

export default AIMessage;
