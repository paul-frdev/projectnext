/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      dropShadow: {
        primaryBlue: "0px 6px 12px 0px rgba(114, 122, 237, 0.50)",
        primaryOrange: "0px 6px 12px 0px rgba(237, 159, 114, 0.50)",
      },
      borderColor: {
        basicInput: "rgba(114, 122, 237, 0.25)",
        orange: "rgba(237, 159, 114, 0.75)",
        hoverInput: "rgba(114, 122, 237, 0.50)",
        focusInput: "#727AED",
        errorInput: "#ED7272",
      },
      fontFamily: {
        sansBold: "SansBold",
        sansMedium: "SansMedium",
        sansRegular: "SansRegular",
      },
      backgroundColor: {
        body: "#F7F7FC",
        quizCart: "#ffffff",
        bgOrange: "rgba(237, 159, 114, 0.75)",
        progress: "rgba(16, 16, 16, 0.15)",
        bgBlue: "#727AED",
        bgGreen: '#5EB25D',
        bgOrange: '#ED9F72'
      },
      colors: {
        gray: "rgba(16, 16, 16, 0.35)",
        progressBg: 'rgba(114, 122, 237, 0.25)',
        green: '#5EB25D',
        lightGray: 'rgba(255, 255, 255, 0.75)',
        darkGray: "rgba(16, 16, 16, 0.50)",
        count: "rgba(237, 159, 114, 0.75)",
        circular: "rgba(237, 159, 114, 1)",
        basic: "#101010",
        placeholderInput: "rgba(16, 16, 16, 0.25)",
        error: "#ED7272",
        colorTitle: "#727AED",
        checkColor: "rgba(16, 16, 16, 0.75)",
        buttonShadow: "0px 6px 12px 0px rgba(114, 122, 237, 0.50)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        quiz: "url('/images/backgroundquiz.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
