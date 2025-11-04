/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,tsx,ts}", "*.html"],
    theme: {
        extend: {
            colors: {
                primary: {
                    "50": "#f0f9ff",
                    "100": "#e0f2fe",
                    "200": "#bae6fd",
                    "300": "#7dd3fc",
                    "400": "#38bdf8",
                    "500": "#0ea5e9",
                    "600": "#0284c7",
                    "700": "#0369a1",
                    "800": "#075985",
                    "900": "#0c4a6e",
                },
                accent: {
                    purple: "#a855f7",
                    cyan: "#06b6d4",
                    violet: "#8b5cf6",
                    pink: "#ec4899",
                    indigo: "#6366f1",
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'gradient-accent': 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
                'gradient-hero': 'linear-gradient(to bottom right, #1e1b4b 0%, #312e81 50%, #1e293b 100%)',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
                'glow-lg': '0 0 30px rgba(139, 92, 246, 0.4)',
                'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
                'primary': '0 10px 40px rgba(14, 165, 233, 0.2)',
            },
            fontFamily: {
                display: ["Montserrat", "sans-serif"],
                body: ["Roboto", "sans-serif"],
                mono: ["Fira Code", "monospace"],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-down': 'slideDown 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glowPulse 2s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
                    '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
