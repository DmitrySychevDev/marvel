import React from "react";

import { Button, Grid, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

const NavigationButton: React.FC<NavigationButtonProps> = ({
  linkTo,
  title,
}) => {
  const navigation = useNavigate();

  return (
    <Grid item>
      <Button
        color="primary"
        onClick={() => {
          navigation(linkTo);
        }}
        variant="text"
      >
        <Typography variant="body1" sx={{ color: "text.primary" }}>
          {title}
        </Typography>
      </Button>
    </Grid>
  );
};

interface NavigationButtonProps {
  linkTo: string;
  title: string;
}

export default NavigationButton;
