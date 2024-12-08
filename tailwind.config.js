export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      boxShadow: {
        "neumorphic-light": "8px 8px 15px #d1d9e6, -8px -8px 15px #ffffff",
        "neumorphic-dark":
          "inset 8px 8px 15px #d1d9e6, inset -8px -8px 15px #ffffff",
      },
      colors: {
        lightGray: "#f0f0f3",
        darkGray: "#d1d9e6",
        blueAccent: "#86c5f4",
        pinkAccent: "#f4a4c4",
      },
    },
  },
  plugins: [],
};
