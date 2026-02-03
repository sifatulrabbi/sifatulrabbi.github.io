import React, { useCallback, useEffect, useRef, useState } from "react";
import { AIChatContext } from "./ai-chat-context";
import { mockThreads, mockArtifacts } from "../data/mockData";
import type {
  Thread,
  Artifact,
  AIChatState,
  AIChatActions,
  AIChatContextValue,
  UserStep,
  AIStep,
} from "@/types";

const STORAGE_KEY = "aiChat.v1";
const THEME_STORAGE_KEY = "aiChat.theme";

interface PersistedState {
  threads: Thread[];
  artifactsById: Record<string, Artifact>;
  activeThreadId: string | null;
}

const generateId = () =>
  `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

const AIChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [threads, setThreads] = useState<Thread[]>(mockThreads);
  const [artifactsById, setArtifactsById] =
    useState<Record<string, Artifact>>(mockArtifacts);
  const [activeThreadId, setActiveThreadId] = useState<string | null>(
    mockThreads[0]?.id || null,
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [artifactsOpen, setArtifactsOpen] = useState(false);
  const [selectedArtifactId, setSelectedArtifactId] = useState<string | null>(
    null,
  );
  const [composerText, setComposerText] = useState("");
  const [themeSetting, setThemeSetting] = useState<"system" | "light" | "dark">(
    () => {
      if (typeof window === "undefined") return "system";
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === "light" || stored === "dark" || stored === "system") {
        return stored;
      }
      return "system";
    },
  );
  const [activeTheme, setActiveTheme] = useState<"light" | "dark">("dark");
  const previousThemeRef = useRef<string | null>(null);
  const previousOverflowRef = useRef<string>("");

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: PersistedState = JSON.parse(stored);
        if (parsed.threads?.length > 0) {
          setThreads(parsed.threads);
          setArtifactsById(parsed.artifactsById);
          setActiveThreadId(parsed.activeThreadId);
        }
      }
    } catch {
      // Ignore storage errors, use mock data
    }
  }, []);

  useEffect(() => {
    previousThemeRef.current = document.body.getAttribute("data-theme");
    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "auto";

    return () => {
      const previousTheme = previousThemeRef.current;
      if (previousTheme) {
        document.body.setAttribute("data-theme", previousTheme);
      } else {
        document.body.removeAttribute("data-theme");
      }
      document.body.style.overflow = previousOverflowRef.current;
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const systemTheme = mediaQuery.matches ? "dark" : "light";
      const resolvedTheme = themeSetting === "system" ? systemTheme : themeSetting;
      document.body.setAttribute("data-theme", resolvedTheme);
      setActiveTheme(resolvedTheme);
    };

    applyTheme();

    const handleChange = () => {
      if (themeSetting === "system") {
        applyTheme();
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [themeSetting]);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, themeSetting);
    } catch {
      // Ignore storage errors
    }
  }, [themeSetting]);

  // Persist to localStorage when domain state changes
  useEffect(() => {
    try {
      const toPersist: PersistedState = {
        threads,
        artifactsById,
        activeThreadId,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toPersist));
    } catch {
      // Ignore storage errors
    }
  }, [threads, artifactsById, activeThreadId]);

  const createThread = useCallback(() => {
    const newThread: Thread = {
      id: generateId(),
      title: "New conversation",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      model: "claude-3-opus",
      steps: [],
    };
    setThreads((prev) => [newThread, ...prev]);
    setActiveThreadId(newThread.id);
  }, []);

  const selectThread = useCallback((id: string) => {
    setActiveThreadId(id);
    setSelectedArtifactId(null);
    setSidebarOpen(false);
  }, []);

  const sendUserMessage = useCallback(
    (text: string) => {
      if (!activeThreadId || !text.trim()) return;

      const userStep: UserStep = {
        id: generateId(),
        type: "user",
        createdAt: new Date().toISOString(),
        content: { text: text.trim() },
        status: "complete",
      };

      // Add placeholder AI step for UI
      const aiStep: AIStep = {
        id: generateId(),
        type: "ai",
        createdAt: new Date().toISOString(),
        status: "pending",
        blocks: [],
      };

      setThreads((prev) =>
        prev.map((thread) =>
          thread.id === activeThreadId
            ? {
                ...thread,
                steps: [...thread.steps, userStep, aiStep],
                updatedAt: new Date().toISOString(),
              }
            : thread,
        ),
      );

      setComposerText("");

      // Simulate AI response after delay
      setTimeout(() => {
        setThreads((prev) =>
          prev.map((thread) =>
            thread.id === activeThreadId
              ? {
                  ...thread,
                  steps: thread.steps.map((step) =>
                    step.id === aiStep.id
                      ? {
                          ...step,
                          status: "complete" as const,
                          blocks: [
                            {
                              id: generateId(),
                              type: "text" as const,
                              text: `I received your message: "${text.trim()}". This is a mock response for demonstration purposes. In the future, this will connect to OpenRouter for real AI responses.`,
                            },
                          ],
                        }
                      : step,
                  ),
                }
              : thread,
          ),
        );
      }, 1000);
    },
    [activeThreadId],
  );

  const selectArtifact = useCallback((id: string | null) => {
    setSelectedArtifactId(id);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const toggleArtifacts = useCallback(() => {
    setArtifactsOpen((prev) => !prev);
  }, []);

  const state: AIChatState = {
    threads,
    artifactsById,
    activeThreadId,
    sidebarOpen,
    artifactsOpen,
    selectedArtifactId,
    composerText,
    themeSetting,
    activeTheme,
  };

  const actions: AIChatActions = {
    createThread,
    selectThread,
    sendUserMessage,
    setComposerText,
    selectArtifact,
    toggleSidebar,
    toggleArtifacts,
    setThemeSetting,
  };

  const value: AIChatContextValue = { ...state, ...actions };

  return (
    <AIChatContext.Provider value={value}>{children}</AIChatContext.Provider>
  );
};

export default AIChatProvider;
