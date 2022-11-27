import React, { useState, useContext } from "react";

import LightIcon from "@mui/icons-material/Brightness7";
import DarkIcon from "@mui/icons-material/Brightness4";
import { AppBar, Grid, IconButton } from "@mui/material";
import { makeStyles } from "tss-react/mui";

// Components
import { NavigationButton, ChangeThemeContext } from "components";

// Logo
import MarvelLogo from "assets/marvel-logo.svg";

// Styles
import { styles } from "./HeaderStyle";

const useStyles = makeStyles()(styles);

const Header: React.FC = () => {
  const { classes } = useStyles(undefined);
  const linkStyle = {
    color: "#ffffff",
  };

  const [isLight, setIsLight] = useState<boolean>(true);
  const toggleTheme = useContext(ChangeThemeContext);

  const changeThemeEvent = () => {
    toggleTheme();
    setIsLight((prev) => !prev);
  };
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
              <NavigationButton
                linkTo="/"
                title="Characters"
                styleParams={linkStyle}
              />
              <NavigationButton
                linkTo="/comics"
                title="Comics"
                styleParams={linkStyle}
              />
              <NavigationButton
                linkTo="/series"
                title="Series"
                styleParams={linkStyle}
              />
            </Grid>
          </Grid>
          <Grid item>
            <IconButton onClick={changeThemeEvent}>
              {isLight ? <LightIcon /> : <DarkIcon />}
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
    </Grid>
  );
};

export default Header;
