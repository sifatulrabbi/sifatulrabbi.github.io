import React from "react";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { useAIChat } from "../hooks/useAIChat";
import type { Artifact } from "@/types";

interface ArtifactPreviewProps {
  artifact: Artifact;
}

const ArtifactPreview: React.FC<ArtifactPreviewProps> = ({ artifact }) => {
  const { activeTheme } = useAIChat();
  const [markdownMode, setMarkdownMode] = React.useState<"rendered" | "raw">(
    "rendered",
  );
  const [copyState, setCopyState] = React.useState<"idle" | "copied" | "error">(
    "idle",
  );
  const copyTimeoutRef = React.useRef<number | null>(null);

  const clearCopyTimeout = React.useCallback(() => {
    if (copyTimeoutRef.current !== null) {
      window.clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    clearCopyTimeout();
    setCopyState("idle");
    if (artifact.kind === "markdown") {
      setMarkdownMode("rendered");
    }
  }, [artifact.id, artifact.kind, clearCopyTimeout]);

  React.useEffect(() => {
    return () => {
      clearCopyTimeout();
    };
  }, [clearCopyTimeout]);

  const sanitizedMarkdown = React.useMemo(() => {
    if (artifact.kind !== "markdown") return "";
    const rendered = marked.parse(artifact.content);
    const html = typeof rendered === "string" ? rendered : "";
    return DOMPurify.sanitize(html);
  }, [artifact.kind, artifact.content]);

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
        if (markdownMode === "raw") {
          return (
            <pre className="text-xs font-mono overflow-x-auto terminal-scrollbar whitespace-pre-wrap">
              {artifact.content}
            </pre>
          );
        }
        return (
          <div
            className={`prose prose-sm max-w-none ${
              activeTheme === "dark" ? "prose-invert" : "prose-slate"
            }`}
            dangerouslySetInnerHTML={{
              __html: sanitizedMarkdown,
            }}
          />
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
        <div className="flex items-center gap-2">
          {artifact.kind === "markdown" && (
            <div className="flex items-center border border-terminal-border-dim rounded overflow-hidden">
              <button
                onClick={() => setMarkdownMode("rendered")}
                className={`px-2 py-1 text-xs transition-colors ${
                  markdownMode === "rendered"
                    ? "bg-terminal-accent/20 text-terminal-accent"
                    : "text-terminal-secondary hover:bg-terminal-surface-hover"
                }`}
                aria-pressed={markdownMode === "rendered"}
              >
                Rendered
              </button>
              <button
                onClick={() => setMarkdownMode("raw")}
                className={`px-2 py-1 text-xs transition-colors ${
                  markdownMode === "raw"
                    ? "bg-terminal-accent/20 text-terminal-accent"
                    : "text-terminal-secondary hover:bg-terminal-surface-hover"
                }`}
                aria-pressed={markdownMode === "raw"}
              >
                Raw
              </button>
            </div>
          )}
          <button
            onClick={async () => {
              clearCopyTimeout();
              try {
                if (!navigator.clipboard?.writeText) {
                  throw new Error("Clipboard unavailable");
                }
                await navigator.clipboard.writeText(artifact.content);
                setCopyState("copied");
                copyTimeoutRef.current = window.setTimeout(
                  () => setCopyState("idle"),
                  1500,
                );
              } catch {
                setCopyState("error");
                copyTimeoutRef.current = window.setTimeout(
                  () => setCopyState("idle"),
                  1500,
                );
              }
            }}
            className="p-1.5 hover:bg-terminal-surface-hover rounded transition-colors"
            title="Copy to clipboard"
          >
            {copyState === "copied" ? (
              <span className="text-xs text-terminal-success">Copied</span>
            ) : copyState === "error" ? (
              <span className="text-xs text-terminal-error">Copy failed</span>
            ) : (
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
            )}
          </button>
        </div>
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
