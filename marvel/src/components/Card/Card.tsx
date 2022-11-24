import React from "react";

import {
  Typography,
  Card as MuiCard,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";

// Styles
import { styles } from "./CardStyle";

interface CardProps {
  picture: string;
  title: string;
  description: string;
}

const useStyles = makeStyles()(styles);

const Card: React.FC<CardProps> = ({ picture, title, description }) => {
  const { classes } = useStyles();

  return (
    <Box border={1} borderColor="secondary.main" className={classes.root}>
      <MuiCard className={classes.card}>
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
    </Box>
  );
};

export default Card;
