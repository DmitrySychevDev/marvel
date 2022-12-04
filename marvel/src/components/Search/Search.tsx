import React from "react";

import { Grid, TextField, Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useTranslation } from "react-i18next";

// Styles
import { styles } from "./SearchStyle";

const useStyles = makeStyles()(styles);

interface SearchProps {
  searchParams: string;
}

const Search: React.FC<SearchProps> = ({ searchParams }) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

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
          label={t(`${searchParams}Input`)}
          sx={{ "& input": { color: "text.secondary" } }}
        />
      </Grid>
      <Grid item className={classes.buttonWraper}>
        <Button variant="outlined" size="large" className={classes.button}>
          {t("search")}
        </Button>
      </Grid>
    </Grid>
  );
};
export default Search;
