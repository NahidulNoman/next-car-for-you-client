/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui : {
    themes : [
        {
          roadThemes :{
            primary: "#65C3C8",
            secondary : "#3ABFF8",
            accent : "#323F5C",
            neutral: "#B9C6D7",
            success: "#36D399",
            error: "#F87272",
            "base-100": "#E3EBF5",
          }
        }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
