import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

export const getDesignToken = (mode: PaletteMode) => {
  switch (mode) {
    case "light":
      return lightTheme;
    case "dark":
      return darkTheme;
  }
};
