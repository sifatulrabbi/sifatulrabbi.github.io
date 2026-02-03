import React, { useRef, useCallback } from "react";
import { useAIChat } from "../hooks/useAIChat";

const ChatComposer: React.FC = () => {
  const { composerText, setComposerText, sendUserMessage, activeThreadId } =
    useAIChat();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = useCallback(() => {
    if (composerText.trim() && activeThreadId) {
      sendUserMessage(composerText);
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  }, [composerText, activeThreadId, sendUserMessage]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit],
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setComposerText(e.target.value);
      // Auto-resize textarea
      const textarea = e.target;
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    },
    [setComposerText],
  );

  if (!activeThreadId) {
    return null;
  }

  return (
    <div className="flex items-end gap-2">
      <div className="flex-1 relative flex items-start justify-start">
        <textarea
          ref={textareaRef}
          value={composerText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="w-full px-4 py-3 pr-12 bg-terminal-surface border border-terminal-border rounded-xl resize-none focus:outline-none focus:border-terminal-accent focus:ring-1 focus:ring-terminal-accent min-h-[52px] max-h-[200px] terminal-scrollbar text-[16px]"
          rows={1}
        />
        <div className="absolute right-3 bottom-3 text-xs text-terminal-secondary">
          {composerText.length > 0 && (
            <span className="bg-terminal-border/30 px-1.5 py-0.5 rounded">
              {composerText.length}
            </span>
          )}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!composerText.trim()}
        className={`
          px-4 py-3 rounded-xl font-medium transition-all
          ${
            composerText.trim()
              ? "bg-terminal-accent text-terminal-background hover:bg-terminal-accent/90"
              : "bg-terminal-border text-terminal-secondary cursor-not-allowed"
          }
        `}
        aria-label="Send message"
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
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChatComposer;
