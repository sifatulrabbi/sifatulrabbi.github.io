import React from "react";
import { useAIChat } from "../hooks/useAIChat";

interface AIChatLayoutProps {
  sidebar: React.ReactNode;
  chat: React.ReactNode;
  artifacts: React.ReactNode;
}

const AIChatLayout: React.FC<AIChatLayoutProps> = ({
  sidebar,
  chat,
  artifacts,
}) => {
  const {
    sidebarOpen,
    artifactsOpen,
    toggleSidebar,
    toggleArtifacts,
    themeSetting,
  } = useAIChat();

  return (
    <div
      data-section="aichat"
      data-theme={themeSetting}
      className="h-[100dvh] w-full flex bg-aichat-background text-aichat-primary overflow-hidden font-aichat"
    >
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Left sidebar - Threads */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-[280px] border-r border-aichat-border bg-aichat-surface
          transform transition-transform duration-200 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          flex flex-col
        `}
      >
        {sidebar}
      </aside>

      {/* Middle - Chat area */}
      <main className="flex-1 min-w-0 flex flex-col relative">
        {/* Mobile header with toggles */}
        <div className="lg:hidden flex items-center justify-between p-3 border-b border-aichat-border bg-aichat-surface">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded hover:bg-aichat-surface-hover transition-colors"
            aria-label="Toggle threads"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <span className="font-medium">AI Chat</span>
          <button
            onClick={toggleArtifacts}
            className="p-2 rounded hover:bg-aichat-surface-hover transition-colors"
            aria-label="Toggle artifacts"
          >
            <svg
              className="w-5 h-5"
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
          </button>
        </div>

        {chat}
      </main>

      {/* Artifacts overlay */}
      {artifactsOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleArtifacts}
        />
      )}

      {/* Right panel - Artifacts */}
      <aside
        className={`
          fixed inset-y-0 right-0 z-50
          w-full sm:w-[80vw] lg:w-[60vw]
          border-l border-aichat-border bg-aichat-surface shadow-2xl
          transform transition-transform duration-200 ease-in-out
          ${artifactsOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
      >
        {artifacts}
      </aside>

      {/* Desktop toggle for artifacts */}
      <button
        onClick={toggleArtifacts}
        aria-pressed={artifactsOpen}
        className={`hidden lg:flex fixed right-4 top-4 z-30 p-2 rounded border transition-colors ${
          artifactsOpen
            ? "bg-aichat-accent/10 border-aichat-accent text-aichat-accent"
            : "bg-aichat-surface border-aichat-border hover:bg-aichat-surface-hover"
        }`}
        aria-label="Toggle artifacts panel"
      >
        <svg
          className="w-5 h-5"
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
      </button>
    </div>
  );
};

export default AIChatLayout;
