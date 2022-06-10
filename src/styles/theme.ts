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
    red: {
      "900": "#63171B",
      "800": "#822727",
      "700": "#9B2C2C",
      "600": "#C53030",
      "500": "#E53E3E",
      "400": "#F56565",
      "300": "#FC8181",
      "200": "#FEB2B2",
      "100": "#FED7D7",
      "50": "#FFF5F5",
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
    global: {
      body: {
        bg: "gray.700",
        color: "gray.50",
      },
    },
  },
});
