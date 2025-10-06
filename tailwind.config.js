/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'border-blink': 'border-blink 1.5s infinite', // Apply animation: name, duration, repetition
      },
      keyframes: {
        'border-blink': {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'rgb(239 68 68 / 1)' }, 
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
