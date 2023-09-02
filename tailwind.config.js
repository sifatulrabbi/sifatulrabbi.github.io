module.exports = {
    content: [
        "./pages/**/*.{tsx,ts,js,jsx}",
        "./components/**/*.{tsx,ts,jsx,js}",
        "./modules/**/*.{tsx,ts,jsx,js}",
    ],
    darkMode: "class",
    theme: {
        fontFamily: {
            primary: ["Fira Sans", "sans-serif"],
            secondary: ["Noto Serif", "serif"],
            monospace: ["Fira Code", "monospace"],
        },
        extend: {
            colors: {
                primary: "#0070ff",
                secondary: "#FF8F00",
                textPrimary: "",
                textSecondary: "",
                bgContainer: {
                    light: "#fff",
                    dark: "#1C2532",
                },
            },
        },
    },
    plugins: [],
};
