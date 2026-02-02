import React from "react";
import type { Artifact } from "@/types";

interface ArtifactPreviewProps {
  artifact: Artifact;
}

const ArtifactPreview: React.FC<ArtifactPreviewProps> = ({ artifact }) => {
  const renderContent = () => {
    switch (artifact.kind) {
      case "code":
        return (
          <pre className="text-xs font-mono overflow-x-auto terminal-scrollbar">
            <code>{artifact.content}</code>
          </pre>
        );
      case "json":
        return (
          <pre className="text-xs font-mono overflow-x-auto terminal-scrollbar">
            <code>{artifact.content}</code>
          </pre>
        );
      case "html":
        return (
          <div className="border border-terminal-border-dim rounded p-2 bg-white">
            <iframe
              srcDoc={artifact.content}
              className="w-full h-64 border-0"
              title={artifact.title}
              sandbox="allow-scripts"
            />
          </div>
        );
      case "markdown":
        return (
          <div className="prose prose-sm prose-invert max-w-none">
            <pre className="text-xs font-mono overflow-x-auto terminal-scrollbar whitespace-pre-wrap">
              {artifact.content}
            </pre>
          </div>
        );
      default:
        return (
          <pre className="text-xs font-mono overflow-x-auto terminal-scrollbar whitespace-pre-wrap">
            {artifact.content}
          </pre>
        );
    }
  };

  return (
    <div className="border border-terminal-border rounded-lg overflow-hidden bg-terminal-background">
      <div className="flex items-center justify-between px-3 py-2 bg-terminal-surface border-b border-terminal-border">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm">{artifact.title}</span>
          <span className="text-xs px-1.5 py-0.5 bg-terminal-border/30 rounded">
            {artifact.kind}
          </span>
          {artifact.language && (
            <span className="text-xs text-terminal-secondary">
              {artifact.language}
            </span>
          )}
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(artifact.content);
          }}
          className="p-1.5 hover:bg-terminal-surface-hover rounded transition-colors"
          title="Copy to clipboard"
        >
          <svg
            className="w-4 h-4 text-terminal-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
      <div className="p-3 max-h-[50vh] overflow-y-auto terminal-scrollbar">
        {renderContent()}
      </div>
      <div className="px-3 py-2 bg-terminal-surface border-t border-terminal-border text-xs text-terminal-secondary">
        Updated {new Date(artifact.updatedAt).toLocaleString()}
      </div>
    </div>
  );
};

export default ArtifactPreview;
