import React from "react";

import {
  Typography,
  Card as MuiCard,
  CardMedia,
  CardContent,
  Box,
  CardActionArea,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useNavigate } from "react-router-dom";

// Types
import { Data } from "types";

// Styles
import { styles } from "./CardStyle";

const useStyles = makeStyles()(styles);

const Card: React.FC<Data> = ({ id, picture, title, description }) => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const onCardClick: () => void = () => {
    if (id.includes("characters")) {
      navigate(`/characters/${id.substring(11)}`);
    } else if (id.includes("comics")) {
      navigate(`/comics/${id.substring(7)}`);
    } else if (id.includes("series")) {
      navigate(`/series/${id.substring(7)}`);
    }
  };

  return (
    <Box border={1} borderColor="secondary.main" className={classes.root}>
      <CardActionArea>
        <MuiCard className={classes.card} onClick={onCardClick}>
          <CardMedia component="img" height="350" image={picture} alt="item" />
          <CardContent>
            <Typography variant="h5" color="primary.main">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </MuiCard>
      </CardActionArea>
    </Box>
  );
};

export default Card;
