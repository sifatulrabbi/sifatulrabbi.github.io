# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built as an interactive terminal-first interface. The portfolio simulates a Unix-like terminal where visitors can navigate through experiences, projects, and blog content using familiar command-line commands (ls, cd, cat, etc.).

**Tech Stack:**
- React 18 with TypeScript
- Vite (development server runs on port 3000)
- React Router for routing
- TailwindCSS for styling
- Bun as the test runner (Jest)

## Common Commands

### Development
```bash
npm run dev          # Start dev server on port 3000 (DO NOT run automatically)
npm run build        # TypeScript compilation + Vite build
npm run preview      # Preview production build
npm run lint         # Run ESLint with TypeScript
npm run format-code  # Format code with Prettier
npm run test         # Run tests with Bun/Jest
```

### Testing
- Tests are located in `/tests` directory
- Use `bunx jest` to run tests
- Test files use `.test.ts` or `.test.tsx` extensions

## Code Architecture

### Module-Based Structure

The codebase follows a module-based architecture where each major feature is self-contained:

**Modules** (`src/modules/`):
- `TerminalMode/` - Core terminal interface and command system
- `Blogs/` - Blog browsing and reading functionality
- `LiveApps/` - Interactive utilities (HTML viewer, markdown converter)

Each module typically contains:
- Component files
- Context provider and context definition
- Route configuration
- Module-specific services and data

### Terminal Command System

The terminal interface (`TerminalMode` module) implements a class-based command pattern where each command is a separate class implementing the `TerminalHistory` interface:

**Key classes in `terminalService.ts`:**
- `ls` - List directory contents
- `cd` - Change directory
- `cat` - Display file contents
- `ListExp` - Display experiences (with args: `all` or specific ID)
- `ListProjects` - Display projects (with args: `all` or specific ID)
- `Help` - Show available commands
- `Echo`, `Time`, `Exit` - Utility commands
- `InvalidCommand` - Handles unknown commands

**Virtual File System:**
- Implemented in `directories.ts` using the `Entry` class
- Creates a tree structure of directories and files
- Files contain markdown content (experiences, projects, contact info)
- The `FileEntry` interface defines the contract for navigation

### Context Pattern

The project uses React Context extensively for state management:

**Terminal Context** (`terminalModeContext.tsx`):
```typescript
{
  history: TerminalHistory[]     // Command execution history
  executing: boolean             // Command in progress
  currentDir: FileEntry          // Current directory in virtual FS
  runCommand: () => Promise<void>
}
```

**Blogs Context** (`blogsContext.tsx`):
```typescript
{
  allArticles: ArticleEntry[]
  selectedArticle: ArticleItem | null
  searchQuery: string
  busy: boolean
  // ... methods for fetching and managing blog data
}
```

### Path Aliasing

TypeScript paths are configured with `@/*` alias pointing to `src/`:
```typescript
import { Component } from "@/components"
import { useTerminalMode } from "@/modules/TerminalMode/terminalModeContext"
```

### Styling Approach

- TailwindCSS with custom terminal-themed color classes
- Custom classes like `text-terminal-accent`, `text-terminal-success`, `text-terminal-string`
- Typography plugin enabled for markdown content rendering

### Markdown Rendering

- Uses `marked` library to convert markdown to HTML
- Command outputs (especially from `ListExp`, `ListProjects`, `cat`) return markdown
- Rendered HTML is displayed in the terminal interface

## Key Files

- `src/Router.tsx` - Main routing configuration
- `src/modules/TerminalMode/terminalService.ts` - All terminal command implementations
- `src/modules/TerminalMode/directories.ts` - Virtual file system implementation
- `src/modules/TerminalMode/experienceData.ts` - Experience content data
- `src/modules/TerminalMode/projectsData.ts` - Project content data
- `src/types/` - TypeScript type definitions organized by module

## Build Configuration

- **Vite**: Uses SWC plugin for fast React refresh
- **TypeScript**: Strict mode enabled with ES2020 target
- **ESLint**: Configured for React + TypeScript
- **PostCSS**: Configured with Tailwind and Autoprefixer

## Important Notes

- Use double quotes for strings (per user's global CLAUDE.md)
- Git operations (add, commit) should be done by the user
- Never auto-run dev server
- Testing must be done by the user - do not attempt to test with bash scripts
