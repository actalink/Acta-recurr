/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "acta-violet": "#A100F2",
        "acta-violet-2": "#c652f7",
        "acta-violet-3": "#A240ED",
        "acta-violet-4": "#BB76F7",
        "acta-grey": "#666565",
        "acta-light-grey": "#ebebeb",
      }
    },
  },
  plugins: [],
}

