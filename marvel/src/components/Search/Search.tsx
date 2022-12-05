import React, { useState } from "react";

import { Grid, TextField, Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useTranslation } from "react-i18next";

// Styles
import { styles } from "./SearchStyle";

const useStyles = makeStyles()(styles);

interface SearchProps {
  searchParams: string;
  searchEvent: (params: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchParams, searchEvent }) => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState<string>("");

  const handleClick = () => {
    searchEvent(inputValue);
  };

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
          value={inputValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(event.target.value);
          }}
        />
      </Grid>
      <Grid item className={classes.buttonWraper}>
        <Button
          variant="outlined"
          size="large"
          className={classes.button}
          onClick={handleClick}
        >
          {t("search")}
        </Button>
      </Grid>
    </Grid>
  );
};
export default Search;
