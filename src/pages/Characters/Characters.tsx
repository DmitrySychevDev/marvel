import React, { useEffect, useState, useRef } from 'react';

import { Box, Grid, Typography, CircularProgress, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { VirtuosoGrid, VirtuosoHandle } from 'react-virtuoso';
import debouce from 'lodash.debounce';

// Components
import { Card, Search } from 'components';
import {
  ItemContainer,
  ItemWrapper,
  ListContainer
} from 'components/ui/CastomGrid';

// Store
import { charactersStore } from 'store';

// Types
import { CharacterData } from 'types/CharacterData';

const Characters: React.FC = observer(() => {
  const { t } = useTranslation();
  const { searchQuery, error, loading, characters } = charactersStore;
  const virtuosoRef = useRef<VirtuosoHandle>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    charactersStore.getCharactersList();
  }, []);
  useEffect(() => {
    charactersStore.getCharactersList();
    setHasMore(true);
  }, [searchQuery]);

  const count = characters.data.total ?? 0;

  const load = (index: number) => {
    if (index + 18 >= count) {
      setHasMore(false);
    }
    if (!loading && hasMore) {
      charactersStore.getMoreCharacters(index + 1);
    }
  };
  const handleLoad = debouce(load, 1000);

  const search = (searchStr: string | undefined) => {
    charactersStore.setSearchQuery(searchStr);
  };

  const PageContent: React.FC = () => {
    return (
      <VirtuosoGrid
        style={{ width: '100%', height: '100vh' }}
        useWindowScroll
        data={characters.data.results}
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
                    {t('noMoreCharacters')}
                  </Typography>
                )}
                {!count && !loading && (
                  <Typography
                    variant="h2"
                    color="primary"
                    sx={{ marginLeft: '15px' }}
                  >
                    {`${t('characters')} ${t('notFound')}`}
                  </Typography>
                )}
              </div>
            );
          }
        }}
        ref={virtuosoRef}
        itemContent={(index: number, character: CharacterData) => {
          return (
            <ItemWrapper>
              <Card
                picture={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                title={character.name}
                description={character.description}
                id={character.id.toString()}
                type="characters"
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
            {`${t('characters')}(${characters.data.total})`}
          </Typography>
          <Search
            searchParams="characters"
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

export default Characters;
