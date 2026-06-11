/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: "#6A1B9A",
          dark: "#7D2BE0",
        },
        orange: {
          cta: "#FF5D23",
        },
        gold: {
          accent: "#FFD700",
        },
        dark: {
          bg: "#1f1f1f",
          text: "#202020",
        },
        gray: {
          secondary: "#626262",
          tertiary: "#6a7f76",
        },
      },
      spacing: {
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        "4xl": "4rem",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        sm: "0 2px 8px rgba(18, 29, 27, 0.08)",
        md: "0 10px 20px rgba(18, 29, 27, 0.12)",
        lg: "0 20px 40px rgba(18, 29, 27, 0.16)",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
