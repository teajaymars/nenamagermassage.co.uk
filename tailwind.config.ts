import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Commissioner", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        merino: {
          "50": "#fdf6eb", // <- original tone
          "100": "#fbeed9",
          "200": "#f6dab2",
          "300": "#f1c080",
          "400": "#ea9d4d",
          "500": "#e4812b",
          "600": "#d66820",
          "700": "#b1501d",
          "800": "#8e401e",
          "900": "#72371c",
          "950": "#3e1a0c",
        },
        olive: {
          "50": "#f5f5f0",
          "100": "#e6e9de",
          "200": "#d0d6c0",
          "300": "#b3bc9a",
          "400": "#a2ac87", // <- original tone
          "500": "#7a865c",
          "600": "#5f6a46",
          "700": "#4a5239",
          "800": "#3d4331",
          "900": "#363b2c",
          "950": "#1b1e15",
        },
        // complementing the 'merino' palette
        zumthor: {
          "50": "#ebf2fd",
          "100": "#dee9fb",
          "200": "#c5daf8",
          "300": "#9dc2f3",
          "400": "#6ea0ec",
          "500": "#4c7fe5",
          "600": "#3762d9",
          "700": "#2e4fc7",
          "800": "#2b41a2",
          "900": "#283b80",
          "950": "#1d264e",
        },
      },
    },
  },
};
