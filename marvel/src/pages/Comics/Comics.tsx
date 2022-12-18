import React, { useState, useEffect, useRef } from 'react';

import { Typography, Box, Grid, CircularProgress, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { VirtuosoGrid, VirtuosoHandle } from 'react-virtuoso';
import debouce from 'lodash.debounce';

// Components
import { Search, Card } from 'components';
import {
  ItemContainer,
  ItemWrapper,
  ListContainer
} from 'components/ui/CastomGrid';

// Store
import { comicsStore } from 'store';

// Types
import { ComicsData } from 'types/ComicsData';

const Comics: React.FC = observer(() => {
  const { t } = useTranslation();
  const { searchQuery, error, loading, comics } = comicsStore;
  const virtuosoRef = useRef<VirtuosoHandle>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    comicsStore.getComicsList();
  }, []);
  useEffect(() => {
    comicsStore.getComicsList();
    setHasMore(true);
  }, [searchQuery]);

  const count = comics.data.total ?? 0;

  const load = (index: number) => {
    if (index + 18 >= count) {
      setHasMore(false);
    }
    if (!loading && hasMore) {
      comicsStore.getMoreComics(index + 1);
    }
  };
  const handleLoad = debouce(load, 1000);

  const search = (searchStr: string | undefined) => {
    comicsStore.setSearchQuery(searchStr);
  };

  const PageContent: React.FC = () => {
    return (
      <VirtuosoGrid
        style={{ width: '100%', height: '100vh' }}
        useWindowScroll
        data={comics.data.results}
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
                    {t('noMoreComics')}
                  </Typography>
                )}
                {!count && !loading && (
                  <Typography
                    variant="h2"
                    color="primary"
                    sx={{ marginLeft: '15px' }}
                  >
                    {`${t('comics')} ${t('notFound')}`}
                  </Typography>
                )}
              </div>
            );
          }
        }}
        ref={virtuosoRef}
        itemContent={(index: number, comic: ComicsData) => {
          return (
            <ItemWrapper>
              <Card
                picture={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                title={comic.title}
                description={comic.description}
                id={comic.id.toString()}
                type="comics"
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
            {`${t('comics')}(${count})`}
          </Typography>
          <Search
            searchParams="comics"
            searchEvent={search}
            defaultText={searchQuery}
          />
          <PageContent />
          {error && <Alert severity="error">{t('error')}</Alert>}
        </Box>
      )}
    </Box>
  );
});

export default Comics;
