import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "cs-bg": "#f6f6f6",

        "cs-white": "#ffffff",
        "cs-white2": "#f6f6f6",

        "cs-black": "#3A3A3A",

        "cs-fade": "#434343",
        "cs-fade1": "#606060",
        "cs-fade2": "#8A8A8A",

        "cs-red": "#D42525",
        "cs-accent": "#1E81A0",
        "cs-accent2": "#89C7EA",
      },
    },
  },
  plugins: [],
};
export default config;
