import React, { useRef, useEffect, useState } from "react";
import { useAIChat } from "../hooks/useAIChat";
import StepRenderer from "./StepRenderer";
import ChatComposer from "./ChatComposer";

const ChatHistory: React.FC = () => {
  const { threads, activeThreadId, artifactsById, selectArtifact } =
    useAIChat();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [userScrolled, setUserScrolled] = useState(false);

  const activeThread = threads.find((t) => t.id === activeThreadId);

  // Auto-scroll to bottom on new steps
  useEffect(() => {
    if (scrollRef.current && !userScrolled) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeThread?.steps, userScrolled]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 50;
      setUserScrolled(!isNearBottom);
    }
  };

  // Get artifacts referenced in this thread
  // const threadArtifacts = React.useMemo(() => {
  //   if (!activeThread) return [];
  //   const artifactIds = new Set<string>();
  //   activeThread.steps.forEach((step) => {
  //     if (step.type === "ai") {
  //       step.blocks.forEach((block) => {
  //         if (block.type === "artifact") {
  //           artifactIds.add(block.artifactId);
  //         }
  //       });
  //     }
  //   });
  //   return Array.from(artifactIds)
  //     .map((id) => artifactsById[id])
  //     .filter(Boolean);
  // }, [activeThread, artifactsById]);

  return (
    <>
      {/* Chat history */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto terminal-scrollbar p-4 space-y-6 text-[15px]"
      >
        {!activeThread ? (
          <div className="flex flex-col items-center justify-center h-full text-terminal-secondary">
            <svg
              className="w-16 h-16 mb-4 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <p className="text-lg font-medium">Select a thread to start</p>
            <p className="text-sm mt-2">
              Choose an existing conversation or create a new one
            </p>
          </div>
        ) : activeThread.steps.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-terminal-secondary text-center">
            <p className="text-lg font-medium">
              Start a new conversation in "{activeThread.title}"
            </p>
            <p className="text-sm mt-2">Type your message below</p>
          </div>
        ) : (
          activeThread.steps.map((step, index) => (
            <StepRenderer
              key={step.id}
              step={step}
              isLast={index === activeThread.steps.length - 1}
              onArtifactClick={selectArtifact}
              artifactsById={artifactsById}
            />
          ))
        )}
      </div>

      {/* Composer */}
      <div className="sticky bottom-0 bg-terminal-background border-t border-terminal-border p-4">
        <ChatComposer />

        {/* Quick artifact links */}
        {/* threadArtifacts.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs text-terminal-secondary">
              Artifacts in this thread:
            </span>
            {threadArtifacts.map((artifact) => (
              <button
                key={artifact.id}
                onClick={() => selectArtifact(artifact.id)}
                className="text-xs px-2 py-1 bg-terminal-surface hover:bg-terminal-surface-hover rounded border border-terminal-border-dim transition-colors"
              >
                {artifact.title}
              </button>
            ))}
          </div>
        ) */}
      </div>
    </>
  );
};

export default ChatHistory;
