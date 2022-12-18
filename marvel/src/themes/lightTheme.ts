import { Theme } from '@mui/system';
import { createTheme, responsiveFontSizes } from '@mui/material';

export const lightTheme: Theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#e62429'
      },
      secondary: {
        main: '#696969'
      },
      warning: {
        main: '#f50057'
      },
      text: {
        primary: '#ffffff'
      }
    }
  })
);
