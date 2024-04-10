import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": "2.25rem",
      },
      borderWidth: {
        "1": "1px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        menu_item_gutter_y: "0.5rem",
        nav_logo_margin: "1rem",
        nav_item_gap: "0.5rem",
      },
      borderRadius: {
        small: "4px",
      },
      width: {
        rectangle_button_width: "2.5rem",
        sidebar_width_lg: "280px",
        sidebar_width_xl: "320px",
      },
      colors: {
        white: "#ffffff",
        gray: {
          500: "#2D3033",
        },
        component_background_color: "#000000",
        nav_bar_hover_color: "hsla(0, 0%, 100%, 0.1)",
        card_content_color: "#1c1d1f",
        card_border_color: "#444",
      },
    },
  },
  plugins: [],
};
export default config;
