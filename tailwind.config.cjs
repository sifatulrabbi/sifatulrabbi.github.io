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
      },
      fontFamily: {
        display: ["Fira Code", "JetBrains Mono", "monospace"],
        body: ["Fira Code", "JetBrains Mono", "monospace"],
        mono: ["Fira Code", "JetBrains Mono", "monospace"],
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
