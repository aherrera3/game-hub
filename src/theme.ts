// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config. config object
const config: ThemeConfig = {
  //  anotating it with theme config
  initialColorMode: "dark",
  useSystemColorMode: false, // default
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#edededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
  },
});

export default theme;

//https://chakra-ui.com/docs/styled-system/color-mode
