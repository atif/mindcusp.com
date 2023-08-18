import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        128: "32rem",
      },
      screens: {
        sm: "320px",
      },
      colors: {
        primary: {
          "50": "#fef4ee",
          "100": "#fde6d7",
          "200": "#fbc9ad",
          "300": "#f8a479",
          "400": "#f36a36",
          "500": "#f0501f",
          "600": "#e23714",
          "700": "#bb2713",
          "800": "#952117",
          "900": "#781e16",
          "950": "#410b09",
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
export default config;
