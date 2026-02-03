import React from "react";
import { useAIChat } from "../hooks/useAIChat";
import ArtifactPreview from "./ArtifactPreview";

const ArtifactsPanel: React.FC = () => {
  const {
    threads,
    activeThreadId,
    artifactsById,
    selectedArtifactId,
    selectArtifact,
    toggleArtifacts,
  } = useAIChat();

  const activeThread = threads.find((t) => t.id === activeThreadId);

  // Get artifacts referenced in this thread
  const threadArtifacts = React.useMemo(() => {
    if (!activeThread) return [];
    const artifactIds = new Set<string>();
    activeThread.steps.forEach((step) => {
      if (step.type === "ai") {
        step.blocks.forEach((block) => {
          if (block.type === "artifact") {
            artifactIds.add(block.artifactId);
          }
        });
      }
    });
    return Array.from(artifactIds)
      .map((id) => artifactsById[id])
      .filter(Boolean);
  }, [activeThread, artifactsById]);

  const selectedArtifact = selectedArtifactId
    ? artifactsById[selectedArtifactId]
    : null;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-terminal-border flex items-start justify-between gap-3">
        <div>
          <h2 className="font-medium">Artifacts</h2>
          <p className="text-xs text-terminal-secondary mt-1">
            {threadArtifacts.length} in this thread
          </p>
        </div>
        <button
          onClick={toggleArtifacts}
          className="p-1.5 rounded hover:bg-terminal-surface-hover transition-colors"
          aria-label="Close artifacts panel"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto terminal-scrollbar">
        {!activeThread ? (
          <div className="p-4 text-terminal-secondary text-sm text-center">
            Select a thread to view artifacts
          </div>
        ) : threadArtifacts.length === 0 ? (
          <div className="p-4 text-terminal-secondary text-sm text-center">
            No artifacts in this thread yet
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {/* Artifact list */}
            <div className="space-y-2">
              {threadArtifacts.map((artifact) => (
                <button
                  key={artifact.id}
                  onClick={() =>
                    selectArtifact(
                      selectedArtifactId === artifact.id ? null : artifact.id,
                    )
                  }
                  className={`
                    w-full text-left p-3 rounded-lg border transition-all
                    ${
                      selectedArtifactId === artifact.id
                        ? "bg-terminal-accent/10 border-terminal-accent"
                        : "bg-terminal-surface border-terminal-border-dim hover:border-terminal-border"
                    }
                  `}
                >
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-terminal-secondary mt-0.5 flex-shrink-0"
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
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">
                        {artifact.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-1.5 py-0.5 bg-terminal-border/30 rounded">
                          {artifact.kind}
                        </span>
                        {artifact.language && (
                          <span className="text-xs text-terminal-secondary">
                            {artifact.language}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected artifact preview */}
            {selectedArtifact && (
              <div className="border-t border-terminal-border pt-4">
                <ArtifactPreview artifact={selectedArtifact} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtifactsPanel;
