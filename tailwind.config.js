module.exports = {
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./src/**/*.{tsx,ts,js,jsx}",
		"./public/**/*.html",
	],
	darkMode: "class",
	theme: {
		fontFamily: {
			primary: ["Plus Jakarta Sans", "sans-serif"],
			monospace: ["Fira Code", "monospace"],
		},
		extend: {
			colors: {
				primary: "#1778F2",
				secondary: "#FF9C28",
				error: "#FF4A4A",
				success: "#00C274",
				warning: "#FFB156",
				dark: "#242E42",
				textSecondary: "#717784",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
}
