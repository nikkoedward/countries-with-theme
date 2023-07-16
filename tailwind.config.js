/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: {
          DEFAULT: "hsl(0, 0%, 100%)",
        },
        blue: {
          light: "hsl(200, 15%, 8%)",
          dark: "hsl(209, 23%, 22%)",
          darker: "hsl(207, 26%, 17%)",
        },
        gray: {
          light: "hsl(0, 0%, 98%)",
          dark: "hsl(0, 0%, 52%)",
        },
      },
      maxWidth: {
        pageContent: "120rem",
      },
      spacing: {
        7.5: "1.875rem",
        12.5: "3.125rem",
      },
      fontSize: {
        "2xl": "1.375rem",
        "3xl": "1.5rem",
        "4xl": "1.875rem",
        "5xl": "2.25rem",
        "6xl": "3rem",
        "7xl": "3.75rem",
        "8xl": "4.5rem",
        "9xl": "6rem",
        "10xl": "8rem",
      },
    },
  },
  plugins: [],
};
