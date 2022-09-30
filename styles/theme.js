import { extendTheme, textDecoration } from "@chakra-ui/react";

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
      html: {
        overflowX: "hidden",
        scrollBehavior: "smooth",
      },
      body: {
        overflowX: "hidden",
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
