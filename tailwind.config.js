/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index/html"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        "second-brand-color": "#7849f7",
        "primary-brand-color": "#5d3ebc",
        "brand-color": "#4c3398",
      }),
      gradientColorStops: (theme) => ({
        "second-brand-color": "#7849f7",
        "primary-brand-color": "#5d3ebc",
        "brand-color": "#4c3398",
      }),
      textColor: (theme) => ({
        "second-brand-color": "#7849f7",
        "primary-brand-color": "#5d3ebc",
        "brand-color": "#4c3398",
        "brand-yellow": "#FFD301",
      }),
      colors: (theme) => ({
        "brand-yellow": " #FFD301",
      }),
    },
  },

  plugins: [],
};
