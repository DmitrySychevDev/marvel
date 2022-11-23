import React from "react";

import { Grid } from "@mui/material";
import { makeStyles } from "tss-react/mui";

import { NavLink } from "react-router-dom";
import { styles } from "./navigation-button.style";

const useStyles = makeStyles()(styles);

const NavigationButton: React.FC<NavigationButtonProps> = ({
  linkTo,
  title,
}) => {
  const { classes } = useStyles(undefined);
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

interface NavigationButtonProps {
  linkTo: string;
  title: string;
}

export default NavigationButton;
