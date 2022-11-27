import React, { ReactElement, useState } from "react";

import { PaletteMode } from "@mui/material";
import { Theme } from "@mui/system";

// Themes
import { lightTheme } from "themes/lightTheme";
import { darkTheme } from "themes/darkTheme";

interface ThemeManagerProps {
  children: ReactElement;
}

const getDesignToken: (mode: PaletteMode) => Theme = (mode: PaletteMode) => {
  switch (mode) {
    case "light":
      return lightTheme;
    case "dark":
      return darkTheme;
    default:
      return lightTheme;
  }
};

const ThemeContext = React.createContext<Theme>(getDesignToken("light"));
const ChangeThemeContext = React.createContext<() => void>(() => {});

const ThemeManager: React.FC<ThemeManagerProps> = ({ children }) => {
  const [theme, setTheme] = useState<PaletteMode>("light");

  const changeTheme = () => {
    if (theme === "dark") setTheme("light");
    else {
      setTheme("dark");
    }
  };
  return (
    <ThemeContext.Provider value={getDesignToken(theme)}>
      <ChangeThemeContext.Provider value={changeTheme}>
        {children}
      </ChangeThemeContext.Provider>
    </ThemeContext.Provider>
  );
};

export { ThemeManager, ThemeContext, ChangeThemeContext };
