import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      fontSize: {
        "2xs": "2.25rem",
        content_size: "15px",
      },
      borderWidth: {
        "1": "1px",
        "0.5": "0.5px",
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
        contents_padding: "20px",
        article_gutter_y: "1rem",
      },
      borderRadius: {
        small: "4px",
      },
      width: {
        rectangle_button_width: "2.25rem",
        sidebar_width_lg: "280px",
        sidebar_width_xl: "320px",
        table_width: "500px",
      },
      height: {
        rectangle_button_height: "2.25rem",
      },
      colors: {
        white: "#ffffff",
        gray: {
          500: "#2D3033",
        },
        font_color: "#e0e0e0",
        font_secondary_color: "hsla(0, 0%, 88%, .749)",
        font_link_color: "#EC9F19",
        font_link_hover_color: "#bd7f14",
        component_background_color: "#000000",
        nav_bar_hover_color: "hsla(0, 0%, 100%, 0.1)",
        button_background_color: "#2e2e2e",
        button_border_color: "#3e3e3e",
        button_hover_color: "#4a4a4a",
        card_content_color: "#1c1d1f",
        card_border_color: "#444",
        table_border_color: "#383b40",
        font_content_color: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
