import { makeAutoObservable } from "mobx";
import { Theme } from "@mui/system";

// Themes
import { lightTheme } from "themes/lightTheme";
import { darkTheme } from "themes/darkTheme";

class ThemeStore {
  theme: Theme = lightTheme;

  constructor() {
    makeAutoObservable(this);
  }

  setDark() {
    this.theme = darkTheme;
  }

  setLight() {
    this.theme = lightTheme;
  }
}

export default new ThemeStore();
