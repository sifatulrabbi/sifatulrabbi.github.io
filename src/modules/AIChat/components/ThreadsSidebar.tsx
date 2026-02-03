import React from "react";
import { useAIChat } from "../hooks/useAIChat";

const ThreadsSidebar: React.FC = () => {
  const {
    threads,
    activeThreadId,
    createThread,
    selectThread,
    themeSetting,
    activeTheme,
    setThemeSetting,
  } = useAIChat();

  const handleThemeToggle = () => {
    const nextTheme =
      themeSetting === "system"
        ? "light"
        : themeSetting === "light"
          ? "dark"
          : "system";
    setThemeSetting(nextTheme);
  };

  const themeLabel =
    themeSetting === "system"
      ? `Auto (${activeTheme})`
      : themeSetting[0].toUpperCase() + themeSetting.slice(1);

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
      <div className="p-4 border-b border-terminal-border">
        <button
          onClick={createThread}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-terminal-accent text-terminal-background rounded hover:bg-terminal-accent/90 transition-colors font-medium"
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
      <div className="flex-1 overflow-y-auto terminal-scrollbar">
        {threads.length === 0 ? (
          <div className="p-4 text-terminal-secondary text-sm text-center">
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
                  hover:bg-terminal-surface-hover
                  ${activeThreadId === thread.id ? "bg-terminal-surface-hover border-l-2 border-terminal-accent" : "border-l-2 border-transparent"}
                `}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate text-sm">
                      {thread.title}
                    </p>
                    <p className="text-xs text-terminal-secondary mt-1">
                      {thread.model && (
                        <span className="inline-block px-1.5 py-0.5 bg-terminal-border/30 rounded text-[10px] mr-2">
                          {thread.model}
                        </span>
                      )}
                      {thread.steps.length} messages
                    </p>
                  </div>
                  <span className="text-xs text-terminal-secondary whitespace-nowrap">
                    {formatDate(thread.updatedAt)}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-terminal-border flex items-center justify-between gap-2">
        <span className="text-xs text-terminal-secondary">AI Chat</span>
        <button
          onClick={handleThemeToggle}
          className="px-2.5 py-1 rounded border border-terminal-border text-[11px] bg-terminal-surface hover:bg-terminal-surface-hover transition-colors"
          aria-label="Toggle theme"
        >
          {themeLabel}
        </button>
      </div>
    </div>
  );
};

export default ThreadsSidebar;
