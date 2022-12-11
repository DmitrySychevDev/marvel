// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { observable, action, makeObservable, runInAction } from 'mobx';
import { Theme } from '@mui/system';

// Themes
import { lightTheme } from 'themes/lightTheme';
import { darkTheme } from 'themes/darkTheme';

class ThemeStore {
  @observable
  theme: Theme = lightTheme;

  constructor() {
    makeObservable(this);
  }

  @action
  setDark() {
    runInAction(() => {
      this.theme = darkTheme;
    });
  }

  @action
  setLight() {
    runInAction(() => {
      this.theme = lightTheme;
    });
  }
}

export default new ThemeStore();
