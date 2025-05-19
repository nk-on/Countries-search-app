/** @type {import('tailwindcss').Config} */
export default {
 darkMode:'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "0px 2px 4px rgba(0, 0, 0, 0.0562443)",
      },
    },
  },
  plugins: [],
};
