import { extendTheme, textDecoration } from "@chakra-ui/react";

const theme = extendTheme({
  sizes: {
    container: {
      xxl: "1680px",
    },
  },
  colors: {
    brand: {
      primary: "#952AFD", //purple
      secondary: "#FFDC24", //yellow
      tertiary: "#83EAE4", //tertiary
      highlight: "#FF5101", //orange
      body: "#1F2028",
      bodyInvert: "white",
    },
  },
  fonts: {
    body: `Kanit, sans-serif`,
    heading: `Kanit, sans-serif`,
  },
  styles: {
    global: {
      html: {
        overflowX: "hidden",
        scrollBehavior: "smooth",
      },
      body: {
        overflowX: "hidden",
        color: "#1F2028",
      },
      a: {
        _hover: {
          textDecoration: "none",
        },
        textDecoration: "none",
      },
    },
  },
});

export default theme;
