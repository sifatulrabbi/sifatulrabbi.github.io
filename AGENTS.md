# AGENTS.md

Personal portfolio at sifatulrabbi.com: a React + Vite + Tailwind SPA that simulates a Unix terminal (`ls`, `cd`, `cat`, …) over a virtual file system of experiences, projects, and contact info.

## Tooling

- Bun is the package manager and runner: `bun install`, `bun run build`, `bun run test`, `bun run lint`. The lockfile is `bun.lock`; keep npm and `package-lock.json` out.
- The user runs the dev server (`bun run dev`, port 3000); leave it to them.
- Tests live in `tests/` and run under Jest via Bun.

## Hosting

- The site is self-hosted on the user's Mac: Homebrew nginx serves `dist/` straight from this repo (`/opt/homebrew/etc/nginx/servers/sifatulrabbi.com.conf`), exposed to the internet through a Cloudflare Tunnel (`cloudflared`).
- Deploying is local and manual: get the change onto `main`, pull, then `bun run build`. nginx picks up the new `dist/` without a restart. There is no CI/CD.
- When the live site looks stale, compare what `main` contains with what was built before touching nginx, Cloudflare, or the tunnel.
- GitHub Pages stays on because this is a `<user>.github.io` repo; it publishes the raw repo at sifatulrabbi.github.io and has nothing to do with the live domain.

## Where things live

- Profile, experiences, and skills: `src/content/` is the single source of truth; edit content there.
- Projects: `src/modules/TerminalMode/data/projectsData.ts`.
- Terminal commands: one class per command in `src/modules/TerminalMode/terminalService.ts`, dispatched from `src/modules/TerminalMode/context/TerminalModeProvider.tsx`, and listed in the `Help` command. A new command touches all three.
- Virtual file system: `src/modules/TerminalMode/directories.ts`; names are matched fuzzily (lowercased, spaces stripped, prefix match).
- Command output is markdown or HTML, rendered with `marked`.
