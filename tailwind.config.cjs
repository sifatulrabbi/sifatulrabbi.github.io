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
                    background: "#0D1117",
                    surface: "#161B22",
                    "surface-hover": "#1C2128",
                    border: "#30363D",
                    "border-dim": "#21262D",

                    // Text colors
                    primary: "#C9D1D9",
                    secondary: "#8B949E",
                    accent: "#58A6FF",

                    // Syntax highlighting
                    keyword: "#FF7B72",
                    string: "#A5D6FF",
                    number: "#79C0FF",
                    comment: "#8B949E",
                    function: "#D2A8FF",
                    variable: "#FFA657",

                    // Terminal specific
                    prompt: "#7EE787",
                    success: "#7EE787",
                    error: "#FF7B72",
                    warning: "#FFA657",
                    info: "#79C0FF",
                },
            },
            fontFamily: {
                display: ["JetBrains Mono", "monospace"],
                body: ["JetBrains Mono", "monospace"],
                mono: ["JetBrains Mono", "monospace"],
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
