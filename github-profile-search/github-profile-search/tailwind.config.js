/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#07f",
      white: "#fff",
      red: "#f64646",
      grayishblue: "#697c9b",
      desautaretedblue: "#4b699b",
      darkblue: "#2a3341",
      saturatedwhite: "#f5f7ff",
      verydarkblue: "#141d2e",
      darkdesaturatedblue: "#1e2b48",
      hoverblue: "#61abff",
    },
    extend: {
      fontFamily: {
        spaceMono: ["Space Mono"],
      },
    },
  },
  plugins: [],
};
