/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sun-light": "#F9EFD9",
        "nature-green": "#7CA55D",
        "woody-brown": "#4C3A2A",
        "warm-yellow": "#F2C94C",
        bg: "#dfe9d5",
        "sub-bg": "#f5f0e1",
        point: "#ffe86c",
        text: "#2d2d2d",
        "sun-light2": "#F3E4B8",
        white2: "#fcfafa",
      },
      spacing: {
        "1/10": "10%",
        "1/5": "20%",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
      },
      borderRadius: {
        xs: "0.125rem", // 2px
        sm: "0.25rem", // 4px
        DEFAULT: "0.375rem", // 6px
        md: "0.5rem", // 8px
        lg: "0.75rem", // 12px
        xl: "1rem", // 16px
        "2xl": "1.5rem", // 24px
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [],
};
