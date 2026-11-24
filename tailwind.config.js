/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        imz: {
          "navy-900": "var(--imz-navy-900)",
          "navy-700": "var(--imz-navy-700)",
          "green-900": "var(--imz-green-900)",
          "green-600": "var(--imz-green-600)",
          cream: "var(--imz-cream)",
          white: "var(--imz-white)",
          border: "var(--imz-border)",
          "border-strong": "var(--imz-border-strong)",
          "amber-600": "var(--imz-amber-600)",
          "amber-400": "var(--imz-amber-400)",
          "purple-600": "var(--imz-purple-600)",
          "mint-200": "var(--imz-mint-200)",
          "mint-900": "var(--imz-mint-900)",
          "sky-200": "var(--imz-sky-200)",
          "sky-900": "var(--imz-sky-900)",
          text: "var(--imz-text)",
          "text-muted": "var(--imz-text-muted)",
          "text-faint": "var(--imz-text-faint)",
        },
      },
      fontFamily: {
        heading: ["var(--imz-font-heading)"],
        body: ["var(--imz-font-body)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
