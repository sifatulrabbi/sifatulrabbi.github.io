module.exports = {
    content: [
        "./pages/**/*.{tsx,ts,js,jsx}",
        "./components/**/*.{tsx,ts,jsx,js}",
        "./features/**/*.{tsx,ts,jsx,js}",
    ],
    theme: {
        fontFamily: {
            primary: ["Epilogue", "sans-serif"],
            secondary: ["IBM Plex Sans", "serif"],
            mono: ["JetBrains Mono", "monospace"],
        },
        colors: {
            primary: "#0070FF",
            secondary: "#576F8E",
            // black: "#0D1520",
            black: "#181818",
            white: "#fff",
        },
    },
    plugins: [],
};
