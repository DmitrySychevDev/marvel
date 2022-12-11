import React, { useEffect, useState } from 'react';

import {
  Typography,
  Box,
  Grid,
  Pagination,
  CircularProgress,
  Alert
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';

// Componets
import { Search, Card } from 'components';

// Store
import { seriesStore } from 'store';

const Series: React.FC = observer(() => {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    seriesStore.getSeriesList();
    return () => {
      seriesStore.setOffset(0);
      seriesStore.setSearchQuery(undefined);
    };
  }, []);
  useEffect(() => {
    seriesStore.getSeriesList();
  }, [seriesStore.offset, seriesStore.searchQuery]);

  useEffect(() => {
    setPage(1);
    seriesStore.setOffset(0);
  }, [seriesStore.searchQuery]);

  const count = seriesStore.seriesList.data.total ?? 0;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    seriesStore.setOffset((value - 1) * 20);
    setPage(value);
  };
  const search = (searchStr: string | undefined) => {
    seriesStore.setSearchQuery(searchStr);
  };
  return (
    <Box>
      {!seriesStore.error && (
        <Box>
          <Typography
            variant="h2"
            component="h2"
            color="primary"
            sx={{ marginLeft: '15px', marginBottom: '30px' }}
          >
            {`${t('series')}(${count})`}
          </Typography>
          <Search searchParams="series" searchEvent={search} />
          {!seriesStore.loading && (
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
                    {seriesStore.seriesList.data.results.map((item) => (
                      <Card
                        key={item.id}
                        id={item.id.toString()}
                        picture={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                        title={item.title}
                        description={item.description}
                        type="series"
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
                  {`${t('series')} ${t('notFound')}`}
                </Typography>
              )}
            </Box>
          )}
        </Box>
      )}
      {seriesStore.loading && (
        <Grid container justifyContent="center">
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      )}
      {seriesStore.error && <Alert severity="error">{t('error')}</Alert>}
    </Box>
  );
});

export default Series;
