/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gap: {
        128: "72px",
      },
      maxHeight: {
        128: "268px",
      },
    },
  },
  plugins: [],
};
