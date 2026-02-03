import React from "react";
import { Link } from "react-router-dom";
import { useAIChat } from "../hooks/useAIChat";
import { toggleThemeSetting } from "../theme";

const ThreadsSidebar: React.FC = () => {
  const {
    threads,
    activeThreadId,
    createThread,
    selectThread,
    themeSetting,
    setThemeSetting,
  } = useAIChat();

  const handleThemeToggle = () => {
    setThemeSetting(toggleThemeSetting(themeSetting));
  };

  const themeLabel =
    themeSetting[0].toUpperCase() + themeSetting.slice(1);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (diffDays === 0) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (diffDays === 1) {
      return "Yesterday";
    } else if (diffDays < 7) {
      return date.toLocaleDateString([], { weekday: "short" });
    } else {
      return date.toLocaleDateString([], { month: "short", day: "numeric" });
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-aichat-border">
        <button
          onClick={createThread}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-aichat-accent text-aichat-background rounded hover:bg-aichat-accent/90 transition-colors font-medium"
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          New thread
        </button>
      </div>

      {/* Thread list */}
      <div className="flex-1 overflow-y-auto aichat-scrollbar">
        {threads.length === 0 ? (
          <div className="p-4 text-aichat-secondary text-sm text-center">
            No threads yet
          </div>
        ) : (
          <div className="py-2">
            {threads.map((thread) => (
              <button
                key={thread.id}
                onClick={() => selectThread(thread.id)}
                className={`
                  w-full px-4 py-3 text-left transition-colors
                  hover:bg-aichat-surface-hover
                  ${activeThreadId === thread.id ? "bg-aichat-surface-hover border-l-2 border-aichat-accent" : "border-l-2 border-transparent"}
                `}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate text-sm">
                      {thread.title}
                    </p>
                    <p className="text-xs text-aichat-secondary mt-1">
                      {thread.model && (
                        <span className="inline-block px-1.5 py-0.5 bg-aichat-border/30 rounded text-[10px] mr-2">
                          {thread.model}
                        </span>
                      )}
                      {thread.steps.length} messages
                    </p>
                  </div>
                  <span className="text-xs text-aichat-secondary whitespace-nowrap">
                    {formatDate(thread.updatedAt)}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-aichat-border space-y-2">
        {/* Home button */}
        <Link
          to="/"
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded border border-aichat-border bg-aichat-surface hover:bg-aichat-surface-hover transition-colors text-sm text-aichat-primary"
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </Link>

        {/* Theme toggle and label */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-aichat-secondary">AI Chat</span>
          <button
            onClick={handleThemeToggle}
            className="px-2.5 py-1 rounded border border-aichat-border text-[11px] bg-aichat-surface hover:bg-aichat-surface-hover transition-colors"
            aria-label="Toggle theme"
          >
            {themeLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreadsSidebar;
