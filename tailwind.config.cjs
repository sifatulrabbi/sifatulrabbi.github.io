/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts}", "*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          "200": "#338DFF",
          "400": "#0070FF",
          "600": "#0F00FF",
        },
        terminal: {
          // Backgrounds
          background: "var(--terminal-background)",
          surface: "var(--terminal-surface)",
          "surface-hover": "var(--terminal-surface-hover)",
          border: "var(--terminal-border)",
          "border-dim": "var(--terminal-border-dim)",

          // Text colors
          primary: "var(--terminal-primary)",
          secondary: "var(--terminal-secondary)",
          accent: "var(--terminal-accent)",

          // Syntax highlighting
          keyword: "var(--terminal-keyword)",
          string: "var(--terminal-string)",
          number: "var(--terminal-number)",
          comment: "var(--terminal-comment)",
          function: "var(--terminal-function)",
          variable: "var(--terminal-variable)",

          // Terminal specific
          prompt: "var(--terminal-prompt)",
          success: "var(--terminal-success)",
          error: "var(--terminal-error)",
          warning: "var(--terminal-warning)",
          info: "var(--terminal-info)",
        },
        aichat: {
          // Backgrounds
          background: "var(--aichat-background)",
          surface: "var(--aichat-surface)",
          "surface-hover": "var(--aichat-surface-hover)",
          border: "var(--aichat-border)",
          "border-dim": "var(--aichat-border-dim)",

          // Text colors
          primary: "var(--aichat-primary)",
          secondary: "var(--aichat-secondary)",
          accent: "var(--aichat-accent)",

          // Syntax highlighting
          keyword: "var(--aichat-keyword)",
          string: "var(--aichat-string)",
          number: "var(--aichat-number)",
          comment: "var(--aichat-comment)",
          function: "var(--aichat-function)",
          variable: "var(--aichat-variable)",

          // UI accents
          prompt: "var(--aichat-prompt)",
          success: "var(--aichat-success)",
          error: "var(--aichat-error)",
          warning: "var(--aichat-warning)",
          info: "var(--aichat-info)",
          user: "var(--aichat-user)",
        },
      },
      fontFamily: {
        display: ["Fira Code", "JetBrains Mono", "monospace"],
        body: ["Fira Code", "JetBrains Mono", "monospace"],
        mono: ["Fira Code", "JetBrains Mono", "monospace"],
        aichat: ["var(--aichat-font-body)", "Fira Code", "JetBrains Mono", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
