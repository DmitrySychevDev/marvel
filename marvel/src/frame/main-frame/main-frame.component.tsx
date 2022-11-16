import React from "react";
import { AppBar, Grid, Typography, Link } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import MarvelLogo from "../../assets/marvel-logo.svg";
import { styles } from "./main-frame.style";
import { Characters } from "../../pages";

const useStyles = makeStyles()(styles);

const MainFrame: React.FC = () => {
  const { classes } = useStyles(undefined);

  const year: number = new Date().getFullYear();

  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="space-between"
      className={classes.root}
    >
      <Grid item>
        <AppBar
          position="static"
          color="primary"
          className={`${classes.header} ${classes.bar}`}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item className={classes.logo}>
              <img src={MarvelLogo} alt="logo" />
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Typography variant="body1">Characters</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">Comics</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">Series</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AppBar>
      </Grid>
      <Grid item>
        <Characters />
      </Grid>
      <Grid item>
        <AppBar
          position="static"
          color="secondary"
          className={`${classes.footer} ${classes.bar}`}
        >
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
    </Grid>
  );
};

export default MainFrame;
