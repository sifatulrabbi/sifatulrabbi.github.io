# AI Chat Scoped Theming (Tailwind Tokens)

Date: 2026-02-03

## Summary
Move AI Chat theming to a scoped token namespace (`aichat`) backed by CSS variables and applied only within the `/ai-chat` route container. Remove global `body` theme mutations for AI Chat, and simplify theme toggling to light/dark only.

## Goals
- Scope AI Chat colors/fonts to `/ai-chat` without affecting other routes.
- Use Tailwind utilities for AI Chat styling via `aichat-*` tokens.
- Keep current AI Chat palette for now (rename/namespace only).
- Simplify theme toggle to Light/Dark and persist to localStorage.

## Non-Goals
- Redesigning the AI Chat color palette or typography.
- Changing Terminal Mode theming.
- Implementing system theme preference for AI Chat.

## Architecture
### Token Strategy
- Add `aichat` color namespace in `tailwind.config.cjs`, mirroring existing `terminal` keys.
- Map each `aichat` key to a CSS variable: `--aichat-background`, `--aichat-primary`, etc.
- Add `fontFamily.aichat` (and optionally `fontFamily.aichatMono`) that reference CSS variables, defaulting to current mono stack.

### CSS Variable Scoping
- Define AI Chat variables in `src/styles/index.css` under a scoped selector:
  - `[data-section="aichat"] { ... }`
  - `[data-section="aichat"][data-theme="light"] { ... }` for light overrides.
- Keep existing `terminal` variables untouched at `:root` and `body[data-theme]` for Terminal Mode.

### Route Scoping
- Wrap `/ai-chat` root layout in a container with:
  - `data-section="aichat"`
  - `data-theme={themeSetting}` where `themeSetting` is `"light" | "dark"`.
- No changes to `document.body` from AI Chat.

## UI & State
- Update AI Chat theme state to `"light" | "dark"` only.
- Persist selection to localStorage (same key or a new versioned key).
- Theme toggle button flips between light/dark, with label reflecting current setting.
- If `activeTheme` is redundant, replace with `themeSetting` directly; otherwise keep a derived `activeTheme`.

## Component Changes
- Replace `terminal-*` Tailwind classes in `/src/modules/AIChat/**` with `aichat-*` equivalents.
- Keep terminal-specific components using `terminal-*` unchanged.

## Error Handling
- localStorage read/write failures fall back to `dark` and remain non-fatal.
- No imperative DOM mutations for theme state (render-driven attributes only).

## Testing Checklist
- `/ai-chat`: toggle Light/Dark; ensure only AI Chat container changes.
- Navigate to other routes; verify theming is unchanged.
- Refresh `/ai-chat`; confirm theme persistence.
- Check readability/contrast in key areas: sidebar, composer, chat history, artifacts.

## Open Questions
- None for initial implementation (palette changes can be made later by editing `--aichat-*`).
