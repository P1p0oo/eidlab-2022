import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#952AFD", //purple
      secondary: "#FFDC24", //yellow
      tertiary: "#83EAE4", //tertiary
      highlight: "#FF5101", //orange
      body: "black",
      bodyInvert: "white",
    },
  },
  fonts: {
    body: `Kanit, sans-serif`,
    heading: `Kanit, sans-serif`,
  },
  styles: {
    global: {
      "html, body": {
        overflowX: "hidden",
      },
    },
  },
});

export default theme;
