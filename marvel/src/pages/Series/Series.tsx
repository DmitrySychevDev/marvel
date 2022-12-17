import React, { useEffect, useState, useRef } from 'react';

import { Typography, Box, Grid, CircularProgress, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { VirtuosoGrid, VirtuosoHandle } from 'react-virtuoso';
import debouce from 'lodash.debounce';

// Componets
import { Search, Card } from 'components';
import {
  ItemContainer,
  ItemWrapper,
  ListContainer
} from 'components/ui/CastomGrid';

// Store
import { seriesStore } from 'store';

// Types
import { SeriesData } from 'types/SeriesData';

const Series: React.FC = observer(() => {
  const { t } = useTranslation();
  const { searchQuery, error, loading, seriesList } = seriesStore;
  const virtuosoRef = useRef<VirtuosoHandle>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    seriesStore.getSeriesList();
    return () => {
      seriesStore.setOffset(0);
      seriesStore.setSearchQuery(undefined);
    };
  }, []);
  useEffect(() => {
    seriesStore.getSeriesList();
    setHasMore(true);
  }, [searchQuery]);

  const count = seriesList.data.total ?? 0;

  const load = (index: number) => {
    if (index + 18 >= count) {
      setHasMore(false);
    }
    if (!loading && hasMore) {
      seriesStore.getMoreSeries(index + 1);
    }
  };
  const handleLoad = debouce(load, 1000);

  const search = (searchStr: string | undefined) => {
    seriesStore.setSearchQuery(searchStr);
  };

  const PageContent: React.FC = () => {
    return (
      <VirtuosoGrid
        style={{ width: '100%', height: '100vh' }}
        useWindowScroll
        data={seriesList.data.results}
        endReached={handleLoad}
        components={{
          List: ListContainer,
          Item: ItemContainer,
          Footer: () => {
            return (
              <div>
                {loading && hasMore && (
                  <Grid container justifyContent="center">
                    <Grid item>
                      <CircularProgress />
                    </Grid>
                  </Grid>
                )}
                {!hasMore && !loading && (
                  <Typography
                    variant="h2"
                    color="primary"
                    sx={{ textAlign: 'center' }}
                  >
                    {t('noMoreSeries')}
                  </Typography>
                )}
                {!count && !loading && (
                  <Typography
                    variant="h2"
                    color="primary"
                    sx={{ marginLeft: '15px' }}
                  >
                    {`${t('series')} ${t('notFound')}`}
                  </Typography>
                )}
              </div>
            );
          }
        }}
        ref={virtuosoRef}
        itemContent={(index: number, series: SeriesData) => {
          return (
            <ItemWrapper>
              <Card
                picture={`${series.thumbnail.path}.${series.thumbnail.extension}`}
                title={series.title}
                description={series.description}
                id={series.id.toString()}
                type="series"
              />
            </ItemWrapper>
          );
        }}
      />
    );
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
            {`${t('series')}(${count})`}
          </Typography>
          <Search
            searchParams="series"
            searchEvent={search}
            defaultText={searchQuery}
          />
          <PageContent />
        </Box>
      )}
      {error && <Alert severity="error">{t('error')}</Alert>}
    </Box>
  );
});

export default Series;
