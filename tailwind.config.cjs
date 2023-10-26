/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,tsx,ts}", "*.html"],
    theme: {
        extend: {
            colors: {
                primary: {
                    "200": "##338DFF",
                    "400": "#0070FF",
                    "600": "#0F00FF",
                },
            },
            fontFamily: {
                display: ["Montserrat", "sans-serif"],
                body: ["Nunito", "sans-serif"],
                mono: ["Fira Code", "monospace"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
