module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}"],
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
        secondary: "#576f8e",
      },
    },
  },
  plugins: [],
};
