import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#313131",
      "600": "#494848",
      "500": "#3D3C3C",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    green:{
      "50": "#F0FFF4",
      "100": "#C6F6D5",
      "200": "#9AE6B4",
      "300": "#68D391",
      "400": "#48BB78",
      "500": "#38A169",
      "600": "#2F855A",
      "700": "#1A6855",
      "800": "#22543D",
      "900": "#1C4532",
    }
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    globals: {
      body: {
        bg: "gray.700",
        color: "gray.50",
      },
    },
  },
});
