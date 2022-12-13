import React, { useEffect, useState } from 'react';

import {
  Box,
  Grid,
  Typography,
  Pagination,
  CircularProgress,
  Alert
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';

// Components
import { Card, Search } from 'components';

// Store
import { charactersStore } from 'store';

const Characters: React.FC = observer(() => {
  const { t } = useTranslation();
  const { offset, searchQuery, error, loading, characters } = charactersStore;
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    charactersStore.getCharactersList();
  }, []);
  useEffect(() => {
    charactersStore.getCharactersList();
  }, [offset, searchQuery]);

  useEffect(() => {
    setPage(1);
    charactersStore.setOffset(0);
  }, [searchQuery]);

  const count = characters.data.total ?? 0;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    charactersStore.setOffset((value - 1) * 20);
    setPage(value);
  };
  const search = (searchStr: string | undefined) => {
    charactersStore.setSearchQuery(searchStr);
  };

  return (
    <Box>
      {!error && (
        <Box>
          <Typography
            variant="h2"
            component="h2"
            color="primary"
            sx={{ marginLeft: '15px', marginBottom: '30px' }}
          >
            {`${t('characters')}(${characters.data.total})`}
          </Typography>
          <Search searchParams="characters" searchEvent={search} />
          {!loading && (
            <Box>
              {count ? (
                <Box>
                  <Grid container justifyContent="center">
                    <Grid item>
                      <Pagination
                        count={Math.ceil(count / 20)}
                        color="primary"
                        page={page}
                        onChange={handleChange}
                        sx={{
                          '& .MuiPagination-ul>li': {
                            '& button': { color: 'text.secondary' }
                          }
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="space-around">
                    {characters?.data?.results.map((item) => (
                      <Card
                        key={item.id}
                        id={item.id.toString()}
                        picture={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                        title={item.name}
                        description={item.description}
                        type="characters"
                      />
                    ))}
                  </Grid>
                </Box>
              ) : (
                <Typography
                  variant="h2"
                  color="primary"
                  sx={{ marginLeft: '15px' }}
                >
                  {`${t('characters')} ${t('notFound')}`}
                </Typography>
              )}
            </Box>
          )}
        </Box>
      )}
      {loading && (
        <Grid container justifyContent="center">
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      )}
      {error && <Alert severity="error">{t('error')}</Alert>}
    </Box>
  );
});

export default Characters;
