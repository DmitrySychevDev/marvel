import React from "react";

import { Grid } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { NavLink } from "react-router-dom";

// Styles
import { styles } from "./NavigationButtonStyle";

interface NavigationButtonProps {
  linkTo: string;
  title: string;
}

const useStyles = makeStyles()(styles);

const NavigationButton: React.FC<NavigationButtonProps> = ({
  linkTo,
  title,
}) => {
  const { classes } = useStyles();
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
