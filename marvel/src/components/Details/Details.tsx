import React from "react";

import { Typography, Grid } from "@mui/material";
import { makeStyles } from "tss-react/mui";

import { styles } from "./DetailsStyle";

interface DetailsProps {
  title: string;
  picture: string;
  description: string;
}

const useStyles = makeStyles()(styles);

const Details: React.FC<DetailsProps> = ({ title, picture, description }) => {
  const { classes } = useStyles();
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        item
        className={classes.imageBlock}
        sx={{ width: { lg: "45%", md: "45%", sm: "90%", xs: "90%" } }}
      >
        <img src={picture} alt="detils-img" />
        <Typography variant="h3" color="primary.main">
          {title}
        </Typography>
      </Grid>
      <Grid item sx={{ width: { lg: "45%", md: "45%", sm: "90%", xs: "90%" } }}>
        <Typography variant="h5" component="p" color="text.secondary">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Details;
