/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        robotaur: ['"Robotaur 3D"', 'sans-serif'],
        godzillasofuro: ['GodzillaOfuro', 'sans-serif'],
        dualityregular: ['Duality-Regular', 'sans-serif']
      },
    },
  },
  plugins: [],
};
