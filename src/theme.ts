// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config. config object
const config: ThemeConfig = {
  //  anotating it with theme config
  initialColorMode: "dark",
  useSystemColorMode: false, // default
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;

//https://chakra-ui.com/docs/styled-system/color-mode
