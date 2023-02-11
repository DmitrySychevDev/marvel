import React from 'react';

import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

// Styles
import { useStyles, ThemeProps } from './NavigationButtonStyle';

interface NavigationButtonProps {
  linkTo: string;
  title: string;
  styleParams: ThemeProps;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  linkTo,
  title,
  styleParams
}) => {
  const { classes } = useStyles(styleParams);
  return (
    <Grid item>
      <NavLink
        className={({ isActive }) =>
          isActive ? classes.activeLink : classes.root
        }
        to={linkTo}
      >
        {title}
      </NavLink>
    </Grid>
  );
};

export default NavigationButton;
