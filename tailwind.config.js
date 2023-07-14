/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Noto: ["Noto", "Sans", "Thai", "sans-serif"],
      },
      colors: {
        text: "#111111",
        "primary-button": "#0ac5a8",
        background: "#ffffff",
        darkBackground: "#2C3730",
        "secondary-button": "#efebeb",
        accent: "#768f93",
      },
    },
  },

  plugins: [],
};
