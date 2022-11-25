import React from "react";

import { Grid, TextField, Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";

// Styles
import { styles } from "./SearchStyle";

const useStyles = makeStyles()(styles);

const Search: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      className={classes.root}
    >
      <Grid item className={classes.inputWraper}>
        <TextField
          className={classes.input}
          variant="outlined"
          label="Search for Characters by Name"
        />
      </Grid>
      <Grid item className={classes.buttonWraper}>
        <Button variant="outlined" size="large" className={classes.button}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};
export default Search;