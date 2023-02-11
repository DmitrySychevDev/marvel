import { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export interface ThemeProps {
  color: string;
}

const hoverColor: string = '#FFA500';

export const useStyles = makeStyles<ThemeProps>()(
  (theme: Theme, params: ThemeProps) => ({
    root: {
      color: params.color,
      textDecoration: 'none',
      '&:hover': {
        color: hoverColor
      }
    },
    activeLink: {
      textDecoration: 'underline',
      color: params.color,
      '&:hover': {
        color: hoverColor
      }
    }
  })
);
