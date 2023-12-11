import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "hsl(var(--color-white) / <alpha-value>)",
        mediumGray: "hsl(var(--color-mediumgrey) / <alpha-value>)",
        lightGray: "hsl(var(--color-lightGray) / <alpha-value>)",
        orange: "hsl(var(--color-orange) / <alpha-value>)",
        veryDarkBlue: "hsl(var(--Very-Dark-Blue) / <alpha-value>)",
      },
    },
    plugins: [],
  },
};
export default config;
