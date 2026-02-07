import React, { useState, useEffect, useRef, useMemo, useCallback, memo } from "react";
import { useAIChat } from "@/modules/AIChat/hooks/useAIChat";
import type { Step, AIStep, AIBlock, Thread, Artifact } from "@/types";
import { Moon, Sun, ChevronDown, ChevronRight, Plus, File, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CSS style block — injected once via <style>                        */
/* ------------------------------------------------------------------ */

const V5_STYLES = `
[data-section="aichat-v5"] {
  --v5-bg: #fdfaf5;
  --v5-bg-secondary: #f5f0e8;
  --v5-text: #1a1a1a;
  --v5-text-secondary: #5c5347;
  --v5-text-muted: #7a6d5f;
  --v5-accent: #c0392b;
  --v5-accent-light: rgba(192, 57, 43, 0.08);
  --v5-accent-border: rgba(192, 57, 43, 0.3);
  --v5-rule: #c8bfaf;
  --v5-border: #ddd5c5;
  --v5-border-light: #e8e0d4;
  --v5-code-bg: #ede7db;
  --v5-shadow-sm: 0 1px 3px rgba(0,0,0,0.04);
  --v5-shadow-lg: 0 2px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.1);
  --v5-display: 'Instrument Serif', 'Georgia', serif;
  --v5-dropcap: 'Playfair Display', 'Georgia', serif;
  --v5-sans: 'Libre Franklin', 'Helvetica Neue', sans-serif;
  --v5-mono: 'Fira Code', 'Consolas', monospace;
  --aichat-font-body: 'Crimson Pro', 'Georgia', serif;
}

[data-section="aichat-v5"][data-theme="dark"] {
  --v5-bg: #1a1812;
  --v5-bg-secondary: #2a2518;
  --v5-text: #ede5d4;
  --v5-text-secondary: #b0a594;
  --v5-text-muted: #9a8d7f;
  --v5-accent: #d94a3a;
  --v5-accent-light: rgba(217, 74, 58, 0.12);
  --v5-accent-border: rgba(217, 74, 58, 0.35);
  --v5-rule: #4a4238;
  --v5-border: #3a3428;
  --v5-border-light: #2e2921;
  --v5-code-bg: #252018;
  --v5-shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --v5-shadow-lg: 0 2px 4px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.3);
}

[data-section="aichat-v5"] * { box-sizing: border-box; }

/* ---------- Typography ---------- */

.v5-body {
  font-family: var(--aichat-font-body);
  font-feature-settings: "kern" 1, "liga" 1, "onum" 1, "pnum" 1;
}
.v5-ui-label {
  font-family: var(--v5-sans);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--v5-text-muted);
}
.v5-ui-text {
  font-family: var(--v5-sans);
  font-size: 0.85rem;
  font-weight: 400;
  color: var(--v5-text-secondary);
}
.v5-ui-micro {
  font-family: var(--v5-sans);
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--v5-text-muted);
}

/* ---------- Interactive ---------- */

.v5-btn-ghost {
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}
.v5-btn-ghost:hover { background: var(--v5-accent-light); }
.v5-btn-ghost:focus-visible {
  outline: 2px solid var(--v5-accent);
  outline-offset: 2px;
}

.v5-thread-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 16px;
  border: none;
  font-size: 0.875rem;
  font-family: var(--v5-sans);
  cursor: pointer;
  border-bottom: 1px solid var(--v5-border-light);
  transition: background 0.1s ease;
  background: transparent;
  color: var(--v5-text);
}
.v5-thread-item:hover { background: var(--v5-bg-secondary); }
.v5-thread-item[data-active="true"] {
  background: var(--v5-accent-light);
  color: var(--v5-accent);
}
.v5-thread-item[data-active="true"]:hover {
  background: var(--v5-accent-light);
}

.v5-new-thread-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 16px;
  border: none;
  background: transparent;
  color: var(--v5-accent);
  font-size: 0.85rem;
  font-family: var(--v5-sans);
  font-weight: 500;
  cursor: pointer;
  transition: background 0.1s ease;
}
.v5-new-thread-btn:hover { background: var(--v5-accent-light); }

.v5-footnote-sup {
  font-family: var(--v5-sans);
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--v5-accent);
  cursor: pointer;
  user-select: none;
  padding: 4px 6px;
  border-radius: 3px;
  transition: background 0.15s ease;
  border: none;
  background: transparent;
  vertical-align: super;
  line-height: 0;
}
.v5-footnote-sup:hover { background: var(--v5-accent-light); }
.v5-footnote-sup:focus-visible {
  outline: 2px solid var(--v5-accent);
  outline-offset: 1px;
}

/* ---------- Composer ---------- */

.v5-composer-wrap {
  border-bottom: 1.5px solid var(--v5-border);
  transition: border-color 0.25s ease;
}
.v5-composer-wrap:focus-within {
  border-bottom-color: var(--v5-text-secondary);
}

/* ---------- Scrollbar ---------- */

[data-section="aichat-v5"] ::-webkit-scrollbar { width: 6px; height: 6px; }
[data-section="aichat-v5"] ::-webkit-scrollbar-track { background: transparent; }
[data-section="aichat-v5"] ::-webkit-scrollbar-thumb {
  background: var(--v5-border);
  border-radius: 3px;
}
[data-section="aichat-v5"] ::-webkit-scrollbar-thumb:hover {
  background: var(--v5-text-muted);
}

/* ---------- Animations ---------- */

@keyframes v5-fade-up {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes v5-pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
@keyframes v5-theme-fade {
  from { opacity: 0.85; }
  to { opacity: 1; }
}
@keyframes v5-folio-slide {
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes v5-modal-bg {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes v5-modal-content {
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.v5-fade-up { animation: v5-fade-up 0.4s ease-out both; }
.v5-theme-transition { animation: v5-theme-fade 0.3s ease-out; }

/* ---------- Collapsible ---------- */

.v5-collapsible {
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.25s ease;
}
.v5-collapsible-closed { max-height: 0; opacity: 0; }
.v5-collapsible-open { max-height: 2000px; opacity: 1; }

/* ---------- Drop cap ---------- */

.v5-dropcap::first-letter {
  font-family: var(--v5-dropcap);
  float: left;
  font-size: 3.4em;
  line-height: 0.78;
  padding-right: 12px;
  padding-top: 6px;
  color: var(--v5-accent);
  font-weight: 700;
}

/* ---------- Small caps lede ---------- */

.v5-small-caps {
  font-variant: small-caps;
  letter-spacing: 0.05em;
}

/* ---------- Running header ---------- */

.v5-folio {
  position: sticky;
  top: 0;
  z-index: 30;
  background: var(--v5-bg);
  border-bottom: 1px solid var(--v5-border-light);
  animation: v5-folio-slide 0.25s ease-out;
}

/* ---------- Modal ---------- */

.v5-modal-bg {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: v5-modal-bg 0.2s ease-out;
  padding: 16px;
}
.v5-modal-panel {
  background: var(--v5-bg);
  border: 1px solid var(--v5-border);
  border-radius: 12px;
  box-shadow: var(--v5-shadow-lg);
  max-width: 720px;
  width: 100%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  animation: v5-modal-content 0.3s ease-out;
}

/* ---------- Link styles ---------- */

[data-section="aichat-v5"] a {
  color: var(--v5-accent);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
  transition: color 0.15s ease;
}
[data-section="aichat-v5"] a:hover {
  color: var(--v5-text);
}

/* ---------- Safe area ---------- */

@supports (padding-bottom: env(safe-area-inset-bottom)) {
  .v5-safe-bottom {
    padding-bottom: max(24px, env(safe-area-inset-bottom)) !important;
  }
}

/* ---------- New messages pill ---------- */

.v5-new-msg-pill {
  position: sticky;
  bottom: 100px;
  z-index: 20;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  border-radius: 20px;
  background: var(--v5-accent);
  color: #fff;
  font-family: var(--v5-sans);
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  animation: v5-fade-up 0.3s ease-out;
  width: fit-content;
}
`;

/* ------------------------------------------------------------------ */
/*  Constants & Helpers                                                */
/* ------------------------------------------------------------------ */

const EMPTY_STEPS: Step[] = [];

const formatTime = (iso: string): string => {
  try {
    return new Date(iso).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
};

const formatDate = (iso: string): string => {
  try {
    return new Date(iso).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
  } catch {
    return "";
  }
};

/* ------------------------------------------------------------------ */
/*  Style Injector                                                     */
/* ------------------------------------------------------------------ */

const StyleInjector: React.FC = () => {
  useEffect(() => {
    if (document.querySelector("[data-v5-styles]")) return;
    const style = document.createElement("style");
    style.setAttribute("data-v5-styles", "true");
    style.textContent = V5_STYLES;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  return null;
};

/* ------------------------------------------------------------------ */
/*  Decorative elements                                                */
/* ------------------------------------------------------------------ */

const DecorativeRule = memo<{ className?: string }>(({ className }) => (
  <div
    className={className}
    style={{
      height: "1px",
      background: "linear-gradient(90deg, transparent, var(--v5-rule), transparent)",
    }}
  />
));
DecorativeRule.displayName = "DecorativeRule";

const Flourish = memo(() => (
  <div className="flex items-center justify-center py-8" style={{ color: "var(--v5-text-muted)" }}>
    <span style={{ fontFamily: "var(--v5-display)", fontSize: "1.1rem", letterSpacing: "0.5em", opacity: 0.6 }}>
      &#10043;&ensp;&#10043;&ensp;&#10043;
    </span>
  </div>
));
Flourish.displayName = "Flourish";

/* ------------------------------------------------------------------ */
/*  Theme Toggle                                                       */
/* ------------------------------------------------------------------ */

const ThemeToggle = memo<{ theme: "light" | "dark"; onToggle: () => void }>(({ theme, onToggle }) => (
  <button
    onClick={onToggle}
    className="v5-btn-ghost flex items-center justify-center"
    style={{
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      border: "1px solid var(--v5-border)",
      color: "var(--v5-text-secondary)",
    }}
    aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
  >
    {theme === "light" ? (
      <Moon size={16} strokeWidth={1.5} />
    ) : (
      <Sun size={16} strokeWidth={1.5} />
    )}
  </button>
));
ThemeToggle.displayName = "ThemeToggle";

/* ------------------------------------------------------------------ */
/*  Running Header (Folio)                                             */
/* ------------------------------------------------------------------ */

const RunningHeader = memo<{ title: string; visible: boolean }>(({ title, visible }) => {
  if (!visible) return null;
  return (
    <div className="v5-folio">
      <div className="mx-auto flex items-center justify-center py-2" style={{ maxWidth: "680px" }}>
        <span
          className="v5-ui-micro truncate"
          style={{ maxWidth: "400px", letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          {title}
        </span>
      </div>
    </div>
  );
});
RunningHeader.displayName = "RunningHeader";

/* ------------------------------------------------------------------ */
/*  Thread Selector                                                    */
/* ------------------------------------------------------------------ */

const ThreadSelector: React.FC<{
  threads: Thread[];
  activeThreadId: string | null;
  onSelect: (id: string) => void;
  onCreate: () => void;
}> = ({ threads, activeThreadId, onSelect, onCreate }) => {
  const [open, setOpen] = useState(false);
  const [focusIdx, setFocusIdx] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeThread = useMemo(
    () => threads.find((t) => t.id === activeThreadId),
    [threads, activeThreadId],
  );

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Focus active item on open
  useEffect(() => {
    if (open) {
      const idx = threads.findIndex((t) => t.id === activeThreadId);
      setFocusIdx(idx >= 0 ? idx : 0);
    }
  }, [open, threads, activeThreadId]);

  useEffect(() => {
    if (open && focusIdx >= 0 && itemRefs.current[focusIdx]) {
      itemRefs.current[focusIdx]?.focus();
    }
  }, [open, focusIdx]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!open) return;
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          setOpen(false);
          break;
        case "ArrowDown":
          e.preventDefault();
          setFocusIdx((prev) => Math.min(prev + 1, threads.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setFocusIdx((prev) => Math.max(prev - 1, 0));
          break;
      }
    },
    [open, threads.length],
  );

  return (
    <div ref={dropdownRef} className="relative" onKeyDown={handleKeyDown}>
      <button
        onClick={() => setOpen(!open)}
        className="v5-btn-ghost flex items-center gap-2"
        style={{
          fontSize: "0.875rem",
          fontWeight: 500,
          fontFamily: "var(--v5-sans)",
          letterSpacing: "0.02em",
          padding: "6px 12px",
          borderRadius: "6px",
          border: "1px solid var(--v5-border-light)",
          color: "var(--v5-text-secondary)",
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate" style={{ maxWidth: "240px" }}>
          {activeThread?.title || "Select a conversation"}
        </span>
        <ChevronDown
          size={14}
          style={{ flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s ease" }}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 mt-2 v5-fade-up"
          role="listbox"
          aria-label="Conversations"
          style={{
            zIndex: 50,
            minWidth: "280px",
            maxWidth: "min(360px, calc(100vw - 32px))",
            background: "var(--v5-bg)",
            border: "1px solid var(--v5-border)",
            borderRadius: "8px",
            boxShadow: "var(--v5-shadow-lg)",
            overflow: "hidden",
          }}
        >
          <div className="overflow-y-auto" style={{ maxHeight: "320px" }}>
            {threads.map((thread, i) => (
              <button
                key={thread.id}
                ref={(el) => { itemRefs.current[i] = el; }}
                role="option"
                aria-selected={thread.id === activeThreadId}
                data-active={thread.id === activeThreadId}
                className="v5-thread-item"
                style={{ fontWeight: thread.id === activeThreadId ? 600 : 400 }}
                onClick={() => { onSelect(thread.id); setOpen(false); }}
              >
                <div className="truncate">{thread.title}</div>
                <div className="v5-ui-micro" style={{ marginTop: "2px" }}>{formatDate(thread.updatedAt)}</div>
              </button>
            ))}
          </div>

          <div style={{ height: "1px", background: "var(--v5-border)" }} />

          <button
            className="v5-new-thread-btn"
            onClick={() => { onCreate(); setOpen(false); }}
          >
            <Plus size={14} />
            Begin new conversation
          </button>
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Masthead                                                           */
/* ------------------------------------------------------------------ */

const Masthead = memo<{
  threads: Thread[];
  activeThreadId: string | null;
  themeSetting: "light" | "dark";
  onSelectThread: (id: string) => void;
  onCreateThread: () => void;
  onToggleTheme: () => void;
}>(({ threads, activeThreadId, themeSetting, onSelectThread, onCreateThread, onToggleTheme }) => (
  <header className="pt-12 pb-6 px-5 md:px-0">
    <div className="flex items-end justify-between mb-5">
      <h1
        style={{
          fontFamily: "var(--v5-display)",
          fontSize: "3rem",
          fontWeight: 400,
          fontStyle: "italic",
          color: "var(--v5-text)",
          lineHeight: 1.1,
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        Conversations
      </h1>
      <div className="flex items-center gap-3">
        <button
          onClick={onCreateThread}
          className="v5-btn-ghost flex items-center justify-center"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid var(--v5-border)",
            color: "var(--v5-text-secondary)",
          }}
          aria-label="New conversation"
          title="New conversation"
        >
          <Plus size={16} strokeWidth={1.5} />
        </button>
        <ThemeToggle theme={themeSetting} onToggle={onToggleTheme} />
      </div>
    </div>

    <DecorativeRule className="mb-4" />

    <ThreadSelector
      threads={threads}
      activeThreadId={activeThreadId}
      onSelect={onSelectThread}
      onCreate={onCreateThread}
    />
  </header>
));
Masthead.displayName = "Masthead";

/* ------------------------------------------------------------------ */
/*  User Step (Blockquote)                                             */
/* ------------------------------------------------------------------ */

const UserStepView = memo<{ step: Step & { type: "user" }; animDelay: number }>(({ step, animDelay }) => (
  <div className="v5-fade-up" style={{ animationDelay: `${animDelay}ms`, padding: "16px 0" }}>
    <div className="v5-ui-label" style={{ marginBottom: "8px", letterSpacing: "0.08em" }}>
      {formatTime(step.createdAt)}
    </div>
    <blockquote
      className="v5-body"
      style={{
        margin: 0,
        paddingLeft: "20px",
        borderLeft: "3px solid var(--v5-accent)",
        fontSize: "1.1rem",
        lineHeight: 1.7,
        color: "var(--v5-text)",
        fontStyle: "italic",
        fontWeight: 400,
        textIndent: "-0.4em",
        paddingRight: "4px",
      }}
    >
      {step.content.text}
    </blockquote>
  </div>
));
UserStepView.displayName = "UserStepView";

/* ------------------------------------------------------------------ */
/*  Reasoning Block                                                    */
/* ------------------------------------------------------------------ */

const ReasoningBlockView = memo<{ block: AIBlock & { type: "reasoning" } }>(({ block }) => {
  const [expanded, setExpanded] = useState(false);
  const contentId = `reasoning-${block.id}`;

  return (
    <div style={{ margin: "12px 0" }}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="v5-btn-ghost v5-ui-label flex items-center gap-2"
        style={{ padding: "6px 8px", borderRadius: "4px" }}
        aria-expanded={expanded}
        aria-controls={contentId}
      >
        <ChevronRight
          size={10}
          style={{ transform: expanded ? "rotate(90deg)" : "rotate(0)", transition: "transform 0.2s ease" }}
        />
        View reasoning
      </button>

      <div id={contentId} className={`v5-collapsible ${expanded ? "v5-collapsible-open" : "v5-collapsible-closed"}`}>
        <div
          className="v5-body"
          style={{
            fontSize: "0.9rem",
            lineHeight: 1.7,
            color: "var(--v5-text-muted)",
            fontStyle: "italic",
            padding: "8px 0 8px 16px",
            borderLeft: "1px solid var(--v5-border-light)",
            marginTop: "4px",
          }}
        >
          {block.text}
        </div>
      </div>
    </div>
  );
});
ReasoningBlockView.displayName = "ReasoningBlockView";

/* ------------------------------------------------------------------ */
/*  Text Block                                                         */
/* ------------------------------------------------------------------ */

const TextBlockView = memo<{ block: AIBlock & { type: "text" } }>(({ block }) => (
  <p
    className="v5-body"
    style={{
      fontSize: "1.15rem",
      lineHeight: 1.8,
      color: "var(--v5-text)",
      margin: "0 0 16px 0",
      letterSpacing: "0.005em",
      textAlign: "left",
    }}
  >
    {block.text}
  </p>
));
TextBlockView.displayName = "TextBlockView";

/* ------------------------------------------------------------------ */
/*  Artifact Block (Figure)                                            */
/* ------------------------------------------------------------------ */

const ArtifactBlockView = memo<{
  block: AIBlock & { type: "artifact" };
  artifact: Artifact | undefined;
  onSelect: (id: string) => void;
}>(({ block, artifact, onSelect }) => {
  const [expanded, setExpanded] = useState(false);
  const contentId = `artifact-${block.id}`;

  if (!artifact) return null;

  const isCode = artifact.kind === "code";

  return (
    <figure className="v5-fade-up" style={{ margin: "24px 0", padding: 0 }}>
      <figcaption
        className="v5-ui-label flex items-center justify-between"
        style={{
          paddingBottom: "8px",
          borderBottom: "1px solid var(--v5-border-light)",
          marginBottom: 0,
        }}
      >
        <span className="flex items-center gap-2">
          <File size={14} strokeWidth={1.5} />
          {artifact.title}
          {artifact.language && (
            <span style={{ fontWeight: 400, textTransform: "none", opacity: 0.7 }}>({artifact.language})</span>
          )}
        </span>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setExpanded(!expanded)}
            className="v5-btn-ghost v5-ui-micro"
            style={{ padding: "4px 8px", borderRadius: "4px" }}
            aria-expanded={expanded}
            aria-controls={contentId}
          >
            {expanded ? "Collapse" : "Expand"}
          </button>
          <button
            onClick={() => onSelect(block.artifactId)}
            className="v5-btn-ghost v5-ui-micro"
            style={{ padding: "4px 8px", borderRadius: "4px", color: "var(--v5-accent)", fontWeight: 600 }}
          >
            View
          </button>
        </div>
      </figcaption>

      <div id={contentId} className={`v5-collapsible ${expanded ? "v5-collapsible-open" : "v5-collapsible-closed"}`}>
        <pre
          style={{
            fontFamily: isCode ? "var(--v5-mono)" : "var(--v5-sans)",
            fontSize: isCode ? "0.82rem" : "0.85rem",
            lineHeight: 1.6,
            color: "var(--v5-text-secondary)",
            background: "var(--v5-code-bg)",
            padding: "16px 20px",
            margin: 0,
            borderRadius: "0 0 6px 6px",
            border: "1px solid var(--v5-border-light)",
            borderTop: "none",
            overflowX: "auto",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {artifact.content}
        </pre>
      </div>

      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          style={{
            display: "block",
            width: "100%",
            textAlign: "left",
            fontFamily: isCode ? "var(--v5-mono)" : "var(--v5-sans)",
            fontSize: "0.8rem",
            lineHeight: 1.5,
            color: "var(--v5-text-muted)",
            background: "var(--v5-code-bg)",
            padding: "10px 20px",
            borderRadius: "0 0 6px 6px",
            border: "1px solid var(--v5-border-light)",
            borderTop: "none",
            cursor: "pointer",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          aria-label={`Expand ${artifact.title}`}
        >
          {artifact.content.split("\n")[0]}
          <span style={{ opacity: 0.5 }}> ...</span>
        </button>
      )}
    </figure>
  );
});
ArtifactBlockView.displayName = "ArtifactBlockView";

/* ------------------------------------------------------------------ */
/*  Tool Call Block                                                    */
/* ------------------------------------------------------------------ */

const ToolCallBlockView = memo<{ block: AIBlock & { type: "tool_call" }; footnoteNum: number }>(({ block, footnoteNum }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="v5-fade-up"
      style={{ margin: "8px 0", position: "relative", zIndex: showTooltip ? 40 : "auto" }}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
        <button
          className="v5-footnote-sup"
          onMouseEnter={() => setShowTooltip(true)}
          onClick={() => setShowTooltip(!showTooltip)}
          onKeyDown={(e) => { if (e.key === "Escape") setShowTooltip(false); }}
          aria-label={`Tool call ${footnoteNum}: ${block.toolCall.toolName}`}
          role="button"
          tabIndex={0}
        >
          [{footnoteNum}]
        </button>

        <span className="v5-ui-text" style={{ fontSize: "0.8rem" }}>
          {block.toolCall.toolName}
          <span style={{ color: "var(--v5-text-muted)", marginLeft: "8px", fontSize: "0.75rem" }}>
            {block.toolCall.argumentsJson.length > 80
              ? block.toolCall.argumentsJson.slice(0, 80) + "..."
              : block.toolCall.argumentsJson}
          </span>
        </span>
      </div>

      {showTooltip && (
        <div
          ref={tooltipRef}
          role="tooltip"
          className="v5-fade-up"
          style={{
            position: "absolute",
            left: 0,
            top: "100%",
            zIndex: 40,
            background: "var(--v5-bg-secondary)",
            border: "1px solid var(--v5-border)",
            borderRadius: "6px",
            padding: "10px 14px",
            boxShadow: "var(--v5-shadow-lg)",
            maxWidth: "min(360px, calc(100vw - 64px))",
            marginTop: "4px",
          }}
        >
          <div className="v5-ui-label" style={{ color: "var(--v5-accent)", marginBottom: "4px" }}>
            {block.toolCall.toolName}
          </div>
          <div className="v5-ui-micro" style={{ whiteSpace: "pre-wrap", wordBreak: "break-all", maxWidth: "320px" }}>
            {block.toolCall.argumentsJson.length > 200
              ? block.toolCall.argumentsJson.slice(0, 200) + "..."
              : block.toolCall.argumentsJson}
          </div>
        </div>
      )}
    </div>
  );
});
ToolCallBlockView.displayName = "ToolCallBlockView";

/* ------------------------------------------------------------------ */
/*  AI Step View                                                       */
/* ------------------------------------------------------------------ */

const AIStepView = memo<{
  step: AIStep;
  artifactsById: Record<string, Artifact>;
  onSelectArtifact: (id: string) => void;
  animDelay: number;
}>(({ step, artifactsById, onSelectArtifact, animDelay }) => {
  // Pre-compute footnote numbers and first-text tracking (must be before any returns)
  const blockMeta = useMemo(() => {
    let footnoteCount = 0;
    return step.blocks.map((block) => {
      if (block.type === "tool_call") {
        footnoteCount++;
        return { footnoteNum: footnoteCount };
      }
      return { footnoteNum: 0 };
    });
  }, [step.blocks]);

  // Pending state
  if (step.status === "pending") {
    return (
      <div className="v5-fade-up v5-body" style={{ padding: "16px 0", fontSize: "1.15rem", color: "var(--v5-text-muted)", fontStyle: "italic" }}>
        <span style={{ animation: "v5-pulse 1.5s ease-in-out infinite", display: "inline-block" }}>. . .</span>
      </div>
    );
  }

  // Streaming state
  if (step.status === "streaming") {
    return (
      <div className="v5-fade-up" style={{ animationDelay: `${animDelay}ms`, padding: "8px 0 16px 0" }}>
        {step.blocks.map((block) => {
          if (block.type === "text") {
            return (
              <p key={block.id} className="v5-body" style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--v5-text)", margin: "0 0 16px 0" }}>
                {block.text}
                <span style={{ animation: "v5-pulse 1s ease-in-out infinite", color: "var(--v5-accent)" }}>|</span>
              </p>
            );
          }
          return null;
        })}
      </div>
    );
  }

  // Error state
  if (step.status === "error") {
    return (
      <div className="v5-fade-up" style={{ padding: "16px 0" }}>
        <div
          className="v5-ui-text"
          style={{
            color: "var(--v5-accent)",
            fontStyle: "italic",
            padding: "12px 16px",
            background: "var(--v5-accent-light)",
            borderRadius: "6px",
            border: "1px solid var(--v5-accent-border)",
          }}
        >
          An error occurred while generating a response.
        </div>
      </div>
    );
  }

  return (
    <div className="v5-fade-up" style={{ animationDelay: `${animDelay}ms`, padding: "8px 0 16px 0" }}>
      {step.blocks.map((block, i) => {
        const meta = blockMeta[i];
        switch (block.type) {
          case "text":
            return <TextBlockView key={block.id} block={block} />;
          case "reasoning":
            return <ReasoningBlockView key={block.id} block={block} />;
          case "artifact":
            return (
              <ArtifactBlockView
                key={block.id}
                block={block}
                artifact={artifactsById[block.artifactId]}
                onSelect={onSelectArtifact}
              />
            );
          case "tool_call":
            return <ToolCallBlockView key={block.id} block={block} footnoteNum={meta.footnoteNum} />;
          default:
            return null;
        }
      })}
    </div>
  );
});
AIStepView.displayName = "AIStepView";

/* ------------------------------------------------------------------ */
/*  Tool Result Step                                                   */
/* ------------------------------------------------------------------ */

const ToolResultStepView = memo<{ step: Step & { type: "tool_result" } }>(({ step }) => (
  <div className="v5-fade-up v5-ui-micro" style={{ padding: "4px 0", fontStyle: "italic", letterSpacing: "0.03em" }}>
    [Tool completed: {step.toolName || "unknown"}]
  </div>
));
ToolResultStepView.displayName = "ToolResultStepView";

/* ------------------------------------------------------------------ */
/*  Artifact Modal                                                     */
/* ------------------------------------------------------------------ */

const ArtifactModal: React.FC<{
  artifact: Artifact | null;
  onClose: () => void;
}> = ({ artifact, onClose }) => {
  useEffect(() => {
    if (!artifact) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [artifact, onClose]);

  if (!artifact) return null;
  const isCode = artifact.kind === "code";

  return (
    <div className="v5-modal-bg" onClick={onClose} role="dialog" aria-modal="true" aria-label={artifact.title}>
      <div className="v5-modal-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid var(--v5-border)" }}
        >
          <div>
            <h3 className="v5-ui-text" style={{ fontWeight: 600, color: "var(--v5-text)", margin: 0 }}>
              {artifact.title}
            </h3>
            <span className="v5-ui-micro" style={{ marginTop: "2px", display: "inline-block" }}>
              {artifact.kind}{artifact.language ? ` \u00B7 ${artifact.language}` : ""}
            </span>
          </div>
          <button
            onClick={onClose}
            className="v5-btn-ghost flex items-center justify-center"
            style={{ width: "32px", height: "32px", borderRadius: "50%", color: "var(--v5-text-muted)" }}
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-5">
          <pre
            style={{
              fontFamily: isCode ? "var(--v5-mono)" : "var(--v5-sans)",
              fontSize: isCode ? "0.85rem" : "0.9rem",
              lineHeight: 1.65,
              color: "var(--v5-text)",
              background: "var(--v5-code-bg)",
              padding: "20px 24px",
              margin: 0,
              borderRadius: "8px",
              border: "1px solid var(--v5-border-light)",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {artifact.content}
          </pre>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Conversation Body                                                  */
/* ------------------------------------------------------------------ */

const ConversationBody: React.FC<{
  steps: Step[];
  artifactsById: Record<string, Artifact>;
  onSelectArtifact: (id: string) => void;
}> = ({ steps, artifactsById, onSelectArtifact }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollEndRef = useRef<HTMLDivElement>(null);
  const isNearBottomRef = useRef(true);
  const [showNewMsg, setShowNewMsg] = useState(false);
  const prevStepCountRef = useRef(steps.length);
  const lastStepId = steps[steps.length - 1]?.id;

  // Track scroll position
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const threshold = 120;
    const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < threshold;
    isNearBottomRef.current = nearBottom;
    if (nearBottom) setShowNewMsg(false);
  }, []);

  // Auto-scroll only when near bottom, otherwise show pill
  useEffect(() => {
    if (steps.length <= prevStepCountRef.current) {
      prevStepCountRef.current = steps.length;
      return;
    }
    prevStepCountRef.current = steps.length;

    if (isNearBottomRef.current) {
      scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setShowNewMsg(true);
    }
  }, [steps.length, lastStepId]);

  const scrollToBottom = useCallback(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowNewMsg(false);
  }, []);

  // Build conversation elements with flourishes
  const elements = useMemo(() => {
    const result: React.ReactNode[] = [];
    steps.forEach((step, idx) => {
      // Flourish between exchanges
      if (step.type === "user" && idx > 0) {
        const prevStep = steps[idx - 1];
        if (prevStep.type === "ai" || prevStep.type === "tool_result") {
          result.push(<Flourish key={`flourish-${idx}`} />);
        }
      }

      const delay = idx * 40;
      switch (step.type) {
        case "user":
          result.push(<UserStepView key={step.id} step={step} animDelay={delay} />);
          break;
        case "ai":
          result.push(
            <AIStepView
              key={step.id}
              step={step}
              artifactsById={artifactsById}
              onSelectArtifact={onSelectArtifact}
              animDelay={delay}
            />,
          );
          break;
        case "tool_result":
          result.push(<ToolResultStepView key={step.id} step={step} />);
          break;
      }
    });
    return result;
  }, [steps, artifactsById, onSelectArtifact]);

  if (steps.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center" style={{ minHeight: "40vh", textAlign: "center", padding: "80px 20px" }}>
        <p style={{ fontFamily: "var(--v5-display)", fontSize: "2rem", fontStyle: "italic", color: "var(--v5-text-muted)", margin: "0 0 12px 0" }}>
          Begin a new conversation
        </p>
        <DecorativeRule className="mb-3" />
        <p className="v5-ui-text" style={{ margin: 0 }}>
          Type your first message below to start.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={scrollContainerRef}
      onScroll={handleScroll}
      role="log"
      aria-live="polite"
      aria-label="Conversation"
      className="pb-8"
    >
      {elements}

      {showNewMsg && (
        <button className="v5-new-msg-pill" onClick={scrollToBottom}>
          <ChevronDown size={12} strokeWidth={2.5} />
          New messages
        </button>
      )}

      <div ref={scrollEndRef} />
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Composer                                                           */
/* ------------------------------------------------------------------ */

const Composer: React.FC<{
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  disabled: boolean;
}> = ({ value, onChange, onSend, disabled }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (!disabled && value.trim()) onSend();
      }
    },
    [disabled, value, onSend],
  );

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }, [value]);

  const canSend = !disabled && value.trim().length > 0;

  return (
    <div className="px-5 md:px-0 v5-safe-bottom" style={{ position: "sticky", bottom: 0, paddingTop: "16px", paddingBottom: "24px", background: "linear-gradient(to bottom, transparent 0%, var(--v5-bg) 20%)" }}>
      {/* Hint */}
      <div className="v5-ui-label" style={{ marginBottom: "6px", fontSize: "0.65rem", letterSpacing: "0.1em" }}>
        Compose
      </div>

      <div className="v5-composer-wrap flex items-end gap-3" style={{ paddingBottom: "8px" }}>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Write your message..."
          rows={1}
          disabled={disabled}
          className="v5-body"
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            resize: "none",
            fontSize: "1.05rem",
            lineHeight: 1.6,
            color: "var(--v5-text)",
            padding: "4px 0",
            opacity: disabled ? 0.5 : 1,
          }}
        />

        {/* Send button — text-based, editorial */}
        <button
          onClick={onSend}
          disabled={!canSend}
          className="v5-btn-ghost"
          style={{
            fontFamily: "var(--v5-sans)",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: canSend ? "var(--v5-accent)" : "var(--v5-text-muted)",
            padding: "6px 14px",
            borderRadius: "4px",
            cursor: canSend ? "pointer" : "default",
            opacity: canSend ? 1 : 0.4,
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
          aria-label="Send message"
        >
          Send &rarr;
        </button>
      </div>

      {/* Keyboard hint */}
      <div className="v5-ui-micro" style={{ marginTop: "4px", fontSize: "0.6rem", opacity: 0.5 }}>
        Enter to send &middot; Shift+Enter for new line
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main Page Component                                                */
/* ------------------------------------------------------------------ */

const AIChatV5Page: React.FC = () => {
  const {
    threads,
    artifactsById,
    activeThreadId,
    selectedArtifactId,
    composerText,
    themeSetting,
    createThread,
    selectThread,
    sendUserMessage,
    setComposerText,
    selectArtifact,
    setThemeSetting,
  } = useAIChat();

  const [showFolio, setShowFolio] = useState(false);
  const mastheadRef = useRef<HTMLDivElement>(null);

  const activeThread = useMemo(
    () => threads.find((t) => t.id === activeThreadId),
    [threads, activeThreadId],
  );

  const isAIResponding = useMemo(() => {
    if (!activeThread) return false;
    return activeThread.steps.some(
      (s) => s.type === "ai" && (s.status === "pending" || s.status === "streaming"),
    );
  }, [activeThread]);

  const selectedArtifact = useMemo(
    () => (selectedArtifactId ? artifactsById[selectedArtifactId] ?? null : null),
    [selectedArtifactId, artifactsById],
  );

  const handleSend = useCallback(() => {
    if (!composerText.trim() || isAIResponding) return;
    sendUserMessage(composerText);
  }, [composerText, isAIResponding, sendUserMessage]);

  const handleToggleTheme = useCallback(() => {
    setThemeSetting(themeSetting === "light" ? "dark" : "light");
  }, [themeSetting, setThemeSetting]);

  const handleCloseModal = useCallback(() => {
    selectArtifact(null);
  }, [selectArtifact]);

  const handleSelectArtifact = useCallback(
    (id: string) => {
      selectArtifact(id);
    },
    [selectArtifact],
  );

  // Running header: show when masthead scrolls out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowFolio(!entry.isIntersecting),
      { threshold: 0 },
    );
    const el = mastheadRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  // Focus composer when creating a new thread
  const prevThreadId = useRef(activeThreadId);
  useEffect(() => {
    if (activeThreadId && activeThreadId !== prevThreadId.current) {
      prevThreadId.current = activeThreadId;
      // Small delay so the DOM has updated
      const t = setTimeout(() => {
        const textarea = document.querySelector<HTMLTextAreaElement>("[data-section='aichat-v5'] textarea");
        textarea?.focus();
      }, 100);
      return () => clearTimeout(t);
    }
  }, [activeThreadId]);

  return (
    <>
      <StyleInjector />
      <div
        data-section="aichat-v5"
        data-theme={themeSetting}
        className="v5-theme-transition"
        style={{
          minHeight: "100vh",
          background: "var(--v5-bg)",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        {/* Running header */}
        <RunningHeader
          title={activeThread?.title || "Conversations"}
          visible={showFolio}
        />

        {/* Centered column */}
        <div className="mx-auto" style={{ maxWidth: "680px", width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          {/* Masthead */}
          <div ref={mastheadRef}>
            <Masthead
              threads={threads}
              activeThreadId={activeThreadId}
              themeSetting={themeSetting}
              onSelectThread={selectThread}
              onCreateThread={createThread}
              onToggleTheme={handleToggleTheme}
            />
          </div>

          {/* Conversation */}
          <main className="flex-1 px-5 md:px-0" style={{ paddingTop: "8px" }}>
            <ConversationBody
              steps={activeThread?.steps || EMPTY_STEPS}
              artifactsById={artifactsById}
              onSelectArtifact={handleSelectArtifact}
            />
          </main>

          {/* Composer */}
          <Composer
            value={composerText}
            onChange={setComposerText}
            onSend={handleSend}
            disabled={isAIResponding}
          />
        </div>

        {/* Artifact modal */}
        <ArtifactModal artifact={selectedArtifact} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default AIChatV5Page;
