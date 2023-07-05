/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dirtyWhite: "#F2EAE1",
        yellow: "#FEAF00",
        gray: "#6C6C6C",
      },
      fontSize: {
        sm: "14px",
        md: "20px",
        xlarge: "30px",
      },
    },
  },
  plugins: [],
};
