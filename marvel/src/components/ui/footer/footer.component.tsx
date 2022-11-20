import React from "react";
import { AppBar, Grid, Typography, Link } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import MarvelLogo from "../../../assets/marvel-logo.svg";
import { styles } from "./footer.style";

const useStyles = makeStyles()(styles);

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  const { classes } = useStyles(undefined);
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
