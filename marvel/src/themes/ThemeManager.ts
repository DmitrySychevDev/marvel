import { PaletteMode } from "@mui/material";
import { Theme } from "@mui/system";

import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

export const getDesignToken: (mode: PaletteMode) => Theme = (
  mode: PaletteMode
) => {
  switch (mode) {
    case "light":
      return lightTheme;
    case "dark":
      return darkTheme;
    default:
      return lightTheme;
  }
};
