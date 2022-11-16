import React from "react";
import {
  Typography,
  Card as MuiCard,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { Data } from "../../types";
import { styles } from "./card.style";

interface CardProps {
  picture: string;
  title: string;
  description: string;
}

const useStyles = makeStyles()(styles);

const Card = ({ picture, title, description }: CardProps) => {
  const { classes } = useStyles(undefined);

  return (
    <Box border={1} borderColor="secondary.main">
      <MuiCard className={classes.root}>
        <CardMedia component="img" height="250" image={picture} alt="item" />
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
