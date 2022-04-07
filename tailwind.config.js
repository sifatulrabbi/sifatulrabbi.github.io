const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./pages/**/*.{tsx,ts,js,jsx}",
        "./components/**/*.{tsx,ts,jsx,js}",
        "./features/**/*.{tsx,ts,jsx,js}",
    ],
    darkMode: "class",
    theme: {
        fontFamily: {
            primary: ["Fira Sans", "sans-serif"],
            secondary: ["Noto Serif", "serif"],
        },
        extend: {
            colors: {
                primary: "#0070ff",
                secondary: "#576f8e",
            },
        },
    },
    plugins: [],
};
