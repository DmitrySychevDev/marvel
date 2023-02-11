import React, { useState } from 'react';

import {
  Typography,
  Card as MuiCard,
  CardMedia,
  CardContent,
  CardActionArea,
  CardHeader,
  IconButton
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NotSelectedIcon from '@mui/icons-material/FavoriteBorder';
import Selected from '@mui/icons-material/Favorite';

// Types
import { Data } from 'types';

// Stores
import { cardStore } from 'store';

// Styles

import { styles } from './CardStyle';

export interface CardProps extends Data {
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
  const { cardsKeys } = cardStore;
  const [isSelected, setIsSelected] = useState<boolean>(
    cardsKeys.includes(type + id)
  );

  const onCardClick: () => void = () => {
    navigate(`/${type}/${id}`);
  };

  const onHeartClick = () => {
    if (isSelected) {
      cardStore.deleteCard(type + id);
    } else {
      cardStore.addCard(id, picture, title, type, description);
    }
    setIsSelected((prev) => !prev);
  };
  console.log(cardsKeys);

  return (
    <MuiCard className={classes.card}>
      <CardHeader
        title={
          <Typography variant="h5" color="primary">
            {title}
          </Typography>
        }
        action={
          <IconButton onClick={onHeartClick}>
            {isSelected ? (
              <Selected color="primary" />
            ) : (
              <NotSelectedIcon color="primary" />
            )}
          </IconButton>
        }
        sx={{ color: 'primary' }}
      />
      <CardActionArea sx={{ height: '100%' }} onClick={onCardClick}>
        <CardMedia component="img" height="300" image={picture} alt="item" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description?.length
              ? `${description.substring(0, 200)}...`
              : t('emptyDescription')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};

export default Card;
