import { Theme } from '@mui/system';
import { createTheme, responsiveFontSizes } from '@mui/material';

export const darkTheme: Theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#e62429'
      },
      secondary: {
        main: '#909090'
      },
      warning: {
        main: '#fbfbfb'
      },
      text: {
        primary: '#ffffff'
      }
    }
  })
);
