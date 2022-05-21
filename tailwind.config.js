module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        redhat: ["Red Hat Display", "sans-serif"],
      },
      screens: {
        sm: "350px",
        md: "640px",
        lg: "800px",
        xl: "1280px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000CFF",
          secondary: "#000229",
          accent: "#EA1D24",
          // info: "#ccd6f6",
          warning: "#F4C316",
          // icon: "#a8b2d0",
        },
      },
    ],
  },
};
