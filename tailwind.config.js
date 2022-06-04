module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        redhat: ["Red Hat Display", "sans-serif"],
      },
      screens: {
        sm: "350px",
        md: "650px",
        lg: "900px",
        xl: "1200px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000CFF",
          "primary-content": "#ffffff",
          secondary: "#000229",
          accent: "#EA1D24",
          "accent-content": "#ffffff",
          "overlay": "#000229",
          
          // info: "#ccd6f6",
          warning: "#F4C316",
          // icon: "#a8b2d0",
        },
      },
    ],
  },
};
