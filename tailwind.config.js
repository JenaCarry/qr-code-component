/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(212, 45%, 89%)",
        "title-color": "hsl(218, 44%, 22%)",
        "paragraph-color": "hsl(220, 15%, 55%)",
      },
    },
  },
  plugins: [],
};
