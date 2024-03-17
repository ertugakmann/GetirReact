/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index/html"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        "brand-color": "#5d3ebc",
      }),
    },
  },
  plugins: [],
};
