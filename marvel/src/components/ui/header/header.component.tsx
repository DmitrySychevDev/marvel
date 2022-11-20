import React from "react";
import { AppBar, Grid } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import MarvelLogo from "../../../assets/marvel-logo.svg";
import { styles } from "./header.style";

import { NavigationButton } from "../..";

const useStyles = makeStyles()(styles);

const Header: React.FC = () => {
  const { classes } = useStyles(undefined);
  return (
    <Grid item>
      <AppBar
        position="static"
        color="primary"
        className={classes.root}
        sx={{ padding: { xs: "10px 20px", md: "20px 30px", lg: "20px 30px" } }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item className={classes.logo}>
            <img src={MarvelLogo} alt="logo" />
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <NavigationButton linkTo="/" title="Characters" />
              <NavigationButton linkTo="/comics" title="Comics" />
              <NavigationButton linkTo="/series" title="Seriess" />
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </Grid>
  );
};

export default Header;
