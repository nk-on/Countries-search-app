/** @type {import('tailwindcss').Config} */
export default {
 darkMode:'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "0px 2px 4px rgba(0, 0, 0, 0.0562443)",
        "custom-gray":"0px 0px 4px 1px rgba(0, 0, 0, 0.104931)"
      },
    },
  },
  plugins: [],
};