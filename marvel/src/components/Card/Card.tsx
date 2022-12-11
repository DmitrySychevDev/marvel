import React from 'react';

import {
  Typography,
  Card as MuiCard,
  CardMedia,
  CardContent,
  Grid,
  CardActionArea
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Types
import { Data } from 'types';

// Styles
import { styles } from './CardStyle';

interface CardProps extends Data {
  type: string;
}

const useStyles = makeStyles()(styles);

const Card: React.FC<CardProps> = ({
  id,
  picture,
  title,
  description,
  type
}) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onCardClick: () => void = () => {
    navigate(`/${type}/${id}`);
  };

  return (
    <Grid
      item
      sx={{ width: { lg: '30%', md: '30%', sm: '45%', xs: '70%' } }}
      className={classes.root}
    >
      <CardActionArea sx={{ height: '100%' }}>
        <MuiCard onClick={onCardClick} className={classes.card}>
          <CardMedia component="img" height="350" image={picture} alt="item" />
          <CardContent>
            <Typography variant="h5" color="primary.main">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description !== '' ? description : t('emptyDescription')}
            </Typography>
          </CardContent>
        </MuiCard>
      </CardActionArea>
    </Grid>
  );
};

export default Card;
