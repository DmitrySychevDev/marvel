import React from "react";

import { AppBar, Grid, Typography, Link } from "@mui/material";
import { makeStyles } from "tss-react/mui";

// Logo
import MarvelLogo from "assets/marvel-logo.svg";

// Styles
import { styles } from "./FooterStyle";

const useStyles = makeStyles()(styles);

const year: number = new Date().getFullYear();

const Footer: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Grid item>
      <AppBar position="static" color="secondary" className={classes.root}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item className={classes.logo}>
            <img src={MarvelLogo} alt="logo" />
            <Typography variant="body1" component="h3">
              Data provided by Marvel. © {year} MARVEl
            </Typography>
            <div>
              <Link
                href="https://developer.marvel.com/"
                underline="hover"
                color="inherit"
              >
                developer.marvel.com
              </Link>
            </div>
          </Grid>
        </Grid>
      </AppBar>
    </Grid>
  );
};

export default Footer;
