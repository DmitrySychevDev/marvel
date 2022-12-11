import React, { useMemo, useEffect } from 'react';

import { Grid, TextField } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useTranslation } from 'react-i18next';
import debouce from 'lodash.debounce';

// Styles
import { styles } from './SearchStyle';

const useStyles = makeStyles()(styles);

interface SearchProps {
  searchParams: string;
  searchEvent: (params: string | undefined) => void;
}

const Search: React.FC<SearchProps> = ({ searchParams, searchEvent }) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val) searchEvent(val);
    else searchEvent(undefined);
  };

  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 2000);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

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
          sx={{ '& input': { color: 'text.secondary' } }}
          onChange={debouncedResults}
        />
      </Grid>
    </Grid>
  );
};
export default Search;
