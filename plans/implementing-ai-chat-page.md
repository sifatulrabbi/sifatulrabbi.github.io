Final implementation plan (frontend-only, thread/step based)

Goals (this iteration)

- Build `/ai-chat` UI with 3 panels: left Threads, middle Steps + bottom-fixed composer, right Artifacts panel.
- Use a thread → steps data model where each step is `user` | `ai` | `tool_result`, and AI steps contain typed content blocks (`text` | `reasoning` | `artifact` | `tool_call`).
- Ship with mock data + local state (optional localStorage persistence) so the UI is fully interactive without OpenRouter wired yet.

Non-goals (later)

- OpenRouter/OpenAI-compatible networking, streaming, auth, tool execution runtime.
- Thread branching, artifact diff/version history UI (we’ll structure data so it’s easy later).

1. Data model (Typescript)
   Add `src/types/aichat.d.ts` and export it from `src/types/index.d.ts`.

Core entities

- `Thread`
  - `id`, `title`, `createdAt`, `updatedAt`
  - `model?: string` (per-thread)
  - `steps: Step[]`
- `Step` (union)
  - `UserStep`: `{ id, type:"user", createdAt, content: { text }, attachments?: Attachment[], status?: "complete" }`
  - `AIStep`: `{ id, type:"ai", createdAt, status:"pending"|"streaming"|"complete"|"error", blocks: AICanvasBlock[] }`
  - `ToolResultStep`: `{ id, type:"tool_result", createdAt, toolCallId, toolName?: string, status:"complete"|"error", output: { text?: string, json?: unknown } }`

AI blocks inside an `AIStep`

- `TextBlock`: `{ id, type:"text", text }`
- `ReasoningBlock`: `{ id, type:"reasoning", text }` (UI collapsible, default collapsed)
- `ArtifactBlock`: `{ id, type:"artifact", artifactId }`
- `ToolCallBlock`: `{ id, type:"tool_call", toolCall: { toolCallId, toolName, argumentsJson } }`

Artifacts as first-class entities (separate from steps)

- `Artifact`
  - `id`, `title`, `kind:"code"|"markdown"|"html"|"json"|"text"`, `language?: string`
  - `createdAt`, `updatedAt`
  - `content` (string)
  - optional `version` later (we’ll keep the shape ready but UI shows “latest” only)

2. State management (Provider)
   Expand `src/modules/AIChat/context/ai-chat-provider.tsx` and add:

- `src/modules/AIChat/context/ai-chat-context.tsx` (context + types)
- `src/modules/AIChat/hooks/useAIChat.ts` (hook wrapper)

Provider state (domain + UI)

- Domain:
  - `threads: Thread[]`
  - `artifactsById: Record<string, Artifact>`
  - `activeThreadId: string | null`
- UI:
  - `sidebarOpen: boolean` (mobile)
  - `artifactsOpen: boolean` (mobile/tablet)
  - `selectedArtifactId: string | null`
  - `composerText: string`
- Actions:
  - `createThread()`, `selectThread(id)`
  - `sendUserMessage(text)` (adds `UserStep`, optionally adds placeholder `AIStep` for UI)
  - `setComposerText(text)`
  - `selectArtifact(id)`
  - `toggleSidebar()`, `toggleArtifacts()`

Optional persistence (recommended now)

- Save/load `{ threads, artifactsById, activeThreadId }` to localStorage under a versioned key like `aiChat.v1`.
- Keep UI-only flags out of persistence.

3. UI layout + behavior
   Implement in `src/modules/AIChat/index.tsx` using a composed layout component.

Layout (desktop-first, responsive)

- Root: `h-[100dvh] w-full flex bg-terminal-background text-terminal-primary`
- Left sidebar (threads):
  - Fixed width (e.g. `w-[280px]`), `border-r border-terminal-border`, scrollable list.
- Middle (chat):
  - `flex-1 min-w-0 flex flex-col`
  - History area: `flex-1 overflow-y-auto terminal-scrollbar`
  - Composer: “bottom-fixed within middle” via `sticky bottom-0` (so it stays visible while history scrolls).
- Right panel (artifacts):
  - Fixed width (e.g. `w-[360px]`), `border-l border-terminal-border`, scrollable.
  - Shows artifact list + selected artifact preview.

Responsive rules

- `lg`: show all three panels.
- `md`: hide right artifacts by default, toggle via button; sidebar can remain.
- `sm`: sidebar becomes overlay drawer; artifacts becomes overlay drawer; middle stays full-width.

Core UX details

- Auto-scroll history to bottom when new steps arrive, but don’t fight the user if they’ve scrolled up (simple threshold check).
- Enter to send, Shift+Enter for newline.
- Reasoning blocks collapsed with a small “Show reasoning” toggle.
- Tool calls/results rendered as distinct “system” cards with status badges.

4. Components (minimal but clean)
   Create `src/modules/AIChat/components/`:

- `AIChatLayout.tsx` (arranges 3 panels + mobile toggles)
- `ThreadsSidebar.tsx` (thread list, “New thread”, active highlight)
- `ChatHistory.tsx` (renders steps)
- `StepRenderer.tsx` (switch on step type)
- `UserMessage.tsx`
- `AIMessage.tsx` (renders blocks)
- `ReasoningBlockView.tsx`
- `ToolCallView.tsx`
- `ToolResultView.tsx`
- `ChatComposer.tsx` (textarea + send button)
- `ArtifactsPanel.tsx` (artifact list + preview)
- `ArtifactPreview.tsx` (renders content by kind; code uses `<pre><code>`)

5. Mock data for development
   Seed provider with:

- 2–4 threads (different titles/models)
- Threads contain mixed steps including:
  - AI step with text + reasoning + artifact + tool_call
  - A tool_result step correlated by `toolCallId`
- 2–3 artifacts in `artifactsById`, referenced by `ArtifactBlock`

6. Acceptance criteria (ready to implement OpenRouter later)

- `/ai-chat` shows threads, selecting a thread loads its steps.
- Composer adds a new `UserStep` to active thread and keeps input pinned at bottom.
- AI steps render mixed blocks; reasoning collapses; tool call + tool result correlation is visible.
- Artifacts panel lists artifacts referenced in the active thread; selecting shows preview.
- Works on mobile with sidebar/artifacts toggles; no layout overflow issues.

If you’re aligned with “fixed-width panels (no drag-resize) for v1” and “reasoning collapsed by default,” we’re unblocked to start implementation.
