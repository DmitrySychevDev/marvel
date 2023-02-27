import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

// Store
import { cardStore } from 'store';

// Components
import { Card } from 'components';

const Favourites = () => {
  const { t } = useTranslation();

  const { favouritesCards } = cardStore;
  return (
    <Box>
      <Typography
        variant="h2"
        color="primary"
        sx={{ marginLeft: '15px', marginBottom: '50px' }}
      >
        {t('favourites')}
      </Typography>
      <Grid container justifyContent="space-around" rowSpacing={5}>
        {favouritesCards.map((card) => (
          <Grid item sx={{ width: { lg: '30%', md: '45%', xs: '90%' } }}>
            <Card
              key={card.key}
              picture={card.picture}
              title={card.title}
              description={card.description}
              id={card.id}
              type={card.type}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default observer(Favourites);
